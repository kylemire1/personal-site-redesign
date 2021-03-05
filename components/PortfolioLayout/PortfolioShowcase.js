import React from 'react';
import styled from 'styled-components';
import ShowcaseItem from './ShowcaseItem';

import vars from '../../styles/vars';
import portfolioData from './portfolioData';

const PortfolioShowcase = () => {
  return (
    <StyledShowcase>
      {portfolioData.map((item, itemIndex) => (
        <ShowcaseItem key={`${item.name}_${itemIndex}`} {...item} />
      ))}
    </StyledShowcase>
  );
};

const StyledShowcase = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  background-color: ${vars.colorWhite};
  border-top-right-radius: ${vars.borderRadiusLarge};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
`;

export default PortfolioShowcase;
