import React from 'react';
import styled from 'styled-components';
import { darken, rgba } from 'polished';

import { Container } from '../styled/global';

import vars from '../../styles/vars';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <ContactForm />
      </FormWrapper>
    </FormContainer>
  );
};

const FormContainer = styled(Container)`
  z-index: 1;
  grid-row: 4 / 5;
  max-width: 40rem;

  @media (min-width: ${vars.breakpointMedium}) {
    grid-row: 1 / -1;
    grid-column: 2 / 3;
  }
`;

const FormWrapper = styled.div`
  background-color: ${vars.colorWhite};
  box-shadow: 0.25em 0.25em 1.875em ${rgba(vars.colorPrimaryDark, 0.16)};
  border-radius: ${vars.borderRadiusLarge};
  padding: 3rem 2rem;
  margin-top: auto;
  margin-bottom: 1.5rem;
  position: relative;
  display: grid;
  align-content: start;
  height: 100%;

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

  @media (min-width: ${vars.breakpointMedium}) {
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    height: 92%;
  }
`;

export default ContactSection;
