import React, { useState } from 'react';

import useInterval from '../../hooks/useInterval';

import Clock from '../Clock/Clock';
import TimeField from '../TimeField/TimeField'


export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  console.log('cpmponet');

  useInterval(() => {
    // Your custom logic here
    setSeconds(seconds + 1);
  }, isRunning ? 1000 : null);
  
  const startTimer = () => {
    setIsRunning(true);
  }

  const pauseTimer = () => {
    setIsRunning(false);
  }

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);;
  }

  
  return (
    <div>
      <div>
        <span>{seconds}</span>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div className='clock'>
        <Clock
          seconds={seconds}
          size='md' />
      </div>
      <div>
        <TimeField
        
        />
      </div>
    </div>
  )
}
