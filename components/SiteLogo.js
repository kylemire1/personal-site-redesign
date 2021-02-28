import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import LogoImg from "./icons/Logo";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  margin-left: 1rem;
`;

const Logo = () => {
  const { pathname } = useRouter();

  if (pathname === "/") {
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

export default Logo;
