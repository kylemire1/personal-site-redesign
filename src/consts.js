import vars from './styles/vars';

export const basicAnimateIn = {
  initial: 'hidden',
  animate: 'visible',
  transition: {
    type: 'tween',
    duration: 0.75,
    ease: vars.easeFramer,
  },
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};
