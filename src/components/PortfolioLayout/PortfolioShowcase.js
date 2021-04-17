import React, { useContext, useLayoutEffect, useCallback } from 'react';
import styled from 'styled-components';
import ShowcaseItem from './ShowcaseItem';

import LayoutContext from '../../contexts/LayoutContext';

import vars from '../../styles/vars';
import portfolioData from './portfolioData';

const PortfolioShowcase = () => {
  const [{ openPortfolioItemIndex }, dispatch] = useContext(LayoutContext);

  const setOpen = (openIndex) => {
    dispatch({
      type: 'CLOSE_PORTFOLIO_ITEMS',
    });
    dispatch({
      type: 'OPEN_PORTFOLIO_ITEM',
      payload: openIndex,
    });
  };

  const setClosed = useCallback(() => {
    dispatch({
      type: 'CLOSE_PORTFOLIO_ITEMS',
    });
  }, [dispatch]);

  useLayoutEffect(() => {
    return () => {
      setClosed();
    };
  }, [setClosed]);

  return (
    <StyledShowcase>
      {portfolioData.map((item, itemIndex) => (
        <ShowcaseItem
          key={`${item.name}_${itemIndex}`}
          isOpen={openPortfolioItemIndex === itemIndex}
          setOpen={setOpen}
          setClosed={setClosed}
          itemIndex={itemIndex}
          {...item}
        />
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

  @media (min-width: 104.67em) {
    width: calc(100% + 4rem);
    margin-left: -4rem;
    border-top-left-radius: ${vars.borderRadiusLarge};
    border-bottom-left-radius: ${vars.borderRadiusLarge};
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default PortfolioShowcase;
