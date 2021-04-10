import React, { useLayoutEffect, useContext } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import useDimensions from 'react-use-dimensions';
import { motion, useReducedMotion } from 'framer-motion';

import { Container, Heading } from '../styled/global';
import LayoutContext from '../../contexts/LayoutContext';

import vars from '../../styles/vars';
import meSrcMobile from '../../images/me-large.jpg';
import { basicAnimateIn } from '../../consts';

const HelloSection = () => {
  const reduceMotion = useReducedMotion();
  const [ref, { height }] = useDimensions();
  const [, dispatch] = useContext(LayoutContext);

  useLayoutEffect(() => {
    dispatch({ type: 'SET_WELCOME_SECTION_HEIGHT', payload: height });
  }, [height, dispatch]);

  return (
    <HelloWrapper
      ref={ref}
      {...basicAnimateIn}
      variants={{
        hidden: {
          height: reduceMotion ? '100%' : 0,
          filter: reduceMotion ? 'opacity(1)' : 'opacity(0)',
        },
        visible: { height: '100%', filter: 'opacity(1)' },
      }}
    >
      <HelloContainer
        {...basicAnimateIn}
        transition={{
          ...basicAnimateIn.transition,
          delay: reduceMotion ? 0.15 : 0.45,
        }}
        variants={{
          hidden: {
            filter: reduceMotion ? 'opacity(1)' : 'opacity(0)',
          },
          visible: { filter: 'opacity(1)' },
        }}
      >
        <HelloHeading as="h1">Hello there!</HelloHeading>
        <IntroText>
          My name is Kyle Lemire. I’m a <span>designer and web developer</span>{' '}
          based in Chicago.
        </IntroText>
      </HelloContainer>
    </HelloWrapper>
  );
};

const HelloWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  border-bottom-left-radius: ${vars.borderRadiusLarge};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
  background-color: ${vars.colorWhite};
  box-shadow: 0 4px 90px ${rgba(vars.colorPrimary, 0.4)};
  z-index: 2;
  transition: all 500ms ${vars.ease};
  transition-property: background-position, background-size;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    background-color: ${vars.colorWhite};
    width: 4rem;
    top: 0;
    bottom: 0;
    left: -4rem;
    border-bottom-left-radius: ${vars.borderRadiusLarge};
  }

  @media (min-width: ${vars.breakpointExtraSmall}) {
    background-image: url(${meSrcMobile});
    background-repeat: no-repeat;
    background-position: top 0 right -20rem;
    background-size: 42rem;
    tansition: all 500ms ${vars.ease};
    transition-property: background-position, background-size;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    background-image: none;
  }

  @media (min-width: ${vars.breakpointMedium}) {
    grid-column: 1 / 3;
    background-image: none;
    transition: all 500ms ${vars.ease};
    transition-property: background-position, background-size;
    border-bottom-left-radius: 0;
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-column: 1 / 5;
  }
`;

const HelloContainer = styled(motion(Container))`
  position: relative;
  margin-bottom: -4rem;

  @media (min-width: ${vars.breakpointExtraLarge}) {
    margin-bottom: 0;
  }
`;

const HelloHeading = styled(Heading)`
  font-size: ${vars.fontSizeHeading4};

  @media (min-width: ${vars.breakpointExtraLarge}) {
    font-size: clamp(
      ${vars.fontSizeHeadingHeroSmall},
      8vw,
      ${vars.fontSizeHeadingHero}
    );
    margin-bottom: 0;
  }
`;

const IntroText = styled.p`
  max-width: 50ch;
  span {
    font-weight: ${vars.fontWeightBold};
    color: ${vars.colorPrimary};
  }

  @media (min-width: ${vars.breakpointMedium}) {
    font-size: ${vars.fontSizeTextLarge};
  }
`;

export default HelloSection;
