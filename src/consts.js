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
    hidden: { filter: 'opacity(0)' },
    visible: { filter: 'opacity(1)' },
  },
};
