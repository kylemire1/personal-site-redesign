import React, { useState, useEffect, useContext } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import HomeLayout from './HomeLayout';
import PortfolioLayout from './PortfolioLayout';
import Header from './Header';
import SectionContext from '../contexts/SectionContext';
import ExperienceLayout from './ExperienceLayout';
import ContactLayout from './ContactLayout';

import vars from '../styles/vars';

const FullPageLayout = () => {
  const [, setActiveSectionData] = useContext(SectionContext);

  const anchors = ['home', 'portfolio', 'experience', 'contact'];

  useEffect(() => {
    if (typeof fullpage_api !== 'undefined') {
      setActiveSectionData(fullpage_api.getActiveSection());
    }
  }, []);

  const onLeave = (_origin, destination, _direction) => {
    setActiveSectionData(destination);
  };
  return (
    <>
      <Header />
      <ReactFullpage
        onLeave={onLeave}
        anchors={anchors}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGEJS_KEY}
        responsiveWidth={900}
        sectionsColor={Array.from({ length: anchors.length }).map(
          () => vars.colorPrimary
        )}
        render={() => (
          <ReactFullpage.Wrapper>
            <HomeLayout />
            <PortfolioLayout />
            <ExperienceLayout />
            <ContactLayout />
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
};

export default FullPageLayout;
