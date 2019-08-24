import React from 'react';
import Push from 'push.js';

import Timer from '../../components/Timer/Timer';

export default function Reminder() {
  return (
    <div>
      <Timer 
      time={10}
      onTimeExpire={() => {
        // window.alert('Yo time up');
        console.log('Time up');

        Push.create('Time is up');
        
      }}
      />
    </div>
  )
}
