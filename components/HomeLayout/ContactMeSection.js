import { useContext } from 'react';
import styled from 'styled-components';

import MessageButton from '../MessageButton';
import LayoutContext from '../../contexts/LayoutContext';
import { Container, PageSection, Heading } from '../styled/global';

import vars from '../../styles/vars';

const ContactMeSection = () => {
  const [{ scrollDistance }] = useContext(LayoutContext);

  return (
    <ContactMeNow $scrolled={scrollDistance > 0}>
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
  display: flex;
  align-items: center;
  background-color: ${vars.colorPrimaryDark};
  border-top-left-radius: ${vars.borderRadiusLarge};
  border-bottom-left-radius: ${({ $scrolled }) =>
    $scrolled ? vars.borderRadiusLarge : 0};
  transition: border-bottom-left-radius 250ms ease-out;
`;

const ContactMeContainer = styled(Container)`
  padding: 1rem 1.5rem 2rem;
  width: auto;

  @media (min-width: ${vars.breakpointMedium}) {
    margin-right: 0;
    text-align: right;
  }
`;

const ContactHeading = styled(Heading)`
  color: ${vars.colorPrimaryLight};
  font-size: ${vars.fontSizeText};
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (min-width: ${vars.breakpointMedium}) {
    font-size: ${vars.fontSizeHeading2};
  }
`;

const ContactText = styled.p`
  color: ${vars.colorPrimaryLight};
  font-size: ${vars.fontSizeTextSmall};

  @media (min-width: ${vars.breakpointMedium}) {
    font-size: ${vars.fontSizeText};
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 0.75rem;
`;

export default ContactMeSection;
