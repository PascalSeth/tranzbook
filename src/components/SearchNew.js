import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import FormNew from '../pages/FormNew';
import './searchnew.css';
import HorizontalCalendarStrip from '../pages/Calendarstrip';
import TicketCard from './TicketCard';

function SearchNew() {
  const location = useLocation();
  const { origin, destination, ticketQuantity, selectedDate } = location.state;

  

  return (
    <div className='search'>  
    <div className='title2'>
        <h4 className='orange'>Book A Bus, Journey With Ease...</h4>
        <h5 className='normal'> Check Bus Schedules, Compare Prices and Book Ticket Online</h5>
      </div>
      <div></div>
      <FormNew origin={origin} destination={destination} />
      <div className='calendar-strip'>
<HorizontalCalendarStrip selectedDate={selectedDate}/>
      </div>
      {/* Use the received props */}
   <TicketCard origin={origin} destination={destination}/>

   
    </div>
  );
}

export default SearchNew;
