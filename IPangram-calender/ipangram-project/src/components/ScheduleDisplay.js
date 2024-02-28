import React from 'react';

const ScheduleDisplay = ({ scheduleData, selectedDate }) => {
  const filteredScheduleData = scheduleData.filter(item => {
    const itemDate = new Date(item.Date);
    return itemDate >= selectedDate && itemDate < new Date(selectedDate.getTime() + (7 * 24 * 60 * 60 * 1000));
  });

  return (
    <div>
      <h2>Schedule for the Week</h2>
      <ul>
        {filteredScheduleData.map(item => (
          <li key={item.Id}>
            <input type="checkbox" checked={item.isChecked} readOnly />
            <span>{`${item.Name} - ${item.Date} ${item.Time}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleDisplay;
