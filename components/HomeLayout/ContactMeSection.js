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
  position: relative;
  grid-column: 2 / -1;
  background-color: ${vars.colorPrimaryDark};
  border-top-left-radius: ${vars.borderRadiusLarge};
`;

const ContactHeading = styled(Heading)`
  color: ${vars.colorPrimaryLight};
  font-size: ${vars.fontSizeHeading1};
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (min-height: ${vars.breakpointMedium}) {
    font-size: ${vars.fontSizeHeading2};
    font-weight: black;
  }
`;

const ContactText = styled.p`
  color: ${vars.colorPrimaryLight};
  font-size: ${vars.fontSizeTextSmall};

  @media (min-height: ${vars.breakpointMedium}) {
    font-size: ${vars.fontSizeText};
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export default ContactMeSection;
