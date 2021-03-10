import React from "react"
import styled from "styled-components"

import LookingFor from "./LookingFor"
import Layout from "../Layout"
import Resume from "./Resume"
import { Wrapper } from "../styled/global"

import vars from "../../styles/vars"

const ExperienceLayout = () => {
  return (
    <Layout>
      <ExperienceWrapper>
        <Resume />
        <LookingFor />
      </ExperienceWrapper>
    </Layout>
  )
}

const ExperienceWrapper = styled(Wrapper)`
  grid-template-columns: 1fr 1.5rem;
  grid-template-rows: auto 5fr;
  background-color: ${vars.colorPrimary};

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-columns: 1fr 1fr 1.5rem;
  }
`

export default ExperienceLayout
