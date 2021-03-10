import React from "react"
import { Helmet } from "react-helmet"

import FullPageLayout from "../components/FullPageLayout"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Chicago based web developer Kyle Lemire</title>
      </Helmet>
      <FullPageLayout />
    </>
  )
}

export default Home
