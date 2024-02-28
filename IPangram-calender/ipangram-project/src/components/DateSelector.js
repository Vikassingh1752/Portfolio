import React, {useState, useEffect} from 'react';

const DateSelector = ({  onDateChange }) => {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const handlePreviousWeek = () => {
    const previousWeek = new Date(currentDate);
    previousWeek.setDate(previousWeek.getDate() - 7); 
    setCurrentDate(previousWeek);
    onDateChange(previousWeek); 
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(nextWeek.getDate() + 7); 
    setCurrentDate(nextWeek);
    onDateChange(nextWeek);
  };

  return (
    <div>
      <button onClick={handlePreviousWeek}>Previous Week</button>
      <span>{currentDate.toDateString()}</span>
      <button onClick={handleNextWeek}>Next Week</button>
    </div>
  );
};

export default DateSelector;
