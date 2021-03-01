import React, { useState, useEffect, useContext } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import HomeLayout from './HomeLayout';
import PortfolioLayout from './PortfolioLayout';
import Header from './Header';
import SectionContext from '../contexts/SectionContext';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const FullPageLayout = () => {
  const [, setActiveSectionData] = useContext(SectionContext);
  const [fullpages] = useState([
    {
      text: 'Home',
      anchor: 'home',
    },
    { text: 'page 2', anchor: 'portfolio' },
  ]);

  const anchors = fullpages.map((page) => page.anchor);

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
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
};

export default FullPageLayout;
