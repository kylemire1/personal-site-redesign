import React from 'react';
import styled from 'styled-components';

import { Container } from '../styled/global';

import vars from '../../styles/vars';

const MyOverviewSection = () => {
  return (
    <MyOverview>
      <OverviewContainer>
        <OverviewText>
          I’ve been designing and building websites professionally for over 5
          years. In that time I’ve served a wide variety of clients ranging from
          individuals to non-profit organizations and city governments.
        </OverviewText>

        <InterestsText>
          My interests lie in creating fast, beautiful websites and helping
          other developers do the same through consulting.
        </InterestsText>
      </OverviewContainer>
    </MyOverview>
  );
};

const OverviewContainer = styled(Container)`
  justify-content: center;
  height: 100%;

  @media (min-width: ${vars.breakpointExtraLarge}) {
    justify-content: space-between;
  }
`;

const MyOverview = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: start;
  margin-top: -2rem;
  background-color: ${vars.colorPrimary};
  z-index: 0;
  padding: 8em 0 3em;

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-row: 2 / -1;
    grid-column: 1 / 2;
    height: 100%;
    margin: 0;
    padding: 0;
    padding-top: 5rem;
    padding-bottom: 2rem;
    z-index: 1;
  }
`;

const OverviewText = styled.p`
  color: ${vars.colorWhite};
  opacity: 1;

  &:first-child {
    margin-top: -3rem;
  }

  @media (min-width: ${vars.breakpointMedium}) {
    opacity: 0;
    animation: fadeIn 750ms ${vars.ease} forwards;
    animation-delay: 700ms;
    font-size: ${vars.fontSizeTextLarge};
  }
  @media (min-width: ${vars.breakpointExtraLarge}) {
    &:first-child {
      margin-top: -2rem;
    }

    font-size: ${vars.fontSizeText};
    line-height: 1.5;
    margin-bottom: 0 !important;
  }
`;

const InterestsText = styled(OverviewText)`
  opacity: 1;
  @media (min-width: ${vars.breakpointMedium}) {
    opacity: 0;
    animation: fadeIn 750ms ${vars.ease} forwards;
    animation-delay: 900ms;
  }
  @media (min-width: ${vars.breakpointExtraLarge}) {
    font-size: ${vars.fontSizeTextLarge};
    font-weight: ${vars.fontWeightBold};
  }
`;

export default MyOverviewSection;
