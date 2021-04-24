import { useEffect, useState, useRef } from 'react';

/**
 * Detect most cases of the user navigating with browser forward / back buttons.
 * Not 100% reliable, should only be used for visual enhancements / other non-essentials.
 */
export const useBrowserNavEvent = (eventHandler) => {
  const timeoutRef = useRef(null);
  const [show, setShow] = useState(true);
  useEffect(() => {
    window.addEventListener(
      'popstate',
      (e) => eventHandler(e, setShow, timeoutRef),
      false
    );
    return () => {
      clearTimeout(timeoutRef);
      window.removeEventListener('popstate', (e) =>
        eventHandler(e, setShow, timeoutRef)
      );
    };
  }, [eventHandler]);

  return show;
};
