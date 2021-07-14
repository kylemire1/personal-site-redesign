import React, { useContext } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import ResumeItem from './ResumeItem';
import { Heading, Container } from '../styled/global';
import LayoutContext from '../../contexts/LayoutContext';

import vars from '../../styles/vars';
import resumeData from './resumeData';
import Pdf from '../icons/Pdf';
import resumeSrc from '../../assets/docs/resume-updated-20210714-2.pdf';

const Resume = () => {
  const [{ resumeItemStateMap }] = useContext(LayoutContext);

  return (
    <ResumeWrapper>
      <Container>
        <ResumeHeading>Experience</ResumeHeading>
        {resumeData.map((item, itemIndex) => {
          let isShowing = false;
          resumeItemStateMap.some((note) => {
            if (note.id === item.id) {
              isShowing = note.isOpen;
              return true;
            }

            return null;
          });
          return (
            <ResumeItem
              key={`${item.jobTitle}_${itemIndex}`}
              {...item}
              isShowing={isShowing}
            />
          );
        })}
      </Container>
      <ResumeDownloadButton
        href={resumeSrc}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Download Resume</span>
        <Pdf />
      </ResumeDownloadButton>
    </ResumeWrapper>
  );
};

const ResumeWrapper = styled.div`
  padding: 4rem 0 6rem;
  background-color: ${vars.colorWhite};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
  border-top-right-radius: ${vars.borderRadiusLarge};
  z-index: 2;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    background-color: ${vars.colorWhite};
    width: 4rem;
    top: 0;
    bottom: 0;
    left: -4rem;
    border-top-left-radius: ${vars.borderRadiusLarge};
    border-bottom-left-radius: ${vars.borderRadiusLarge};
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    padding: 4rem 0.5rem;
  }
`;

const ResumeHeading = styled(Heading)`
  color: ${vars.colorAlmostBlack};
  font-size: ${vars.fontSizeHeading3};
`;

const ResumeDownloadButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${vars.colorHighlight};
  color: ${vars.colorPrimaryDark};
  font-size: ${vars.fontSizeTextSmall};
  font-weight: ${vars.fontWeightBold};
  border-radius: ${vars.borderRadiusSmall};
  margin-left: 1rem;
  padding: 0.75em 1em;
  position: absolute;
  bottom: 2rem;
  right: -1rem;
  transition: background-color 250ms ${vars.ease};

  svg {
    margin-left: 0.5rem;
  }

  :hover,
  :focus {
    background-color: ${darken(0.05, vars.colorHighlight)};
    transition: background-color 250ms ${vars.ease};
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -0.6rem;
    right: 0.3rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.625rem 0.625rem 0 0;
    border-color: ${darken(0.2, vars.colorHighlight)} transparent transparent;
    z-index: -1;
  }

  @media (min-width: ${vars.breakpointMedium}) {
    ::after {
      right: 0.35rem;
    }
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    top: 2rem;
    right: -1.3rem;
    bottom: auto;
    font-size: ${vars.fontSizeText};

    ::after {
      border-width: 1rem 1rem 0 0;
      bottom: -0.8rem;
      right: 0.3rem;
    }
  }
`;

export default Resume;
