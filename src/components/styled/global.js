import styled from 'styled-components';
import vars from '../../styles/vars';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 105rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
`;

export const Grid = styled.div`
  display: grid;
`;

export const Wrapper = styled(Grid)`
  width: 100%;
  position: relative;
`;

export const Heading = styled.h1`
  font-weight: ${vars.fontWeightBlack};
  color: ${vars.colorAlmostBlack};
  margin-bottom: 1rem;
`;
