import React, { useLayoutEffect, useContext } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import useDimensions from 'react-use-dimensions';
import { motion, useReducedMotion } from 'framer-motion';

import { Container, Heading } from '../styled/global';
import LayoutContext from '../../contexts/LayoutContext';

import vars from '../../styles/vars';
import { basicAnimateIn } from '../../consts';
import { StaticImage } from 'gatsby-plugin-image';

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
          transform: reduceMotion ? 'scaleY(1)' : 'scaleY(0)',
          opacity: reduceMotion ? 1 : 0,
        },
        visible: { transform: 'scaleY(1)', opacity: 1 },
      }}
    >
      <MobileMe
        {...basicAnimateIn}
        transition={{
          ...basicAnimateIn.transition,
          delay: 0.75,
        }}
      >
        <StaticImage
          src="../../images/me-large.jpg"
          alt="Me smiling wearing a shirt with a floral pattern"
          placeholder="#FFFFFF"
          quality={100}
        />
      </MobileMe>
      <HelloContainer
        {...basicAnimateIn}
        transition={{
          ...basicAnimateIn.transition,
          delay: reduceMotion ? 0.15 : 0.45,
        }}
        variants={{
          hidden: {
            opacity: reduceMotion ? 1 : 0,
          },
          visible: { opacity: 1 },
        }}
      >
        <HelloHeading as="h1">Hello there!</HelloHeading>
        <IntroText>
          My name is Kyle Lemire. I’m a{' '}
          <span>designer &amp; web developer</span> based in Chicago.
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
  box-shadow: 0 0.25rem 5.625rem ${rgba(vars.colorPrimary, 0.4)};
  z-index: 2;
  transform-origin: top;
  transition: all 500ms ${vars.ease};
  transition-property: background-position, background-size;
  overflow: hidden;

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

  @media (min-width: ${vars.breakpointMedium}) {
    grid-column: 1 / 3;
    background-image: none;
    transition: all 500ms ${vars.ease};
    transition-property: background-position, background-size;
    border-bottom-left-radius: 0;
    overflow: visible;
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
  z-index: 50;
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
  max-width: 45ch;
  z-index: 50;
  span {
    font-weight: ${vars.fontWeightBold};
    color: ${vars.colorPrimary};
  }

  @media (min-width: ${vars.breakpointMedium}) {
    font-size: ${vars.fontSizeTextLarge};
  }
`;

const MobileMe = styled(motion.div)`
  display: none;
  @media (min-width: ${vars.breakpointExtraSmall}) {
    display: block;
  }

  @media (min-width: ${vars.breakpointMedium}) {
    display: none;
  }

  .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 8rem;
    width: 42rem;
    z-index: -1;
  }
`;

export default HelloSection;
