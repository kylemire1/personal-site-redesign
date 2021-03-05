import React from 'react';
import styled from 'styled-components';

import Input from './Input';

import vars from '../../styles/vars';

const ContactForm = () => {
  return (
    <form>
      <Input type="text" name="name" label="Name" id="name" required />
      <Input type="email" name="email" label="Email" id="email" required />
      <Input
        type="textarea"
        name="summary"
        label="What's on your mind?"
        id="summary"
        required
      />
      <SubmitButton>Send Me A Message</SubmitButton>
    </form>
  );
};

const SubmitButton = styled.button`
  background-color: ${vars.colorPrimary};
  border: none;
  border-radius: ${vars.borderRadiusSmall};
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeText};
  font-weight: ${vars.fontWeightLight};
  text-align: center;
  padding: 1.25em 1em;
  margin-top: 2rem;
  width: 100%;
`;

export default ContactForm;
