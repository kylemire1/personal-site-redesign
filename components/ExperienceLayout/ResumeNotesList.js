import React, { useContext } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import ResumeContext from '../../contexts/ResumeContext';

import vars from '../../styles/vars';
import ResumeNotesListItem from './ResumeNotesListItem';

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
  max-height: 0px;
  overflow: hidden;

  &.notes-list-enter {
    max-height: 0px;
  }
  &.notes-list-enter-active {
    max-height: 400px;
    transition: max-height 750ms ${vars.ease};
  }
  &.notes-list-enter-done {
    max-height: 400px;
  }
  &.notes-list-exit {
    max-height: 400px;
  }
  &.notes-list-exit-active {
    max-height: 0px;
    transition: max-height 750ms ${vars.ease};
  }
  &.notes-list-exit-done {
    max-height: 0px;
  }
`;

export default ResumeNotesList;
