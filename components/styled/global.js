import styled from 'styled-components';
import vars from '../../styles/vars';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 105rem;
  margin: 0 auto;
  padding: 0 0.25rem;

  @media (min-width: ${vars.breakpointLarge}) {
    padding: 0 0.25rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const Wrapper = styled(Grid)`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
