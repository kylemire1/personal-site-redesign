import React, { useLayoutEffect, useContext } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import useDimensions from 'react-use-dimensions';

import { Container, Heading } from '../styled/global';
import LayoutContext from '../../contexts/LayoutContext';

import vars from '../../styles/vars';

const HelloSection = () => {
  const [ref, { height }] = useDimensions();
  const [, dispatch] = useContext(LayoutContext);

  useLayoutEffect(() => {
    dispatch({ type: 'SET_WELCOME_SECTION_HEIGHT', payload: height });
  }, [height, dispatch]);

  return (
    <HelloWrapper ref={ref}>
      <HelloContainer>
        <HelloHeading as="h1">Hello there!</HelloHeading>
        <IntroText>
          My name is Kyle Lemire. I’m a <span>web developer & designer</span>{' '}
          based in Chicago.
        </IntroText>
      </HelloContainer>
    </HelloWrapper>
  );
};

const HelloWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  border-bottom-left-radius: ${vars.borderRadiusLarge};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
  background-color: ${vars.colorWhite};
  box-shadow: 0 0.25rem 5.625rem ${rgba(vars.colorPrimary, 0.4)};
  z-index: 2;
  transition: all 500ms ${vars.ease};
  transition-property: background-position, background-size;
  overflow: hidden;
  transform: translateY(-100%);
  animation: slideIn 750ms ${vars.ease} forwards;

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

const HelloContainer = styled(Container)`
  position: relative;
  margin-bottom: -4rem;
  animation: fadeIn 750ms ${vars.ease} forwards;
  animation-delay: 450ms;
  opacity: 0;

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

export default HelloSection;
