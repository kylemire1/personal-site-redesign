import resumeData from '../components/ExperienceLayout/resumeData';

export const LAYOUT_INITIAL_STATE = {
  welcomeSectionHeight: 0,
  hasScrolled: false,
  scrollDistance: 0,
  openPortfolioItemIndex: false,
  prevPath: false,
  resumeItemStateMap: resumeData.map((item, itemIndex) => ({
    id: item.id,
    isOpen: itemIndex === 0,
  })),
};

const layoutContextReducer = (state = LAYOUT_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_HAS_SCROLLED':
      return {
        ...state,
        hasScrolled: !state.hasScrolled,
      };

    case 'SET_WELCOME_SECTION_HEIGHT':
      return {
        ...state,
        welcomeSectionHeight: action.payload,
      };

    case 'SET_SCROLL_DISTANCE':
      return {
        ...state,
        scrollDistance: action.payload,
      };

    case 'OPEN_PORTFOLIO_ITEM':
      return {
        ...state,
        openPortfolioItemIndex: action.payload,
      };

    case 'CLOSE_PORTFOLIO_ITEMS':
      return {
        ...state,
        openPortfolioItemIndex: false,
      };

    case 'SET_PREV_PATH':
      return {
        ...state,
        prevPath: action.payload,
      };
    case 'SHOW_RESUME_LIST_ITEM':
      return {
        ...state,
        resumeItemStateMap: state.resumeItemStateMap.map((listItem) => ({
          id: listItem.id,
          isOpen: action.payload === listItem.id ? true : listItem.isOpen,
        })),
      };
    case 'HIDE_ALL_RESUME_ITEMS':
      return {
        ...state,
        resumeItemStateMap: state.resumeItemStateMap.map((listItem) => ({
          id: listItem.id,
          isOpen: false,
        })),
      };
    default:
      return state;
  }
};

export default layoutContextReducer;
