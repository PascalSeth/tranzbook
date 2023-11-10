import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import { useNavigate } from 'react-router-dom';


function TicketCard() {
  const ticketLocation = useLocation();
  const { origin, destination, ticketQuantity, selectedDate } = ticketLocation.state;
  const [activeButton, setActiveButton] = useState('Regular');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const navigate = useNavigate();

  const handleSeats = () => {
    navigate('/seats', {
      state: {
        origin,
        destination,
        ticketQuantity,
        selectedDate,
      },
    });
  }

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
          <div className='flex mb-[7vh] max-md:flex-col '>
            <div className='value flex flex-col bg-white items-center p-[2vh] rounded-md
             mr-[2vw] h-[35vh] w-fit max-md:h-fit max-md:w-[90vw]'>
              <div>
                <h2 className='tickethead text-[2vh]'>Sort By</h2>
              </div>
              <div className='buttoncontain flex flex-col items-center max-md:flex-row'>
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
              </button></div>
            </div>

            <div className='flex bg-white p-[2vh] rounded-md w-[40vw] h-[35vh] justify-between max-md:w-[90vw] '>
              <div className='flex flex-col  justify-between'>
                <div className='buspic'>
                  <img className='w-full h-[16vh] object-fill' src={ticket.imageUrl} alt='' />
                </div>
                <div className='sectiontop '>
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
              <div className='rightloca flex flex-col items-center justify-between'>
                <h6 className='font-semibold'>Price</h6>
                <div onClick={handleSeats} className='book-button'>
  <button>Book</button>

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
