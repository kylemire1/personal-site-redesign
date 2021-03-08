import React, { useContext } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import ResumeContext from '../../contexts/ResumeContext';

import vars from '../../styles/vars';

const ResumeNotesList = ({ id, notes }) => {
  const [openResumeNotes] = useContext(ResumeContext);
  let showNotes = false;
  openResumeNotes.some((note) => {
    if (note.id === id) {
      showNotes = note.isOpen;
      return true;
    } else return null;
  });

  return (
    <CSSTransition appear in={showNotes} timeout={250} classNames="notes-list">
      <ResumeNotesListWrapper aria-expanded={showNotes}>
        <StyledResumeNotesList>
          {notes.map((note, noteIndex) => (
            <li
              key={`${note}_${noteIndex}`}
              className={noteIndex >= 3 ? 'mobile-hide' : ''}
            >
              {note}
            </li>
          ))}
        </StyledResumeNotesList>
      </ResumeNotesListWrapper>
    </CSSTransition>
  );
};

const ResumeNotesListWrapper = styled.div`
  max-height: 0px;
  overflow: hidden;

  &.notes-list-enter {
    max-height: 0px;
    opacity: 0;
  }
  &.notes-list-enter-active {
    max-height: 300px;
    opacity: 1;
    transition: all 750ms ${vars.ease};
    transition-property: max-height, opacity;
  }
  &.notes-list-enter-done {
    max-height: 300px;
    opacity: 1;
  }
  &.notes-list-exit {
    max-height: 300px;
    opacity: 1;
  }
  &.notes-list-exit-active {
    max-height: 0px;
    opacity: 0;
    transition: all 750ms ${vars.ease};
    transition-property: max-height, opacity;
  }
  &.notes-list-exit-done {
    max-height: 0px;
    opacity: 0;
  }
`;

const StyledResumeNotesList = styled.ul`
  li {
    &.mobile-hide {
      display: none;
    }
  }
`;

export default ResumeNotesList;
