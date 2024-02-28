import React from 'react';

const Calendar = ({ scheduleData, onDateSelect }) => {



  const generateWeekDates = (selectedDate) => {
    const dates = [];
    const currentDay = selectedDate.getDay(); 
    const startDate = new Date(selectedDate); 
    startDate.setDate(startDate.getDate() - currentDay); 

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };


  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

 
  const handleDateClick = (date) => {
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const weekDates = generateWeekDates(new Date());

  return (
    <div>
      <h2>Weekly Schedule</h2>
      <div className="calendar">
        {weekDates.map((date, index) => {
          const formattedDate = formatDate(date);
          const dayData = scheduleData.find(item => item.Date === formattedDate) || {};
          const { Name = '', Time = '', isChecked = false } = dayData;
          return (
            <div key={index} className="calendar-day" onClick={() => handleDateClick(formattedDate)}>
              <p>{formattedDate}</p>
              <p>{`${Name} - ${Time}`}</p>
              <input type="checkbox" checked={isChecked} readOnly />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
