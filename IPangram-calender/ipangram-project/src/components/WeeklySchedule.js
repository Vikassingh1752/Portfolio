import React from 'react';

const WeeklySchedule = ({ days, onCheckboxChange }) => {
 
  if (!Array.isArray(days)) {
    return <div>No schedule data available.</div>;
  }
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const today = new Date();
  const currentDayIndex = today.getDay();
  const mondayDate = new Date(today);
  mondayDate.setDate(today.getDate() - currentDayIndex + (currentDayIndex === 0 ? -6 : 1));
  const scheduleData = [];
  weekdays.forEach((day, index) => {
    const date = new Date(mondayDate);
    date.setDate(mondayDate.getDate() + index);
    const dayOfMonth = date.getDate();
    const moonLanding = new Date();
    const month = moonLanding.getMonth();
    
    // Push the schedule data for the current day to the array
    scheduleData.push({ day, date: `${month}/ ${dayOfMonth}` });
  });


  return (
    <div>
      {scheduleData.map((item, day) => (
        <div key={day} >
          <h3>{item.day}</h3>
          <p>{item.date}</p>
          <div>
            {[...Array(26)].map((_, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  onChange={(event) => onCheckboxChange(day, index)}
                />
               {`${(8 + Math.floor(index / 2)) % 12 === 0 ? 12 : (8 + Math.floor(index / 2)) % 12}:${index % 2 === 0 ? '00' : '30'} ${index < 9 ? 'AM' : 'PM'}`}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklySchedule;
