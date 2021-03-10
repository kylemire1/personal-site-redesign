import React from 'react';

import WelcomeLayout from './WelcomeLayout';
import PortfolioLayout from './PortfolioLayout';
import Header from './Header';
import ExperienceLayout from './ExperienceLayout';
import ContactLayout from './ContactLayout';

const HomePageLayout = () => {
  return (
    <>
      <Header />
      <WelcomeLayout />
      <PortfolioLayout />
      <ExperienceLayout />
      <ContactLayout />
    </>
  );
};

export default HomePageLayout;
