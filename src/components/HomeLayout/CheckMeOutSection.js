import React from 'react';
import styled from 'styled-components';

import { Container } from '../styled/global';
import ArrowThinDown from '../icons/ArrowThinDown';

import vars from '../../styles/vars';

const CheckMeOutSection = () => {
  const handleClick = () => {};
  return (
    <CheckMeOutButton onClick={handleClick}>
      <CheckMeOutContainer>
        <CheckMeOutText>Check out some projects I'm proud of.</CheckMeOutText>
        <ArrowThinDown />
      </CheckMeOutContainer>
    </CheckMeOutButton>
  );
};

const CheckMeOutButton = styled.button`
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
  }
`;

const CheckMeOutContainer = styled(Container)`
  height: 100%;
  justify-content: center;
`;

const CheckMeOutText = styled.p`
  font-size: ${vars.fontSizeTextLarge};
  font-weight: ${vars.fontWeightBold};
  line-height: 1.3;
`;

export default CheckMeOutSection;
