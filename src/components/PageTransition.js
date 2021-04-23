import React from 'react';
import { motion } from 'framer-motion';
import { TransitionState } from 'gatsby-plugin-transition-link';

const PageTransition = ({ children }) => {
  return (
    <TransitionState>
      {({ transitionStatus, entry, exit }) => (
        <motion.div
          initial={entry.state}
          animate={
            transitionStatus === 'exiting'
              ? exit.state
              : { opacity: 1, x: 0, y: 0 }
          }
          transition={
            transitionStatus === 'exiting'
              ? { duration: exit.length }
              : { duration: 0.4 }
          }
        >
          {children}
        </motion.div>
      )}
    </TransitionState>
  );
};

export default PageTransition;
