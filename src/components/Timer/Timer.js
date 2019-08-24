import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


import useInterval from '../../hooks/useInterval';

import Clock from '../Clock/Clock';
import TimeField from '../TimeField/TimeField'


export default function Timer(props) {
  const { time, onTimeExpire } = props;
  const [seconds, setSeconds] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  console.log('cpmponet');

  useInterval(() => {
    // Your custom logic here
    if(seconds > 0){
      setSeconds(seconds - 1);
    }
  }, isRunning ? 1000 : null);

  useEffect(() => {
    if(seconds < 1) {
      onTimeExpire();
      setIsRunning(false);
    }
  }, [seconds, onTimeExpire]);
  
  const startTimer = () => {
    setIsRunning(true);
  }

  const pauseTimer = () => {
    setIsRunning(false);
  }

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(time);;
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


Timer.propTypes = {
  time: PropTypes.number
}