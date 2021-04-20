import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useWindowSize } from 'react-use';
import ReactConfetti from 'react-confetti';

const Confetti = () => {
  const { width, height } = useWindowSize();
  const portalEl = document.getElementById('portal');

  useEffect(() => {
    portalEl.style.zIndex = 9999;

    return () => {
      portalEl.style.zIndex = -9999;
    };
  });

  return ReactDOM.createPortal(
    <ReactConfetti
      numberOfPieces={500}
      width={width}
      height={height}
      recycle={false}
    />,
    portalEl
  );
};

export default Confetti;
