import React from 'react';
import styled from 'styled-components';

import Layout from '../Layout';
import ContactMeSection from './ContactMeSection';
import MyOverviewSection from './MyOverviewSection';
import HelloSection from './HelloSection';
import { Wrapper, PageSection } from '../styled/global';

import vars from '../../styles/vars';

const HomeLayout = () => {
  return (
    <Layout>
      <Wrapper>
        <HelloSection />
        <Me></Me>
        <MyOverviewSection />
        <ContactMeSection />
      </Wrapper>
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
