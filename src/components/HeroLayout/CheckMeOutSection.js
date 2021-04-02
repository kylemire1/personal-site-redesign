import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from '../styled/global';
import ArrowThinDown from '../icons/ArrowThinDown';

import vars from '../../styles/vars';

const CheckMeOutSection = () => {
  return (
    <CheckMeOutButton href="#portfolio" offset="100">
      <CheckMeOutContainer>
        <CheckMeOutText>Check out some projects I'm proud of.</CheckMeOutText>
        <ArrowThinDown />
      </CheckMeOutContainer>
    </CheckMeOutButton>
  );
};

const CheckMeOutButton = styled(AnchorLink)`
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: ${vars.colorWhite};
  transition: all 250ms ${vars.ease};
  transition-property: border-top-right-radius, color, background-color;

  svg {
    width: 2rem;
  }

  :hover,
  :focus {
    background-color: ${vars.colorWhite};
    color: ${vars.colorPrimary};
    border-top-right-radius: ${vars.borderRadiusLarge};
    transition: all 250ms ${vars.ease};
    transition-property: border-top-right-radius, color, background-color;

    svg {
      path {
        fill: ${vars.colorPrimary};
      }
    }
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    transform: rotate(-90deg) translate(35%, -100%);
    transform-origin: center;

    svg {
      transform: rotate(90deg) scale(0.75);
    }

    ::before {
      content: '';
      position: absolute;
      height: ${vars.pixel};
      background-color: ${vars.colorWhite};
      width: 100%;
      bottom: 50%;
      left: 5rem;
    }

    :hover,
    :focus {
      background-color: transparent;
      color: ${vars.colorWhite};
      border-top-right-radius: 0;

      svg {
        path {
          fill: ${vars.colorWhite};
        }
      }
    }
  }

  @media (min-width: ${vars.breakpointXXL}) {
    ::before {
      width: 40vh;
    }
  }

  @media (min-width: 83.75em) {
    border-bottom-left-radius: ${vars.borderRadiusLarge};
    border-bottom-right-radius: ${vars.borderRadiusLarge};
  }
`;

const CheckMeOutContainer = styled(Container)`
  height: 100%;
  justify-content: center;

  @media (min-width: ${vars.breakpointExtraLarge}) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const CheckMeOutText = styled.p`
  font-size: ${vars.fontSizeTextLarge};
  font-weight: ${vars.fontWeightBold};
  line-height: 1.3;

  @media (min-width: ${vars.breakpointExtraLarge}) {
    display: none;
  }
`;

export default CheckMeOutSection;
