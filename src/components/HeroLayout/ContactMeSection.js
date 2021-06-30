import React, { useContext } from 'react';
import styled from 'styled-components';

import MessageButton from '../MessageButton';
import LayoutContext from '../../contexts/LayoutContext';
import { Container, Heading } from '../styled/global';

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

const ContactMeNow = styled.div`
  position: relative;
  grid-column: 2 / -1;
  display: flex;
  align-items: center;
  background-color: ${vars.colorPrimaryDark};
  border-top-left-radius: ${vars.borderRadiusLarge};
  border-bottom-left-radius: ${vars.borderRadiusLarge};
  transition: all 250ms ${vars.ease};
  transition-property: border-bottom-left-radius, border-bottom-right-radius;
  transform: translateY(0%);
  z-index: 10;

  @media (min-width: ${vars.breakpointMedium}) {
    transform: translateY(100%);
    animation: slideUp 750ms ${vars.ease} forwards;
    animation-delay: 250ms;

    border-bottom-left-radius: ${({ $scrolled }) =>
      $scrolled ? vars.borderRadiusLarge : 0};
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-row: 3 / -1;
    border-top-left-radius: 0;

    border-bottom-right-radius: ${({ $scrolled }) =>
      $scrolled ? vars.borderRadiusLarge : 0};
    transition: all 250ms ${vars.ease};
    transition-property: border-bottom-left-radius, border-bottom-right-radius;

    ::before {
      content: '';
      height: ${vars.pixel};
      background-color: ${vars.colorWhite};
      width: 40%;
      border-radius: ${vars.borderRadiusLarge};
      position: absolute;
      left: -40%;
      top: -${vars.pixel};
      z-index: 99;
      transform: scaleX(0%);
      transform-origin: right;
      will-change: transform;
      animation: lineIn 1s ${vars.ease} forwards;
      animation-delay: 1.25s;

      @keyframes lineIn {
        0% {
          transform: scaleX(0%);
        }
        100% {
          transform: scaleX(100%);
        }
      }
    }
  }

  @media (min-height: 85.5em) {
    border-bottom-left-radius: ${vars.borderRadiusLarge};
  }
`;

const ContactMeContainer = styled(Container)`
  padding: 0 1.5rem;
  width: auto;
  height: 100%;
  justify-content: center;

  @media (min-width: ${vars.breakpointMedium}) {
    opacity: 0;
    animation: fadeIn 750ms ${vars.ease} forwards;
    animation-delay: 2s;
    margin-right: 0;
    text-align: right;
  }
  @media (min-width: ${vars.breakpointExtraLarge}) {
    padding: 1rem 4rem 2rem;
  }
`;

const ContactHeading = styled(Heading)`
  color: ${vars.colorPrimaryLight};
  font-size: ${vars.fontSizeText};
  font-weight: ${vars.fontWeightBold};
  margin-bottom: 0.5rem;

  @media (min-width: ${vars.breakpointMedium}) {
    font-size: ${vars.fontSizeHeading2};
  }
  @media (min-width: ${vars.breakpointExtraLarge}) {
    font-size: ${vars.fontSizeHeading3};
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

  @media (min-width: ${vars.breakpointExtraLarge}) {
    margin-top: 4rem;
  }
`;

export default ContactMeSection;
