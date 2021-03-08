import styled from 'styled-components';

import { Container, Heading } from '../styled/global';
import LookingForList from './LookingForList';

import vars from '../../styles/vars';

const LookingFor = () => {
  return (
    <LookingForWrapper>
      <LookingForInner>
        <LookingForHeading as="h3">Looking for ...</LookingForHeading>
        <LookingForList />
      </LookingForInner>
    </LookingForWrapper>
  );
};

const LookingForWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  height: 100%;
  position: relative;
  z-index: 1;
`;
const LookingForInner = styled(Container)`
  position: absolute;
  left: 0;
  bottom: 0;

  @media (min-height: ${vars.breakpointMedium}) {
    bottom: 1.2rem;
  }
`;

const LookingForHeading = styled(Heading)`
  font-size: ${vars.fontSizeHeading3};
  color: ${vars.colorWhite};
  margin-bottom: 0;
`;

export default LookingFor;
