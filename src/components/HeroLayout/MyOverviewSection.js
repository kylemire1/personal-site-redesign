import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';

import { Container } from '../styled/global';

import vars from '../../styles/vars';
import { basicAnimateIn } from '../../consts';

const MyOverviewSection = () => {
  const reduceMotion = useReducedMotion();
  return (
    <MyOverview>
      <OverviewContainer>
        <OverviewText
          {...basicAnimateIn}
          transition={{
            ...basicAnimateIn.transition,
            delay: 0.7,
          }}
          variants={{
            hidden: {
              filter: reduceMotion ? 'opacity(1)' : 'opacity(0)',
            },
            visible: { filter: 'opacity(1)' },
          }}
        >
          I’ve been designing and building websites professionally for over 5
          years. In that time I’ve served a wide variety of clients ranging from
          individuals to non-profit organizations and city governments.
        </OverviewText>

        <InterestsText
          {...basicAnimateIn}
          transition={{
            ...basicAnimateIn.transition,
            delay: 0.9,
          }}
          variants={{
            hidden: {
              filter: reduceMotion ? 'opacity(1)' : 'opacity(0)',
            },
            visible: { filter: 'opacity(1)' },
          }}
        >
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

const OverviewText = styled(motion.p)`
  color: ${vars.colorWhite};

  &:first-child {
    margin-top: -3rem;
  }

  @media (min-width: ${vars.breakpointMedium}) {
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
  @media (min-width: ${vars.breakpointExtraLarge}) {
    font-size: ${vars.fontSizeTextLarge};
    font-weight: ${vars.fontWeightBold};
  }
`;

export default MyOverviewSection;
