import React from 'react';
import styled from 'styled-components';
import ShowcaseItem from './ShowcaseItem';

import vars from '../../styles/vars';
import elykSrc from '../../public/images/elyk-showcase.jpg';
import booksSrc from '../../public/images/book-review-showcase.jpg';
import apexSrc from '../../public/images/apex-legends-showcase.jpg';
import dashboardSrc from '../../public/images/dashboard-showcase.jpg';

const PortfolioShowcase = () => {
  return (
    <StyledShowcase>
      <ShowcaseItem
        name="Site Build &amp; Consulting"
        description="Consulted with the web development team to teach them GatsbyJS and built a new company site for them in the process."
        projectFor="Elyk Innovation"
        image={elykSrc}
        caseStudy="elyk-innovation"
      />
      <ShowcaseItem
        name="Book Review Site"
        description="A React site built with GatsbyJS that uses GraphQL to load book reviews from a headless CMS."
        projectFor="Personal Project"
        image={booksSrc}
        link="https://www.book-worm.me/"
        repo="https://github.com/kylemire1/book-blog"
      />
      <ShowcaseItem
        name="Apex Legends Profile Tracker"
        description="A React web app with a Node backend that displays game profile data from Tracker.gg."
        projectFor="Personal Project"
        image={apexSrc}
        link="https://apex-legends-stat-tracker.herokuapp.com"
        repo="https://github.com/kylemire1/apex-legends-stat-tracker"
      />
      <ShowcaseItem
        name="Bug Tracking Dashboard"
        description="A web app with full CRUD capabilities for tracking bugs in my personal projects."
        projectFor="Personal Project"
        image={dashboardSrc}
        link="https://hungry-sinoussi-134062.netlify.app/"
        repo="https://github.com/kylemire1/ticket-tracker"
      />
    </StyledShowcase>
  );
};

const StyledShowcase = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  background-color: ${vars.colorWhite};
  border-top-right-radius: ${vars.borderRadiusLarge};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
`;

export default PortfolioShowcase;
