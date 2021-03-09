import { useContext } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import ResumeItem from './ResumeItem';
import ResumeContext from '../../contexts/ResumeContext';
import { Heading, Container } from '../styled/global';

import vars from '../../styles/vars';
import resumeData from './resumeData';
import Pdf from '../icons/Pdf';

const Resume = () => {
  const [openResumeNotes] = useContext(ResumeContext);

  return (
    <ResumeWrapper>
      <Container>
        <ResumeHeading>Experience</ResumeHeading>
        {resumeData.map((item, itemIndex) => {
          let isShowing = false;
          openResumeNotes.some((note) => {
            if (note.id === item.id) {
              isShowing = note.isOpen;
              return true;
            }
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
      <ResumeDownloadButton href="/#" target="_blank" rel="noopener noreferrer">
        <span>Download Full Resume</span>
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

  svg {
    margin-left: 0.5rem;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -0.7rem;
    right: 0.3rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 0;
    border-color: ${darken(0.2, vars.colorHighlight)} transparent transparent;
  }
`;

export default Resume;
