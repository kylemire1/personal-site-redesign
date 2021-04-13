import React from 'react';

import Header from '../components/Header';

const PostLayout = ({ children }) => {
  return (
    <>
      <Header />
      <article>{children}</article>
    </>
  );
};

export default PostLayout;
