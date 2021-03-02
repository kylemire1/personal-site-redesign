import React from 'react';
import styled from 'styled-components';

import Layout from '../Layout';
import { Wrapper, Heading, Container } from '../styled/global';

import vars from '../../styles/vars';
import PortfolioShowcase from './PortfolioShowcase';
import AllProjects from './AllProjects';

const Index = () => {
  return (
    <Layout>
      <PortfolioWrapper>
        <Container>
          <PortfolioHeading>Portfolio</PortfolioHeading>
        </Container>
        <PortfolioShowcase />
        <AllProjects />
      </PortfolioWrapper>
    </Layout>
  );
};

const PortfolioWrapper = styled(Wrapper)`
  grid-template-columns: 1fr 1.5rem;
  grid-template-rows: auto 5fr 1fr 4rem;
  background-color: ${vars.colorPrimary};
  padding-top: 8em;
`;

const PortfolioHeading = styled(Heading)`
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeHeading3};
`;

export default Index;