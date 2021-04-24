import React from 'react';

import HeroLayout from './HeroLayout';
import PortfolioLayout from './PortfolioLayout';
import ExperienceLayout from './ExperienceLayout';
import ContactLayout from './ContactLayout';
import Header from './Header';
import PageTransition from './PageTransition';

import { useBrowserNavEvent } from '../utils/hooks/useBrowserNavEvent';
import { handleBrowserNavigation } from '../utils/handleBrowserNavigation';

const HomeLayout = () => {
  const show = useBrowserNavEvent(handleBrowserNavigation);

  return (
    <>
      <Header />
      <PageTransition>
        <div style={{ opacity: show ? 1 : 0 }}>
          <HeroLayout />
          <PortfolioLayout />
          <ExperienceLayout />
          <ContactLayout />
        </div>
      </PageTransition>
    </>
  );
};

export default HomeLayout;
