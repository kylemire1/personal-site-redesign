import React from 'react';
import styled from 'styled-components';

import Layout from '../Layout';
import ContactMeSection from './ContactMeSection';
import MyOverviewSection from './MyOverviewSection';
import HelloSection from './HelloSection';
import CheckMeOutSection from './CheckMeOutSection';
import Me from './Me';
import { Wrapper } from '../styled/global';

import vars from '../../styles/vars';

const HomeLayout = () => {
  return (
    <Layout>
      <HomeWrapper>
        <HelloSection />
        <Me />
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

  @media (min-height: ${vars.breakpointExtraSmall}) {
    height: 100vh;
    max-height: 83.75em;
  }

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-rows: 3.5fr 1.6fr 1fr;
    grid-template-columns: 0.5fr 0.5fr 1fr;
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-template-columns: 1fr 0.2fr 0.2fr 0.2fr 1fr;
    grid-template-rows: 1fr 12rem 0.75fr;
  }
`;

export default HomeLayout;
