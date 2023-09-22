// ReturnCalendarInput.js
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './rcalendar.css';

const ReturnCalendarInput = ({ selectedDate }) => {
  const [selectedRdate, setSelectedRdate] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      setSelectedRdate(new Date(selectedDate.getTime() + 86400000));
    }
  }, [selectedDate]);

  const handleClearDate = () => {
    setSelectedRdate(null);
  };

  const handleDateChange = (date) => {
    setSelectedRdate(date);
  };

  return (
    <div className='datecon'>
      <div className='calendar'>
        <DatePicker
          className='rdate'
          selected={selectedRdate}
          onChange={handleDateChange}
          placeholderText='Optional'
          minDate={selectedDate ? new Date(selectedDate.getTime() + 86400000) : new Date()}
        />
      </div>
      <div className='fea'>
        {selectedRdate && (
          <button className='form-clear-button' onClick={handleClearDate}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default ReturnCalendarInput;
