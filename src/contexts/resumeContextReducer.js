import resumeData from '../components/ExperienceLayout/resumeData';

export const RESUME_NOTES_INITIAL_STATE = resumeData.map((item, itemIndex) => ({
  id: item.id,
  isOpen: itemIndex === 0,
}));

const resumeContextReducer = (state = RESUME_NOTES_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_LIST_ITEM':
      return state.map((listItem) => ({
        id: listItem.id,
        isOpen: action.payload === listItem.id ? true : listItem.isOpen,
      }));

    case 'HIDE_ALL':
      return state.map((listItem) => ({
        id: listItem.id,
        isOpen: false,
      }));

    default:
      return state;
  }
};

export default resumeContextReducer;
