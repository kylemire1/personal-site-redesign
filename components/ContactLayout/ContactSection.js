import React from 'react';
import styled from 'styled-components';
import { darken, rgba } from 'polished';

import { Container } from '../styled/global';

import vars from '../../styles/vars';

const ContactSection = () => {
  return (
    <FormContainer>
      <FormWrapper>Contact</FormWrapper>
    </FormContainer>
  );
};

const FormContainer = styled(Container)`
  z-index: 1;
`;

const FormWrapper = styled.div`
  background-color: ${vars.colorWhite};
  box-shadow: 0.25em 0.25em 1.875em ${rgba(vars.colorPrimaryDark, 0.16)};
  border-top-left-radius: ${vars.borderRadiusLarge};
  border-top-right-radius: ${vars.borderRadiusLarge};
  height: 100%;
  padding: 4em 2em 2em;
  margin-top: 2rem;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    background-color: ${darken(0.05, vars.colorWhite)};
    border-top-left-radius: ${vars.borderRadiusLarge};
    border-top-right-radius: ${vars.borderRadiusLarge};
    top: -1em;
    bottom: 0;
    left: 2em;
    right: 2em;
    z-index: -1;
  }
`;

export default ContactSection;
