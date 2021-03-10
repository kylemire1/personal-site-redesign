import React, { createContext, useReducer, useMemo } from "react"

import layoutContextReducer, {
  LAYOUT_INITIAL_STATE,
} from "./layoutContextReducer"

const LayoutContext = createContext(null)

export const LayoutContextProvider = ({ children }) => {
  const [layoutState, layoutDispatch] = useReducer(
    layoutContextReducer,
    LAYOUT_INITIAL_STATE
  )

  const layoutContextValue = useMemo(() => [layoutState, layoutDispatch], [
    layoutState,
    layoutDispatch,
  ])

  return (
    <LayoutContext.Provider value={layoutContextValue}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutContext
