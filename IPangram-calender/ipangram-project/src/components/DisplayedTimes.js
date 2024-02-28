import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { DateTime } from 'luxon';

const DisplayedTimes = ({ selectedTimezone }) => {
  const [times, setTimes] = useState(['12:00', '15:30', '18:45']); 

  useEffect(() => {
    
    const convertTimeToTimezone = (time) => {
      return DateTime.fromFormat(time, 'HH:mm').setZone(selectedTimezone).toFormat('HH:mm');
    };
    const updatedTimes = times.map(time => convertTimeToTimezone(time));
    setTimes(updatedTimes);
  }, [selectedTimezone]); 

  
  const convertTimeToTimezone = (time) => {
    return moment.tz(time, 'HH:mm', 'UTC').tz(selectedTimezone).format('HH:mm');
  };

  return (
    <div>
      <h2>Displayed Times</h2>
      <ul>
        {times.map((time, index) => (
          <li key={index}>{convertTimeToTimezone(time)}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayedTimes;
