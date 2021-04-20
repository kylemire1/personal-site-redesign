import React from 'react';
import handleViewport from 'react-in-viewport';

import styled from 'styled-components';

import PortfolioShowcase from './PortfolioShowcase';
import PortfolioSectionHeading from './PortfolioSectionHeading';
import Layout from '../Layout';
import { Wrapper } from '../styled/global';

import vars from '../../styles/vars';
import { intersectionObserverOptions } from '../../consts';

const PortfolioLayout = ({ inViewport, forwardedRef }) => {
  return (
    <Layout inViewport={inViewport} forwardedRef={forwardedRef}>
      <PortfolioWrapper id="portfolio">
        <PortfolioSectionHeading />
        <PortfolioShowcase />
      </PortfolioWrapper>
    </Layout>
  );
};

const PortfolioWrapper = styled(Wrapper)`
  grid-template-columns: 1fr 1.5rem;
  grid-template-rows: auto 1fr;
  background-color: ${vars.colorPrimary};
  min-height: 46.875em;

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-columns: 1fr 1fr 1.5rem;
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-template-columns: 1.6fr 1fr 1.5rem;
  }
`;

export default handleViewport(PortfolioLayout, intersectionObserverOptions);
