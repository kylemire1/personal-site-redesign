import React, { useContext } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import LayoutContext from '../../contexts/LayoutContext';

import vars from '../../styles/vars';
import ResumeNotesListItem from './ResumeNotesListItem';

const ResumeNotesList = ({ id, notes }) => {
  const [{ resumeItemStateMap }] = useContext(LayoutContext);
  let showNotes = false;
  resumeItemStateMap.some((note) => {
    if (note.id === id) {
      showNotes = note.isOpen;
      return true;
    } else return null;
  });

  return (
    <CSSTransition appear in={showNotes} timeout={750} classNames="notes-list">
      <ResumeNotesListWrapper aria-expanded={showNotes}>
        <ul>
          {notes.map((note, noteIndex) => (
            <ResumeNotesListItem
              key={`${note}_${noteIndex}`}
              note={note}
              showNotes={showNotes}
            />
          ))}
        </ul>
      </ResumeNotesListWrapper>
    </CSSTransition>
  );
};

const ResumeNotesListWrapper = styled.div`
  max-height: 0rem;
  overflow: hidden;

  &.notes-list-enter {
    max-height: 0rem;
  }
  &.notes-list-enter-active {
    max-height: 35rem;
    transition: max-height 750ms ${vars.ease};
  }
  &.notes-list-enter-done {
    max-height: 35rem;
  }
  &.notes-list-exit {
    max-height: 35rem;
  }
  &.notes-list-exit-active {
    max-height: 0rem;
    transition: max-height 750ms ${vars.ease};
  }
  &.notes-list-exit-done {
    max-height: 0rem;
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    max-height: 100% !important;
  }
`;

export default ResumeNotesList;
