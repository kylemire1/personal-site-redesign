import React from 'react';
import styled from 'styled-components';

import SocialItem from './SocialItem';
import Github from '../icons/Github';

import vars from '../../styles/vars';
import Linkedin from '../icons/Linkedin';
import Twitter from '../icons/Twitter';

const Socials = () => {
  return (
    <SocialsWrapper>
      <StyledSocials>
        <SocialItem link="https://github.com/kylemire1?tab=repositories">
          <Github />
        </SocialItem>
        <SocialItem link="https://www.linkedin.com/in/kyle-lemire-9967a1149/">
          <Linkedin />
        </SocialItem>
        <SocialItem link="https://twitter.com/KyleLemire1">
          <Twitter />
        </SocialItem>
      </StyledSocials>
    </SocialsWrapper>
  );
};

const SocialsWrapper = styled.div``;

const StyledSocials = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min-content;
  background-color: ${vars.colorPrimaryDark};
  border-top-right-radius: ${vars.borderRadiusSmall};
  border-bottom-right-radius: ${vars.borderRadiusSmall};
`;

export default Socials;
