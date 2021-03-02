import React from 'react';
import styled from 'styled-components';

import vars from '../../styles/vars';

const PortfolioShowcase = () => {
  return <StyledShowcase>TODO: Build showcase</StyledShowcase>;
};

const StyledShowcase = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  background-color: ${vars.colorWhite};
  border-top-right-radius: ${vars.borderRadiusLarge};
`;

export default PortfolioShowcase;
