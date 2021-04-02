import React from 'react';

import HeroLayout from './HeroLayout';
import PortfolioLayout from './PortfolioLayout';
import Header from './Header';
import ExperienceLayout from './ExperienceLayout';
import ContactLayout from './ContactLayout';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <HeroLayout />
      <PortfolioLayout />
      <ExperienceLayout />
      <ContactLayout />
    </>
  );
};

export default HomeLayout;
