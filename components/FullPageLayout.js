import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import HomeLayout from './HomeLayout';
import Header from './Header';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const originalColors = ['#white', '#0798ec'];

const FullPageLayout = () => {
  const [activeSectionData, setActiveSectionData] = useState({});
  const [sectionsColor] = useState([...originalColors]);
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
        // scrollHorizontally = {true}
        sectionsColor={sectionsColor}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            <HomeLayout />
            <HomeLayout />
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
};

export default FullPageLayout;
