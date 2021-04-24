import React, { useContext } from 'react';
import styled from 'styled-components';
import { CgRemoveR } from 'react-icons/cg';
import { darken } from 'polished';

import ResumeNotesList from './ResumeNotesList';
import LayoutContext from '../../contexts/LayoutContext';

import Plus from '../icons/Plus';

import vars from '../../styles/vars';
import ResumeItemHeading from './ResumeItemHeading';

const ResumeItem = ({
  jobTitle,
  employer,
  notes,
  id,
  isShowing,
  startMonth,
  endMonth,
  startYear,
  endYear,
  current,
}) => {
  const [, dispatch] = useContext(LayoutContext);

  const handleShowNotes = (id) => {
    if (isShowing) {
      dispatch({ type: 'HIDE_ALL_RESUME_ITEMS' });
    } else {
      dispatch({ type: 'HIDE_ALL_RESUME_ITEMS' });
      dispatch({ type: 'SHOW_RESUME_LIST_ITEM', payload: id });
    }
  };

  return (
    <StyledResumeItem>
      <EmploymentPeriod>
        {startMonth && startMonth}
        {startYear && ` ${startYear}`} &mdash; {endMonth && endMonth}
        {endYear && ` ${endYear}`}
        {current && ' Present'}
      </EmploymentPeriod>
      <Toggle
        aria-label={`Click to ${isShowing ? 'close' : 'expand'}`}
        onClick={() => handleShowNotes(id)}
        className={isShowing ? 'close' : 'open'}
      >
        {isShowing ? <CgRemoveR /> : <Plus />}
      </Toggle>
      <ResumeItemHeading
        id={id}
        jobTitle={jobTitle}
        employer={employer}
        handleShowNotes={handleShowNotes}
      />
      {notes.length && <ResumeNotesList id={id} notes={notes} />}
    </StyledResumeItem>
  );
};

const EmploymentPeriod = styled.div`
  color: ${vars.colorPrimary};
`;

const Toggle = styled.button`
  position: absolute;
  top: 0.5rem;
  left: -0.5rem;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &.open {
    path {
      fill: ${darken(0.18, vars.colorHighlight)};
    }
  }

  &.close {
    path {
      fill: ${vars.colorPrimaryDark};
    }
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    display: none;
  }
`;

const StyledResumeItem = styled.div`
  position: relative;
  padding-left: 1.5rem;
  font-size: ${vars.fontSizeText};
  font-weight: ${vars.fontWeightLight};

  @media (min-width: ${vars.breakpointExtraLarge}) {
    padding-left: 0;

    & + & {
      margin-top: 1rem;
    }
  }
`;

export default ResumeItem;
