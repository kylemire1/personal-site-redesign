import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import { rgba } from 'polished';

import vars from '../../styles/vars';

const Input = ({ required, id, placeholder, label, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <FormControl className={!!errorText ? 'error' : ''}>
      <label htmlFor={id}>
        {label} {required ? <span className="required">*</span> : null}
      </label>
      <StyledInput
        {...field}
        helperText={errorText}
        error={!!errorText}
        placeholder={placeholder}
        label={label}
        type={type}
        id={id}
        as={type === 'textarea' ? 'textarea' : 'input'}
      />
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </FormControl>
  );
};

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  input,
  textarea {
    box-shadow: none;
    --webkit-appearance: none;
    border: solid ${vars.pixel} ${vars.colorPrimary};
    border-radius: ${vars.borderRadiusSmall};
    background-color: ${rgba(vars.colorPrimary, 0.05)};
    font-size: ${vars.fontSizeText};
    font-weight: ${vars.fontWeightLight};
    padding: 0.5em;
  }

  label {
    margin-bottom: 0.5rem;
    font-weight: ${vars.fontWeightBold};
    color: ${vars.colorPrimary};
  }

  input {
    height: 3rem;
  }

  textarea {
    min-height: 8rem;
  }

  .required {
    color: ${vars.colorError};
  }

  & + & {
    margin-top: 1.5rem;
  }

  &.error {
    label {
      color: ${vars.colorError};
    }

    input,
    textarea {
      border-color: ${vars.colorError};
    }
  }
`;

const StyledInput = styled.input`
  margin-bottom: 0.5rem;
`;

const ErrorText = styled.div`
  position: absolute;
  bottom: -1.3rem;
  color: ${vars.colorError};
  text-transform: capitalize;
  padding: 0.25em 0;
`;

export default Input;
