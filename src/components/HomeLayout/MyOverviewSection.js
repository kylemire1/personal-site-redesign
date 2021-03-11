import React from 'react';
import styled from 'styled-components';

import { Container, PageSection } from '../styled/global';

import vars from '../../styles/vars';

const MyOverviewSection = () => {
  return (
    <MyOverview>
      <Container>
        <OverviewText>
          I’ve been designing and building websites professionally for over 5
          years. In that time I’ve served a wide variety of clients ranging from
          individuals to non-profit organizations and city governments.
        </OverviewText>
        <OverviewText>
          My interests lie in creating fast, beautiful websites and helping
          other developers do the same through consulting.
        </OverviewText>
      </Container>
    </MyOverview>
  );
};

const MyOverview = styled(PageSection)`
  grid-column: 1 / -1;
  margin-top: -2rem;
  background-color: ${vars.colorPrimary};
  z-index: 0;
  padding: 8em 0 3em;
`;

const OverviewText = styled.p`
  color: ${vars.colorWhite};

  &:first-child {
    margin-top: -3rem;
  }

  @media (min-width: ${vars.breakpointMedium}) {
    font-size: ${vars.fontSizeTextLarge};
  }
`;

export default MyOverviewSection;
