import React from 'react';
import styled from 'styled-components';

import { Container } from '../styled/global';
import ArrowThinDown from '../icons/ArrowThinDown';

import vars from '../../styles/vars';

const CheckMeOutSection = () => {
  return (
    <div>
      <CheckMeOutContainer>
        <CheckMeOutText>Check out some projects I'm proud of.</CheckMeOutText>
        <ArrowThinDown />
      </CheckMeOutContainer>
    </div>
  );
};

const CheckMeOutContainer = styled(Container)`
  height: 100%;
  justify-content: center;

  svg {
    width: 2rem;
  }
`;

const CheckMeOutText = styled.p`
  font-size: ${vars.fontSizeTextLarge};
  font-weight: ${vars.fontWeightBold};
  color: ${vars.colorWhite};
`;

export default CheckMeOutSection;
