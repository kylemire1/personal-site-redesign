import React from 'react';
import styled from 'styled-components';

import { Heading, Container } from '../styled/global';

import vars from '../../styles/vars';

const PortfolioSectionHeading = () => {
  return (
    <HeadingContainer>
      <div>
        <PortfolioHeading>Portfolio</PortfolioHeading>
        <HeadingEffect>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={`portfolio_effect_${index}`} aria-hidden={true}>
              <PortfolioHeading>Portfolio</PortfolioHeading>
            </div>
          ))}
        </HeadingEffect>
      </div>
    </HeadingContainer>
  );
};

const HeadingContainer = styled(Container)`
  @media (min-width: ${vars.breakpointMedium}) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PortfolioHeading = styled(Heading)`
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeHeading3};

  @media (min-width: ${vars.breakpointMedium}) {
    font-size: 5.7rem;
    text-align: center;
    margin: 0;
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    font-size: ${vars.fontSizeHeading5};
    line-height: 0.85;
  }
`;

const HeadingEffect = styled.div`
  display: none;

  @media (min-width: ${vars.breakpointMedium}) {
    display: block;

    > div {
      pointer-events: none;
      user-select: none;

      &:nth-child(2) {
        opacity: 0.75;
      }
      &:nth-child(3) {
        opacity: 0.5;
      }
      &:nth-child(4) {
        opacity: 0.25;
      }
      &:nth-child(5) {
        opacity: 0.1;
      }
    }

    ${PortfolioHeading} {
      --stroke-color: white;
      --stroke-width: 1px;
      color: ${vars.colorPrimary};
      text-shadow: var(--stroke-width) 0 0 var(--stroke-color),
        calc(var(--stroke-width) * -1) 0 0 var(--stroke-color),
        0 var(--stroke-width) 0 var(--stroke-color),
        0 calc(var(--stroke-width) * -1) 0 var(--stroke-color);
    }
  }
`;

export default PortfolioSectionHeading;
