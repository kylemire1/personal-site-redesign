import styled from 'styled-components';

import Layout from '../Layout';
import { Wrapper, Heading, Container } from '../styled/global';

import vars from '../../styles/vars';
import PortfolioShowcase from './PortfolioShowcase';

const PortfolioLayout = () => {
  return (
    <Layout>
      <PortfolioWrapper>
        <Container>
          <PortfolioHeading>Portfolio</PortfolioHeading>
        </Container>
        <PortfolioShowcase />
      </PortfolioWrapper>
    </Layout>
  );
};

const PortfolioWrapper = styled(Wrapper)`
  grid-template-columns: 1fr 1.5rem;
  grid-template-rows: auto 1fr 4rem;
  background-color: ${vars.colorPrimary};

  @media (min-height: ${vars.breakpointMedium}) {
    grid-template-rows: auto 1fr;
  }
`;

const PortfolioHeading = styled(Heading)`
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeHeading3};
`;

export default PortfolioLayout;
