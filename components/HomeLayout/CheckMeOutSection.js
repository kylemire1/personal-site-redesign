import styled from 'styled-components';

import { Container } from '../styled/global';
import ArrowThinDown from '../icons/ArrowThinDown';

import vars from '../../styles/vars';

const CheckMeOutSection = () => {
  const handleClick = () => {
    if (typeof fullpage_api !== 'undefined') {
      fullpage_api.moveSectionDown();
    }
  };
  return (
    <CheckMeOutButton onClick={handleClick}>
      <CheckMeOutContainer>
        <CheckMeOutText>Check out some projects I'm proud of.</CheckMeOutText>
        <ArrowThinDown />
      </CheckMeOutContainer>
    </CheckMeOutButton>
  );
};

const CheckMeOutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: ${vars.colorWhite};

  svg {
    width: 2rem;
  }

  :hover,
  :focus {
    background-color: ${vars.colorWhite};
    color: ${vars.colorPrimary};
    transition: all 250ms ${vars.ease};

    svg {
      path {
        fill: ${vars.colorPrimary};
      }
    }
  }
`;

const CheckMeOutContainer = styled(Container)`
  height: 100%;
  justify-content: center;
`;

const CheckMeOutText = styled.p`
  font-size: ${vars.fontSizeTextLarge};
  font-weight: ${vars.fontWeightBold};
  line-height: 1.3;
`;

export default CheckMeOutSection;
