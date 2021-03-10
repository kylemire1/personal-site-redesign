export const LAYOUT_INITIAL_STATE = {
  welcomeSectionHeight: 0,
  hasScrolled: false,
  scrollDistance: 0,
}

const layoutContextReducer = (state = LAYOUT_INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_HAS_SCROLLED":
      return {
        ...state,
        hasScrolled: !state.hasScrolled,
      }

    case "SET_WELCOME_SECTION_HEIGHT":
      return {
        ...state,
        welcomeSectionHeight: action.payload,
      }

    case "SET_SCROLL_DISTANCE":
      return {
        ...state,
        scrollDistance: action.payload,
      }

    default:
      return state
  }
}

export default layoutContextReducer
