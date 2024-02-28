import React, { useState } from 'react';

const TimezoneSelector = ({ onTimezoneChange }) => {
  const [selectedTimezone, setSelectedTimezone] = useState('UTC-0'); 

  const handleTimezoneChange = (event) => {
    const timezone = event.target.value;
    setSelectedTimezone(timezone);
    onTimezoneChange(timezone);
  };

  return (
    <div>
      <label htmlFor="timezone">Select Timezone:</label>
      <select id="timezone" value={selectedTimezone} onChange={handleTimezoneChange}>
        <option value="UTC-0">UTC-0</option>
        <option value="UTC-1">UTC-1</option>
      </select>
    </div>
  );
};

export default TimezoneSelector;

