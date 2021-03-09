import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import LogoImg from './icons/Logo';

import vars from '../styles/vars';

const Logo = () => {
  const { pathname } = useRouter();

  if (pathname === '/') {
    return (
      <a href="/#home">
        <LogoWrapper>
          <LogoImg />
          <LogoText>Kyle Lemire</LogoText>
        </LogoWrapper>
      </a>
    );
  }

  return (
    <Link href="/">
      <a>
        <LogoWrapper>
          <LogoImg />
          <span>Kyle Lemire</span>
        </LogoWrapper>
      </a>
    </Link>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  display: none;

  @media (min-width: ${vars.breakpointMedium}) {
    display: block;
    font-size: ${vars.fontSizeText};
    font-weight: ${vars.fontWeightBlack};
    margin-left: 0.5em;
  }
`;

export default Logo;
