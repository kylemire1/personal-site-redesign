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
  border-top-right-radius: ${vars.borderRadiusLarge};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
  overflow: hidden;

  @media (min-width: ${vars.breakpointLarge}) {
    width: calc(100% + 4rem);
    margin-left: -4rem;
    border-top-left-radius: ${vars.borderRadiusLarge};
    border-bottom-left-radius: ${vars.borderRadiusLarge};
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default PortfolioShowcase;
