import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

const PageTransitionLink = ({ children, to }) => {
  return (
    <TransitionLink
      to={to}
      exit={{
        length: 0.4,
        state: { opacity: 0 },
      }}
      entry={{
        delay: 0.4,
        state: { opacity: 0 },
      }}
    >
      {children}
    </TransitionLink>
  );
};

export default PageTransitionLink;
