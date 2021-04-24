import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

const PageTransitionLink = ({ children, to, type = 'leftToUp' }) => {
  let transitionProps;
  switch (type) {
    case 'leftToUp':
      transitionProps = {
        exit: {
          length: 0.5,
          state: { opacity: 0, x: -200 },
        },
        entry: {
          delay: 0.5,
          state: { opacity: 0, x: 0 },
        },
      };
      break;
    case 'upToFade':
      transitionProps = {
        exit: {
          length: 0.5,
          state: { opacity: 0, y: -200 },
        },
        entry: {
          delay: 0.5,
          state: { opacity: 0 },
        },
      };
      break;
    default:
      transitionProps = {
        exit: {
          length: 0.5,
          state: { opacity: 0, y: -200 },
        },
        entry: {
          delay: 0.5,
          state: { opacity: 0, x: -200 },
        },
      };
      break;
  }

  return (
    <TransitionLink to={to} {...transitionProps}>
      {children}
    </TransitionLink>
  );
};

export default PageTransitionLink;
