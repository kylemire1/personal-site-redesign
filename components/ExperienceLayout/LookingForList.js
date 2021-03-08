import styled from 'styled-components';

import vars from '../../styles/vars';
import lookingForData from './lookingForData';

const LookingForList = () => {
  return (
    <StyledLookingForList>
      {lookingForData.map((item, itemIndex) => (
        <LookingForListItem key={`${item}_${itemIndex}`}>
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

  li {
    margin-top: 0.5rem;
  }
`;

const LookingForListItem = styled.li`
  background-color: ${vars.colorPrimaryDark};
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeTextSmall};
  font-weight: ${vars.fontWeightBold};
  padding: 1em;
  border-radius: ${vars.borderRadiusLarge};
  margin-right: 0.5rem;
`;

export default LookingForList;
