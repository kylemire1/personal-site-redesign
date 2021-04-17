import { useMemo } from 'react';
import { useLocation } from '@reach/router';

export const useIsHome = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const returnValue = useMemo(
    () => ({
      isHome,
    }),
    [isHome]
  );
  return returnValue;
};
