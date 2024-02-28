import React, { useState } from 'react';
import TimezoneSelector from './TimezoneSelector';
import WeeklySchedule from './WeeklySchedule';
import Calendar from './Calendar';

const ParentComponent = () => {
  const [timezone, setTimezone] = useState('UTC-0');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleTimezoneChange = (newTimezone) => {
    setTimezone(newTimezone);
  };
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <TimezoneSelector onTimezoneChange={handleTimezoneChange} />
      <Calendar onSelectDate={handleDateSelect} />
      <WeeklySchedule timezone={timezone} />
    </div>
  );
};

export default ParentComponent;
