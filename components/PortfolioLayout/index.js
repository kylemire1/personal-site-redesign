import React from 'react';
import styled from 'styled-components';

import Layout from '../Layout';
import { Wrapper, Heading, Container } from '../styled/global';

import vars from '../../styles/vars';

const Index = () => {
  return (
    <Layout>
      <PortfolioWrapper>
        <Container>
          <PortfolioHeading>Portfolio</PortfolioHeading>
        </Container>
      </PortfolioWrapper>
    </Layout>
  );
};

const PortfolioWrapper = styled(Wrapper)`
  background-color: ${vars.colorPrimary};
  grid-template-rows: 1.4fr 1.6fr 1fr;
  grid-template-columns: 2fr 1fr;
  padding-top: 8em;

  @media (min-height: 800px) {
    grid-template-rows: 1.6fr 1.4fr 1fr;
  }
`;

const PortfolioHeading = styled(Heading)`
  color: ${vars.colorWhite};
`;

export default Index;
