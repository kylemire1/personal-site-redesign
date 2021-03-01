import styled, { css } from 'styled-components';
import vars from '../../styles/vars';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 105rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: ${vars.breakpointLarge}) {
    padding: 0 0.25rem;
  }
`;

export const Grid = styled.div`
  display: grid;
`;

export const Wrapper = styled(Grid)`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const PageSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Heading = styled.h1`
  font-weight: ${vars.fontWeightBlack};
  color: ${vars.colorAlmostBlack};
  margin-bottom: 1rem;
`;

export const orangeButtonStyles = css`
  border: solid ${vars.pixel} ${vars.colorHighlight};
  border-radius: ${vars.borderRadiusSmall};
  padding: 1em;
  background-color: none;
  color: ${vars.colorHighlight};
  font-weight: ${vars.fontWeightLight};
  font-size: ${vars.fontSizeText};
  white-space: nowrap;
  cursor: pointer;
`;
