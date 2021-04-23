export const LAYOUT_INITIAL_STATE = {
  welcomeSectionHeight: 0,
  hasScrolled: false,
  scrollDistance: 0,
  openPortfolioItemIndex: false,
  prevPath: false,
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

    default:
      return state;
  }
};

export default layoutContextReducer;
