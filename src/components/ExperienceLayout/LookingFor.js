import React from 'react';
import styled from 'styled-components';

import { Container, Heading } from '../styled/global';
import LookingForList from './LookingForList';

import vars from '../../styles/vars';

const LookingFor = () => {
  return (
    <LookingForWrapper>
      <LookingForInner>
        <LookingForHeading as="h3">Looking for ...</LookingForHeading>
        <LookingForList />
      </LookingForInner>
    </LookingForWrapper>
  );
};

const LookingForWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  height: 100%;
  position: relative;
  z-index: 1;
  margin-top: 1.5rem;

  @media (min-width: ${vars.breakpointMedium}) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-right: 0;
    margin-top: 0;
  }
  @media (min-width: ${vars.breakpointExtraLarge}) {
    margin-left: 1rem;
  }
`;
const LookingForInner = styled(Container)`
  @media (min-width: ${vars.breakpointMedium}) {
    max-width: 40rem;
  }
`;

const LookingForHeading = styled(Heading)`
  font-size: ${vars.fontSizeHeading3};
  color: ${vars.colorWhite};
  margin-bottom: 0;

  @media (min-width: ${vars.breakpointMedium}) {
    margin-bottom: 1rem;
    font-size: ${vars.fontSizeHeading3};
  }
  @media (min-width: ${vars.breakpointExtraLarge}) {
    margin-bottom: 0;
    font-size: ${vars.fontSizeHeading3};
  }
`;

export default LookingFor;
