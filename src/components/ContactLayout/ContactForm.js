import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';

import Input from './Input';

import vars from '../../styles/vars';

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  question: yup.string().required(),
});

const ContactForm = () => {
  const [, setFormSubmitted] = useState(false);
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name: '',
        email: '',
        question: '',
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contactme', ...data }),
        };

        fetch('/', options)
          .then((res) => console.log('Form successfully submitted', { res }))
          .catch((error) => alert(error));

        setSubmitting(false);
        setFormSubmitted(true);
      }}
    >
      {({ handleSubmit }) => (
        <form name="contactme" onSubmit={handleSubmit} data-netlify="true">
          <input type="hidden" name="form-name" value="contactme" />
          <Input name="name" type="text" label="Name" required />
          <Input name="email" type="email" label="Email" required />
          <Input
            name="question"
            type="textarea"
            label="How can I help you?"
            required
          />
          <div>
            <SubmitButton type="submit">Submit</SubmitButton>
          </div>
        </form>
      )}
    </Formik>
  );
};

const SubmitButton = styled.button`
  background-color: ${vars.colorPrimary};
  border: none;
  border-radius: ${vars.borderRadiusSmall};
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeText};
  font-weight: ${vars.fontWeightBold};
  text-align: center;
  padding: 1.25em 1em;
  margin-top: 2rem;
  width: 100%;
  cursor: pointer;
  transition: all 250ms ${vars.ease};
  transition-property: background-color, color;

  :hover,
  :focus {
    background-color: ${vars.colorHighlight};
    color: ${vars.colorPrimaryDark};
    transition: all 250ms ${vars.ease};
    transition-property: background-color, color;
  }
`;

export default ContactForm;
