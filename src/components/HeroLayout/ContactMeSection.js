import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';

import MessageButton from '../MessageButton';
import LayoutContext from '../../contexts/LayoutContext';
import { Container, Heading } from '../styled/global';

import vars from '../../styles/vars';
import { basicAnimateIn } from '../../consts';

const ContactMeSection = () => {
  const reduceMotion = useReducedMotion();
  const [{ scrollDistance }] = useContext(LayoutContext);
  return (
    <ContactMeNow
      $scrolled={scrollDistance > 0}
      {...basicAnimateIn}
      transition={{
        ...basicAnimateIn.transition,
        delay: 0.25,
        duration: 1,
      }}
      variants={{
        hidden: {
          transform: reduceMotion ? 'translateY(0%)' : 'translateY(50%)',
          opacity: reduceMotion ? 1 : 0,
        },
        visible: { transform: 'translateY(0%)', opacity: 1 },
      }}
    >
      <ContactMeContainer
        {...basicAnimateIn}
        transition={{
          ...basicAnimateIn.transition,
          delay: 2,
        }}
        variants={{
          hidden: {
            opacity: reduceMotion ? 1 : 0,
          },
          visible: { opacity: 1 },
        }}
      >
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

const ContactMeNow = styled(motion.div)`
  position: relative;
  grid-column: 2 / -1;
  display: flex;
  align-items: center;
  background-color: ${vars.colorPrimaryDark};
  border-top-left-radius: ${vars.borderRadiusLarge};
  border-bottom-left-radius: ${({ $scrolled }) =>
    $scrolled ? vars.borderRadiusLarge : 0};
  transition: all 250ms ${vars.ease};
  transition-property: border-bottom-left-radius, border-bottom-right-radius;
  transform-origin: bottom;
  z-index: 10;

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
      transform: scaleX(0);
      transform-origin: right;
      will-change: transform;
      animation-name: slideIn;
      animation-duration: 1s;
      animation-timing-function: ${vars.ease};
      animation-fill-mode: forwards;
      animation-delay: 1.25s;

      @media (prefers-reduced-motion) {
        animation-name: none;
        opacity: 1;
        left: -40%;
      }

      @keyframes slideIn {
        from {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }
    }
  }

  @media (min-height: 85.5em) {
    border-bottom-left-radius: ${vars.borderRadiusLarge};
  }
`;

const ContactMeContainer = styled(motion(Container))`
  padding: 0 1.5rem;
  width: auto;
  height: 100%;
  justify-content: center;

  @media (min-width: ${vars.breakpointMedium}) {
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
