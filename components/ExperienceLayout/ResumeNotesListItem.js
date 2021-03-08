import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const ResumeNotesListItem = ({ note, showNotes }) => {
  return (
    <CSSTransition in={showNotes} timeout={750} classNames="notes-list-item">
      <StyledListItem>{note}</StyledListItem>
    </CSSTransition>
  );
};

const StyledListItem = styled.li`
  opacity: 0;
  &.notes-list-item-enter {
    opacity: 0;
  }
  &.notes-list-item-enter-active {
    opacity: 1;
    transition: opacity 750ms ${vars.ease};
  }
  &.notes-list-item-enter-done {
    opacity: 1;
  }
  &.notes-list-item-exit {
    opacity: 1;
  }
  &.notes-list-item-exit-active {
    opacity: 0;
    transition: opacity 750ms ${vars.ease};
  }
  &.notes-list-item-exit-done {
    opacity: 0;
  }
`;

export default ResumeNotesListItem;
