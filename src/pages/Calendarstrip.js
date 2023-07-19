import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarstrip.css';

const HorizontalCalendarStrip = ({ selectedDate, onDateChange }) => {
  const [selectedDateStrip, setSelectedDateStrip] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDateStrip(date);
    onDateChange(date);
  };

  useEffect(() => {
    if (selectedDate) {
      setSelectedDateStrip(new Date(selectedDate.getTime()));
    }
  }, [selectedDate]);

  const getVisibleDates = (date) => {
    const visibleDates = [];
    const start = new Date(date.getTime());
    start.setDate(start.getDate()-2 ); // Subtract 3 days from selected date

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(start);
      currentDate.setDate(currentDate.getDate() + i); // Increment date by 1 day
      visibleDates.push(new Date(currentDate));
    }

    return visibleDates;
  };

  return (
    <div className="horizontal-calendar-strip">
      {selectedDateStrip && (
        <Calendar
          onChange={handleDateChange}
          value={selectedDateStrip}
          className="horizontal-calendar"
          minDate={selectedDate ? new Date(selectedDate.getTime()) : new Date()}
          maxDate={selectedDate ? new Date(selectedDate.getTime()) : new Date()}
          tileClassName={({ date }) =>
            getVisibleDates(selectedDate).some(
              (d) => d.toDateString() === date.toDateString()
            )
              ? 'horizontal-calendar__visible'
              : 'horizontal-calendar__hidden'
          }
          tileDisabled={({ date }) =>
            !getVisibleDates(selectedDate).some(
              (d) => d.toDateString() === date.toDateString()
            )
          }
          selectRange={true} // Allow selecting a range of dates
        />
      )}
    </div>
  );
};

export default HorizontalCalendarStrip;
