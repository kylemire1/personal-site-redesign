import styled from 'styled-components';

import Layout from '../Layout';
import { Wrapper, Heading } from '../styled/global';

import vars from '../../styles/vars';
import PortfolioShowcase from './PortfolioShowcase';
import PortfolioSectionHeading from './PortfolioSectionHeading';

const PortfolioLayout = () => {
  return (
    <Layout>
      <PortfolioWrapper>
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

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-columns: 1fr 1fr 1.5rem;
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
`;

export default PortfolioLayout;
