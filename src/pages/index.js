import React from 'react';
import { Helmet } from 'react-helmet';

import HomeLayout from '../components/HomeLayout';

import { usePrevPath } from '../utils/hooks/usePrevPath';

const Home = () => {
  usePrevPath();
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
