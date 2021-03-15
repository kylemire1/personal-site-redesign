import React from 'react';
import styled from 'styled-components';

import { Heading } from '../styled/global';

import vars from '../../styles/vars';

const ResumeItemHeading = ({ id, handleShowNotes, employer, jobTitle }) => {
  return (
    <>
      <ShowNotesButton onClick={() => handleShowNotes(id)}>
        <StyledResumeItemHeading as="h2">
          {jobTitle}
          {!!employer && (
            <>
              <span> @</span> {employer}
            </>
          )}
        </StyledResumeItemHeading>
      </ShowNotesButton>
      <StyledResumeItemHeading className="desktop" as="h2">
        {jobTitle}
        {!!employer && (
          <>
            <span> @</span> {employer}
          </>
        )}
      </StyledResumeItemHeading>
    </>
  );
};

const StyledResumeItemHeading = styled(Heading)`
  font-size: ${vars.fontSizeText};
  span {
    color: ${vars.colorPrimary};
    font-weight: ${vars.fontWeightLight};
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    font-size: ${vars.fontSizeTextLarge};
  }

  @media (max-width: ${vars.breakpointExtraLarge}) {
    &.desktop {
      display: none;
    }
  }
`;

const ShowNotesButton = styled.button`
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;

  ${ResumeItemHeading} {
    color: ${vars.colorAlmostBlack};
    transition: all 250ms ${vars.ease};
  }

  :hover,
  :focus,
  :focus-within {
    ${ResumeItemHeading} {
      color: ${vars.colorPrimary};
    }
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    display: none;
  }
`;

export default ResumeItemHeading;
