import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div className={`section-wrapper ${pathname === '/' ? 'section' : ''}`}>
      {children}
    </div>
  );
};

export default Layout;
