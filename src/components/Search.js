import React, { useState } from 'react';
import './search.css';
import { useLocation } from 'react-router-dom';
import Form from '../pages/Form';
import Ticketsinfo from './Ticketsinfo';

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const origin = searchParams.get('origin') || '';
  const destination = searchParams.get('destination') || '';
  const ticketQuantity = parseInt(searchParams.get('quantity')) || "";

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRDate, setSelectedRDate] = useState(null);

  const handleSearch = (formData) => {
    setSelectedDate(formData.selectedDate);
    setSelectedRDate(formData.selectedRDate);
  };

  return (
    <div className='searchpg'>
      <div className='title2'>
        <h4 className='orange'>Book A Bus, Journey With Ease...</h4>
        <h5 className='normal'> Check Bus Schedules, Compare Prices and Book Ticket Online</h5>
      </div>
      <div>
        <Form
          origin={origin}
          destination={destination}
          ticketQuantity={ticketQuantity}
          onSearch={handleSearch}
        />
      </div>
      <div>
        <Ticketsinfo origin={origin} destination={destination} selectedDate={selectedDate} ticketQuantity={ticketQuantity} selectedRDate={selectedRDate} />
      </div>
    </div>
  );
}

export default Search;
