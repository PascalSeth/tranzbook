import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import FormNew from '../pages/FormNew';
import './searchnew.css';
import HorizontalCalendarStrip from './Calendar/Calendarstrip';
import TicketCard from './TicketCard';

function SearchNew() {
  const location = useLocation();
  const { origin, destination, ticketQuantity, selectedDate } = location.state;

  

  return (
    <div className='flex flex-col items-center bg-[#DEF5FB]'>  
    <div className='text-center p-[2vw]'>
    <h4 className='text-[4vh] md:text-[6vh] xl:text-[8vh] font-semibold text-[#FDB022]'>Book A Bus, Journey With Ease...</h4>
        <h5 className='text-[2vh] md:text-[2vh] xl:text-[3vh] font-[500] text-[#475467] w-full'> Check Bus Schedules, Compare Prices and Book Ticket Online</h5>
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
