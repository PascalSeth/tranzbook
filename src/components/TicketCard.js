import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import './ticketcard.css';

function TicketCard() {
  const ticketLocation = useLocation();
  const { origin, destination, ticketQuantity, selectedDate } = ticketLocation.state;
  const [activeButton, setActiveButton] = useState('Regular');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const tickets = [
    {
      imageUrl: 'https://www.sustainable-bus.com/wp-content/uploads/2019/01/Sileo-Test_016-480x480.jpg',
      origin,
      destination,
    },
    {
      imageUrl: 'https://shopinkenya.com/wp-content/uploads/2020/11/vip-bus-ghana-contacts-destinations-and-Schedule-.jpg',
      origin,
      destination,
    },
    {
      imageUrl: 'https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2022/11/Intercity-STC-Coaches.jpg',
      origin,
      destination,
    },
  ];

  return (
    <div>
      {tickets.map((ticket, index) => (
        <div className='ticketcard' key={index}>
          <div className='ticketcontainer'>
            <div className='value'>
              <div>
                <h2 className='tickethead'>Sort By</h2>
              </div>
              <button
                onClick={() => handleButtonClick('Regular')}
                style={{
                  backgroundColor: activeButton === 'Regular' ? '#48A0FF' : '#F2F4F7',
                  color: activeButton === 'Regular' ? '#F2F4F7' : '#48A0FF',
                }}
              >
                Cheapest
              </button>
              <button
                onClick={() => handleButtonClick('Fastest')}
                style={{
                  backgroundColor: activeButton === 'Fastest' ? '#48A0FF' : '#F2F4F7',
                  color: activeButton === 'Fastest' ? '#F2F4F7' : '#48A0FF',
                }}
              >
                Fastest
              </button>
              <button
                onClick={() => handleButtonClick('Earliest')}
                style={{
                  backgroundColor: activeButton === 'Earliest' ? '#48A0FF' : '#F2F4F7',
                  color: activeButton === 'Earliest' ? '#F2F4F7' : '#48A0FF',
                }}
              >
                Earliest
              </button>
            </div>

            <div className='location'>
              <div className='leftloca'>
                <div className='buspic'>
                  <img src={ticket.imageUrl} alt='' />
                </div>
                <div className='sectiontop'>
                  <h2>
                    <PanoramaFishEyeSharpIcon className='ic' />
                    {ticket.origin}
                  </h2>
                  <h3>
                    <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}
                  </h3>
                </div>
                <div className='sectionbottom'>
                  <h2>
                    <LocationOnSharpIcon className='ic' />
                    {ticket.destination}
                  </h2>
                  <h3>
                    <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}
                  </h3>
                </div>
              </div>
              <div className='rightloca'>
                <h6>Price</h6>
                <div className='book-button'>
                <Link
  className='book-button'
  to={{
    pathname: '/seats',
    state: { origin, destination, ticketQuantity }, // Pass origin, destination, and ticketQuantity as props
  }}
>
  <button>Book</button>
</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TicketCard;
