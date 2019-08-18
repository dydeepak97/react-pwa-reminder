import React from 'react';
import PropTypes from 'prop-types';

import { getFormattedTimeFromSeconds } from '../../utils/utils';

export default function Clock(props) {
  const { seconds } = props;
  const time = getFormattedTimeFromSeconds(seconds);

  return (
    <div className='clock'>
      <span>{time.minutes}</span>
      <span>:</span>
      <span>{time.seconds}</span>
    </div>
  )
}

Clock.propTypes = {
  seconds : PropTypes.number,
  size: PropTypes.string
};

Clock.defaultProps = {
  seconds: 0,
  size: 'md'
};
