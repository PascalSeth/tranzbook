import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './rcalendar.css';

const ReturnCalendarInput = ({ onDateChange = () => {}, selectedDate }) => {
  const storedRDate = localStorage.getItem('selectedRDate');
  const [selectedRDate, setRSelectedDate] = useState(storedRDate ? new Date(storedRDate) : null);

  useEffect(() => {
    if (!storedRDate) {
      setRSelectedDate(null);
      localStorage.removeItem('selectedRDate');
    }
  }, [storedRDate, selectedRDate]);

  const handleRDateChange = (date) => {
    setRSelectedDate(date);
    localStorage.setItem('selectedRDate', date.toISOString());
    onDateChange(date);
  };
  const handleClearDate = () => {
    setRSelectedDate(null);
    localStorage.removeItem('selectedRDate');
    onDateChange(null);
  };

  const minSelectableDate = selectedDate ? new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000) : new Date();

  return (
    <div className='datecon'>
      <div className='calendar'>    
       <DatePicker
        selected={selectedRDate}
        onChange={handleRDateChange}
        minDate={minSelectableDate}
        className='rdate'
        placeholderText='Optional'
        dateFormat="MMMM d, yyyy"
      /> </div>
 <div className='fea'>     {selectedRDate && (
        <button className="clear-button" onClick={handleClearDate}>
          Clear
        </button>
      )}</div>
  
    </div>
  );
};

export default ReturnCalendarInput;