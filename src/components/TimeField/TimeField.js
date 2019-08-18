import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getFormattedTimeFromSeconds } from '../../utils/utils';

const defaultTime = {
  hours: 0,
  minutes: 0,
  seconds: 30
};

export default function TimeField(props) {
  const { seconds } = props;
  const [time, setTime] = useState(getFormattedTimeFromSeconds(seconds));
  const [inputError, setInputError] = useState(false);

  const handleInput = event => {
    const {name, value} = event.target
    setTime({
      ...time,
      [name]: value
    });

    if(name !== 'hours' && (value < 0 || value >59 )) {
      setInputError(true);
      return;
    }

    if(inputError){
      setInputError(false);
    }
  }

  return (
    <div className='time-field'>
      <input
        id='hours'
        name='hours'
        type='number'
        value={time.hours}
        onChange={handleInput} />
        <span>:</span>
        <input
        id='minutes'
        name='minutes'
        type='number'
        value={time.minutes}
        onChange={handleInput} />
        <span>:</span>
        <input
        id='seconds'
        name='seconds'
        type='number'
        value={time.seconds}
        onChange={handleInput} />
        
        { inputError &&
            <div> Wrongs</div>
        }
    </div>
  )
}

TimeField.propTypes = {
  seconds: PropTypes.number
}

TimeField.defaultProps = {
  seconds: defaultTime.hours * 3600 + defaultTime.minutes * 60 + defaultTime.seconds
}

