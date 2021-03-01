import React from 'react';
import styled from 'styled-components';

import Layout from '../Layout';
import ContactMeSection from './ContactMeSection';
import MyOverviewSection from './MyOverviewSection';
import HelloSection from './HelloSection';
import { Wrapper, PageSection } from '../styled/global';
import CheckMeOutSection from './CheckMeOutSection';

import vars from '../../styles/vars';

const HomeWrapper = styled(Wrapper)`
  background-color: ${vars.colorPrimary};
  grid-template-rows: 35% 40% 25%;
  grid-template-columns: 2fr 1fr;

  @media (min-height: 800px) {
    grid-template-rows: 40% 35% 25%;
  }
`;

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

const Me = styled(PageSection)`
  display: none;

  @media (min-width: ${vars.breakpointLarge}) {
    display: block;
  }
`;

export default HomeLayout;
