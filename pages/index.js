import React from "react";
import Head from "next/head";

import FullPageLayout from "../components/FullPageLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>My styled page</title>
      </Head>
      <FullPageLayout />
    </>
  );
};

export default Home;
