import React, { useState, useEffect } from 'react';
import OutOfTimeAlert from './OutOfTimeAlert';

const CountdownTimer = ({ duration }) => {
  const [remainingTime, setRemainingTime] = useState(duration);
  const [isTimeUp, setTimeUp] = useState(false);

  // Start the countdown timer
  const startTimer = () => {
    setRemainingTime(duration);
    setTimeUp(false);
  };

  // Update the remaining time every second
  useEffect(() => {
    if (remainingTime <= 0) {
      setTimeUp(true);
      return; // Stop the timer if remainingTime reaches 0 or goes below
    }

    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [duration, remainingTime]);

  // Format the remaining time as minutes and seconds
  const formatTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {/* <button onClick={startTimer}>Start</button> */}
      <div className='counting-time'>Remaining Time: <br /> 
        <span className='bg-blue-200 border border-blue-600 text-3xl m-5 sm:text-1'>{formatTime()}</span>
      </div>
      {isTimeUp && <OutOfTimeAlert />}
    </div>
  );
};

export default CountdownTimer;