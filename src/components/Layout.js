import React from "react"

const Layout = ({ children }) => {
  const pathname = "/"

  return (
    <div className={`section-wrapper ${pathname === "/" ? "section" : ""}`}>
      {children}
    </div>
  )
}

export default Layout
