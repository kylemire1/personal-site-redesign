import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import vars from '../../styles/vars';
import lookingForData from './lookingForData';

const LookingForList = () => {
  return (
    <StyledLookingForList>
      {lookingForData.map((item, itemIndex) => (
        <LookingForListItem key={`${item}_${itemIndex}`} whileHover={{ x: 5 }}>
          {item}
        </LookingForListItem>
      ))}
    </StyledLookingForList>
  );
};

const StyledLookingForList = styled.ul`
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: ${vars.breakpointMedium}) {
    display: block;
    width: 100%;
  }
`;

const LookingForListItem = styled(motion.li)`
  background-color: ${vars.colorPrimaryDark};
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeTextSmall};
  font-weight: ${vars.fontWeightBold};
  padding: 1em;
  border-radius: ${vars.borderRadiusLarge};
  margin-right: 0.5rem;
  margin-top: 0.5rem;

  @media (min-width: ${vars.breakpointMedium}) {
    width: 100%;
    margin-right: 0;
  }
  @media (min-width: ${vars.breakpointExtraLarge}) {
    font-size: ${vars.fontSizeText};
    margin-top: 1rem;
  }
`;

export default LookingForList;
