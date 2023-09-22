import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './cal.css';

const CalendarInput = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleClearDate = () => {
    setSelectedDate(null);
    localStorage.removeItem('selectedDate');
    onDateChange(null);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    localStorage.setItem('selectedDate', date.toISOString());
    onDateChange(date);
  };

  return (
    <div className="datecon">
      <div className="calendar">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          className="datep"
          placeholderText="Date"
        />
      </div>
      <div className="fea">
        {selectedDate && (
          <button className="form-clear-button" onClick={handleClearDate}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default CalendarInput;
