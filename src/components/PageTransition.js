import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TransitionState } from 'gatsby-plugin-transition-link';

import vars from '../styles/vars';

const PageTransition = ({ children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <TransitionState>
      {({ transitionStatus, entry, exit }) => {
        let transitionProps = {};
        if (!reduceMotion) {
          transitionProps = {
            initial: entry.state,
            animate:
              transitionStatus === 'exiting'
                ? exit.state
                : { opacity: 1, x: 0, y: 0 },

            transition:
              transitionStatus === 'exiting'
                ? { duration: exit.length, ease: vars.easeFramer }
                : { duration: 0.75, ease: vars.easeFramer },
          };
        }

        return <motion.div {...transitionProps}>{children}</motion.div>;
      }}
    </TransitionState>
  );
};

export default PageTransition;
