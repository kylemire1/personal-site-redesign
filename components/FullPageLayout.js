import React, { useState, useEffect } from 'react';

import HomeLayout from './HomeLayout';
import PortfolioLayout from './PortfolioLayout';
import Header from './Header';
import ExperienceLayout from './ExperienceLayout';
import ContactLayout from './ContactLayout';

const FullPageLayout = (props) => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => setShowChild(true), []);

  if (!showChild) {
    return null;
  }

  return <LazyLoaded {...props} />;
};

const LazyLoaded = () => {
  return (
    <>
      <Header />
      <HomeLayout />
      <PortfolioLayout />
      <ExperienceLayout />
      <ContactLayout />
    </>
  );
};

export default FullPageLayout;
