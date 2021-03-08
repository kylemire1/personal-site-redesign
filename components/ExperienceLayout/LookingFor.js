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
  margin-top: 1.5rem;
`;
const LookingForInner = styled(Container)``;

const LookingForHeading = styled(Heading)`
  font-size: ${vars.fontSizeHeading3};
  color: ${vars.colorWhite};
  margin-bottom: 0;
`;

export default LookingFor;
