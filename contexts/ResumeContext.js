import React, { createContext, useReducer, useMemo } from "react"

import resumeContextReducer, {
  RESUME_NOTES_INITIAL_STATE,
} from "./resumeContextReducer"

const ResumeContext = createContext(null)

export const ResumeContextProvider = ({ children }) => {
  const [openResumeNotes, resumeDispatch] = useReducer(
    resumeContextReducer,
    RESUME_NOTES_INITIAL_STATE
  )

  const resumeContextValue = useMemo(() => [openResumeNotes, resumeDispatch], [
    openResumeNotes,
    resumeDispatch,
  ])

  return (
    <ResumeContext.Provider value={resumeContextValue}>
      {children}
    </ResumeContext.Provider>
  )
}

export default ResumeContext
