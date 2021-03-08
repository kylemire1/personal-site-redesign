import styled from 'styled-components';

import MessageButton from '../MessageButton';
import { Container, PageSection, Heading } from '../styled/global';

import vars from '../../styles/vars';

const ContactMeSection = () => {
  return (
    <ContactMeNow>
      <ContactMeContainer>
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
      </ContactMeContainer>
    </ContactMeNow>
  );
};

const ContactMeNow = styled(PageSection)`
  position: relative;
  grid-column: 2 / -1;
  background-color: ${vars.colorPrimaryDark};
  border-top-left-radius: ${vars.borderRadiusLarge};
  border-bottom-left-radius: ${vars.borderRadiusLarge};
`;

const ContactMeContainer = styled(Container)`
  padding: 0.5rem 1.5rem;
`;

const ContactHeading = styled(Heading)`
  color: ${vars.colorPrimaryLight};
  font-size: ${vars.fontSizeText};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  color: ${vars.colorPrimaryLight};
  font-size: ${vars.fontSizeTextSmall};
`;

const ButtonWrapper = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1.5rem;
`;

export default ContactMeSection;
