import { useRef, useEffect, useContext } from 'react';
import { useLocation } from '@reach/router';
import LayoutContext from '../../contexts/LayoutContext';

export const usePrevPath = () => {
  const location = useLocation();
  const [{ prevPath }, dispatch] = useContext(LayoutContext);
  const current = useRef(true);

  useEffect(() => {
    return () => {
      if (current.current) {
        current.current = false;
        dispatch({ type: 'SET_PREV_PATH', payload: location.pathname });
      }
    };
  }, [dispatch, location.pathname]);

  return prevPath;
};
