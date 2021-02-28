import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavItem = ({ href, children }) => {
  const { pathname } = useRouter();

  if (pathname === '/') {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  }

  return <a href={href}>{children}</a>;
};

export default NavItem;
