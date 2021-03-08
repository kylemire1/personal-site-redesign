import styled from 'styled-components';

import Layout from '../Layout';
import ContactMeSection from './ContactMeSection';
import MyOverviewSection from './MyOverviewSection';
import HelloSection from './HelloSection';
import { Wrapper, PageSection } from '../styled/global';
import CheckMeOutSection from './CheckMeOutSection';

import vars from '../../styles/vars';

const HomeLayout = () => {
  return (
    <Layout>
      <HomeWrapper>
        <HelloSection />
        <Me></Me>
        <MyOverviewSection />
        <CheckMeOutSection />
        <ContactMeSection />
      </HomeWrapper>
    </Layout>
  );
};

const HomeWrapper = styled(Wrapper)`
  background-color: ${vars.colorPrimary};
  grid-template-rows: 1.4fr 1.6fr 1fr;
  grid-template-columns: 1fr 0.75fr;

  @media (min-height: 800px) {
    grid-template-rows: 1.6fr 1.4fr 1fr;
  }
`;

const Me = styled(PageSection)`
  display: none;

  @media (min-width: ${vars.breakpointLarge}) {
    display: block;
  }
`;

export default HomeLayout;
