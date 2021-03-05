import React, { useState, useEffect, useContext } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import HomeLayout from './HomeLayout';
import PortfolioLayout from './PortfolioLayout';
import Header from './Header';
import SectionContext from '../contexts/SectionContext';
import ExperienceLayout from './ExperienceLayout';
import ContactLayout from './ContactLayout';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

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
        pluginWrapper={pluginWrapper}
        onLeave={onLeave}
        anchors={anchors}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGEJS_KEY}
        // scrollHorizontally = {true}
        sectionsColor={['#white', '#0798ec']}
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
