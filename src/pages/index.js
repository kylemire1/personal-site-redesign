import React from 'react';
import { Helmet } from 'react-helmet';

import HomeLayout from '../components/HomeLayout';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Chicago based web developer Kyle Lemire</title>
      </Helmet>
      <HomeLayout />
    </>
  );
};

export default Home;
