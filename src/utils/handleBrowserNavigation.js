/**  Makes page transitions look nicer when users navigate with the browser forward / back buttons. */
export const handleBrowserNavigation = (e, setShow, timeoutRef) => {
  if (e.type === 'popstate') {
    setShow(false);
    timeoutRef.current = setTimeout(() => {
      setShow(true);
    }, 750);
  }
};
