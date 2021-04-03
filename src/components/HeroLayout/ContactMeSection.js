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
        delay: 0.9,
      }}
      variants={{
        hidden: { left: reduceMotion ? 0 : '100%' },
        visible: { left: '0' },
      }}
    >
      <ContactMeContainer
        {...basicAnimateIn}
        transition={{
          ...basicAnimateIn.transition,
          delay: 1.5,
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

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-row: 3 / -1;
    border-top-left-radius: 0;
    border-bottom-right-radius: ${({ $scrolled }) =>
      $scrolled ? vars.borderRadiusLarge : 0};
    transition: all 250ms ${vars.ease};
    transition-property: border-bottom-left-radius, border-bottom-right-radius;

    ::before {
      content: '';
      height: 1px;
      background-color: ${vars.colorWhite};
      width: 40%;
      position: absolute;
      left: -40%;
      top: -1px;
      z-index: 5;
    }
  }
`;

const ContactMeContainer = styled(motion(Container))`
  padding: 1rem 1.5rem 2rem;
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
