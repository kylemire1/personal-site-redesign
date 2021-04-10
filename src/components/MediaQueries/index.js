import { useMediaQuery } from 'react-responsive';
import vars from '../../styles/vars';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: vars.breakpointLarge });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: vars.breakpointMedium,
    maxWidth: '61.938em',
  });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    maxWidth: '47.938em',
  });
  return isMobile ? children : null;
};
export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: vars.breakpointMedium });
  return isNotMobile ? children : null;
};
