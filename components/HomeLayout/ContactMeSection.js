import React from 'react';
import styled from 'styled-components';

import MessageButton from '../MessageButton';
import { Container, PageSection, Heading } from '../styled/global';

import vars from '../../styles/vars';

const ContactMeSection = () => {
  return (
    <ContactMeNow>
      <Container>
        <ContactHeading as="h2">Don't need convincing?</ContactHeading>
        <ContactText>
          Or just want to say hi?{' '}
          <span role="img" aria-label="Waving hand">
            👋
          </span>
        </ContactText>
        <ButtonWrapper>
          <MessageButton />
        </ButtonWrapper>
      </Container>
    </ContactMeNow>
  );
};

const ContactMeNow = styled(PageSection)`
  padding: 2em 0;
  background-color: ${vars.colorPrimaryDark};
`;

const ContactHeading = styled(Heading)`
  color: ${vars.colorPrimaryLight};
  font-size: ${vars.fontSizeHeading2};
`;

const ContactText = styled.p`
  color: ${vars.colorPrimaryLight};
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

export default ContactMeSection;
