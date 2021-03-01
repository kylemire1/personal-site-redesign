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
          Or just saying hi?{' '}
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
  grid-column: 2 / -1;
  background-color: ${vars.colorPrimaryDark};
  border-top-left-radius: ${vars.borderRadiusLarge};
`;

const ContactHeading = styled(Heading)`
  color: ${vars.colorPrimaryLight};
  font-size: ${vars.fontSizeHeading2};
`;

const ContactText = styled.p`
  color: ${vars.colorPrimaryLight};
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export default ContactMeSection;
