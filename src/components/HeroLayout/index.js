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

const HeroLayout = () => {
  return (
    <Layout>
      <HomeWrapper id="home">
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

  @media (min-width: ${vars.breakpointMedium}) {
    height: 100vh;
    grid-template-rows: 45rem 1.6fr 1fr;
    grid-template-columns: 0.5fr 0.5fr 1fr;
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-template-columns: 1fr 0.2fr 0.2fr 0.2fr 1fr;
    grid-template-rows: 1fr 12rem 0.75fr;
  }

  @media (min-width: ${vars.breakpointLarge}) and (max-height: 850px) {
    max-height: 60em;
    height: 100%;
  }
`;

export default HeroLayout;
