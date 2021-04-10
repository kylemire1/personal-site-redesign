import React from 'react';

import HeroLayout from './HeroLayout';
import PortfolioLayout from './PortfolioLayout';
import ExperienceLayout from './ExperienceLayout';
import ContactLayout from './ContactLayout';
import Header from './Header';

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
