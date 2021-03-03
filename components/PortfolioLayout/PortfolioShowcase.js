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
        projectFor="Elyk Innovation"
        image={elykSrc}
      />
      <ShowcaseItem
        name="Book Review Site"
        projectFor="Personal Project"
        image={booksSrc}
      />
      <ShowcaseItem
        name="Apex Legends Profile Tracker"
        projectFor="Personal Project"
        image={apexSrc}
      />
      <ShowcaseItem
        name="Bug Tracking Dashboard"
        projectFor="Personal Project"
        image={dashboardSrc}
      />
    </StyledShowcase>
  );
};

const StyledShowcase = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  display: grid;
  align-items: center;
  background-color: ${vars.colorWhite};
  border-top-right-radius: ${vars.borderRadiusLarge};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
`;

export default PortfolioShowcase;
