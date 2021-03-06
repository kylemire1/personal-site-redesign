import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const wrapperRef = useRef();
  const { pathname } = useRouter();

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', documentLoadedCallback);

    return () =>
      document.removeEventListener('DOMContentLoaded', documentLoadedCallback);
  }, []);

  const documentLoadedCallback = () => {
    if (typeof wrapperRef.current !== 'undefined') {
      wrapperRef.current.style.visibility = 'visible';
    }
  };

  return (
    <div
      ref={wrapperRef}
      style={{ visibility: 'hidden' }}
      className={pathname === '/' ? 'section' : ''}
    >
      {children}
    </div>
  );
};

export default Layout;
