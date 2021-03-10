import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"

import vars from "../../styles/vars"
import ArrowRight from "../icons/ArrowRight"

const AllProjects = () => {
  return (
    <AllProjectsWrapper>
      <Link to="/all-projects">
        All Projects
        <ArrowRight />
      </Link>
    </AllProjectsWrapper>
  )
}

const AllProjectsWrapper = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  background-color: ${vars.colorPrimaryDark};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
  padding: 2em;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${vars.fontSizeHeading2};
    font-weight: ${vars.fontWeightBlack};
    color: ${vars.colorPrimaryLight};
    width: 100%;
    transition: color 250ms ${vars.ease};

    :hover,
    :focus {
      color: ${vars.colorHighlight};
      transition: color 250ms ${vars.ease};

      svg path {
        fill: ${vars.colorHighlight};
        transition: fill 250ms ${vars.ease};
      }
    }
  }

  svg {
    width: 2.25rem;

    path {
      fill: ${vars.colorPrimaryLight};
      transition: fill 250ms ${vars.ease};
    }
  }
`

export default AllProjects
