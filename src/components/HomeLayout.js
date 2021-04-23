import React from 'react';

import HeroLayout from './HeroLayout';
import PortfolioLayout from './PortfolioLayout';
import ExperienceLayout from './ExperienceLayout';
import ContactLayout from './ContactLayout';
import Header from './Header';
import PageTransition from './PageTransition';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <HeroLayout />
        <PortfolioLayout />
        <ExperienceLayout />
        <ContactLayout />
      </PageTransition>
    </>
  );
};

export default HomeLayout;
