import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './cal.css';

const CalendarInput = ({ onDateChange }) => {
  const storedDate = localStorage.getItem('selectedDate');
  const [selectedDate, setSelectedDate] = useState(storedDate ? new Date(storedDate) : null);

  useEffect(() => {
    if (!storedDate) {
      setSelectedDate(null);
      localStorage.removeItem('selectedDate');
    }
  }, [storedDate]); // Include storedDate in the dependency array

  const handleDateChange = (date) => {
    setSelectedDate(date);
    localStorage.setItem('selectedDate', date.toISOString());
    onDateChange(date);
  };

  const handleClearDate = () => {
    setSelectedDate(null);
    localStorage.removeItem('selectedDate');
    onDateChange(null);
  };

  return (
    <div className='datecon'>
      <div className='calendar'>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          className='datep'
          placeholderText='Date'
          dateFormat="MMMM d, yyyy"
        />
      </div>
      <div className='fea'>
        {selectedDate && (
          <button className="clear-button" onClick={handleClearDate}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default CalendarInput;