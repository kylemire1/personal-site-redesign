import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import SocialItem from './SocialItem';
import Github from '../icons/Github';

import vars from '../../styles/vars';
import Linkedin from '../icons/Linkedin';
import Twitter from '../icons/Twitter';

const Socials = () => {
  return (
    <SocialsWrapper>
      <StyledSocials
        whileHover={{ y: 5 }}
        transition={{ duration: 0.25, ease: vars.easeFramer }}
      >
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

const SocialsWrapper = styled(motion.div)`
  position: relative;
  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-row: 2 / -1;
    grid-column: 1 / 2;
    align-self: end;
  }
`;

const StyledSocials = styled(motion.div)`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min-content;
  background-color: ${vars.colorPrimaryDark};
  border-top-right-radius: ${vars.borderRadiusSmall};
  border-bottom-right-radius: ${vars.borderRadiusSmall};

  @media (min-width: ${vars.breakpointExtraLarge}) {
    padding: 2em;
    border-bottom-right-radius: 0;
    border-top-left-radius: ${vars.borderRadiusLarge};
    border-top-right-radius: ${vars.borderRadiusLarge};
  }
`;

export default Socials;
