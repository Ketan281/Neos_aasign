import React from 'react';
import "./counter.css"
import { useCountdownTimer } from 'use-countdown-timer';

const Example = () => {
  const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
    timer: 1000 * 5,
  });

  return (
    <React.Fragment>
      <div className='list-wrapper'>{countdown}</div>
      <button onClick={reset}>Reset</button>
      {isRunning ? (
        <button onClick={pause}>Pause</button>
      ) : (
        <button onClick={start}>Start</button>
      )}
    </React.Fragment>
  );
};
export {Example}