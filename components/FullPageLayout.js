import React, { useState, useEffect, useContext } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import ReactFullpage from '@fullpage/react-fullpage';

import HomeLayout from './HomeLayout';
import PortfolioLayout from './PortfolioLayout';
import Header from './Header';
import SectionContext from '../contexts/SectionContext';
import ExperienceLayout from './ExperienceLayout';
import ContactLayout from './ContactLayout';

import vars from '../styles/vars';

const FullPageLayout = (props) => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => setShowChild(true), []);

  if (!showChild) {
    return null;
  }

  return <LazyLoaded {...props} />;
};

const LazyLoaded = () => {
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
      <BrowserView>
        <ReactFullpage
          onLeave={onLeave}
          anchors={anchors}
          responsiveWidth={900}
          licenseKey={process.env.NEXT_PUBLIC_FULLPAGEJS_KEY}
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
      </BrowserView>
      <MobileView>
        <HomeLayout />
        <PortfolioLayout />
        <ExperienceLayout />
        <ContactLayout />
      </MobileView>
    </>
  );
};

export default FullPageLayout;
