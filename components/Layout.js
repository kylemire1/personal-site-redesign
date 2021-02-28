import React from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return <div className={pathname === '/' ? 'section' : ''}>{children}</div>;
};

export default Layout;
