import React, { useState} from 'react';
import DateSelector from './components/DateSelector';
import TimezoneSelector from './components/TimezoneSelector';
import WeeklySchedule from './components/WeeklySchedule';
import Calendar from './components/Calendar';
import DisplayedTimes from './components/DisplayedTimes';
import ScheduleDisplay from './components/ScheduleDisplay';
const App = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');
  const [scheduleData, setScheduleData] = useState([
    {
      Id: 1,
      Name: 'Meeting',
      Date: '2024-03-05',
      Time: '10:00 AM',
      isChecked: true
    },
    {
      Id: 2,
      Name: 'Presentation',
      Date: '2024-03-05',
      Time: '02:00 PM',
      isChecked: true
    },
    {
      Id: 3,
      Name: 'Riding',
      Date: '2024-03-04',
      Time: '02:00 PM',
      isChecked: true
    },
    {
      Id: 4,
      Name: 'Walking',
      Date: '2024-03-03',
      Time: '02:00 PM',
      isChecked: true
    },
    {
      Id: 5,
      Name: 'Movie',
      Date: '2024-03-02',
      Time: '02:00 PM',
      isChecked: true
    },
    {
      Id: 6,
      Name: 'Cricket',
      Date: '2024-03-01',
      Time: '02:00 PM',
      isChecked: true
    },
  ]);


  const handleDateSelect = (date) => {
    console.log('Selected date:', date);
    setSelectedDate(date); 
  };

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleTimezoneChange = (newTimezone) => {
    setSelectedTimezone(newTimezone);
  };

 

  const handleCheckboxChange = (day, index) => {
    const newData = scheduleData.map(item => {
      if (item.Date === day) { 
        if (item.Id === index) {
          return { ...item, isChecked: !item.isChecked };
        }
      }
      return item;
    });
    setScheduleData(newData);
  };
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return (
    <div>
      <h1>Weekly Schedule</h1>
      <ul>
        {scheduleData.map(({ Id, Name, Date, Time, isChecked }) => (
          <li key={Id}>
            <input type="checkbox" id={`checkbox-${Id}`} checked={isChecked} onChange={() => handleCheckboxChange(Date, Id)} />
            <label htmlFor={`checkbox-${Id}`}>{`${Name} - ${Date} ${Time}`}</label>
          </li>
        ))}
      </ul>
      <DateSelector currentDate={currentDate} onDateChange={handleDateChange} />
      <TimezoneSelector selectedTimezone={selectedTimezone} onTimezoneChange={handleTimezoneChange} />
      <WeeklySchedule days={daysOfWeek} onCheckboxChange={handleCheckboxChange} />
      <DisplayedTimes selectedTimezone={selectedTimezone} />
      <Calendar  scheduleData={scheduleData}
        onDateSelect={handleDateSelect}
        selectedDate={selectedDate}/>
         <ScheduleDisplay
        scheduleData={scheduleData}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default App;
