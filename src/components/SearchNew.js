import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FormNew from '../pages/FormNew';
import './searchnew.css';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import HorizontalCalendarStrip from '../pages/Calendarstrip';

function SearchNew() {
  const location = useLocation();
  const { origin, destination, ticketQuantity, selectedDate } = location.state;
  const [activeButton, setActiveButton] = useState('Regular');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className='search'>  
    <div className='title2'>
        <h4 className='orange'>Book A Bus, Journey With Ease...</h4>
        <h5 className='normal'> Check Bus Schedules, Compare Prices and Book Ticket Online</h5>
      </div>
      <div></div>
      <FormNew />
      <div className='calendar-strip'>
<HorizontalCalendarStrip selectedDate={selectedDate}/>
      </div>
      {/* Use the received props */}
      <div className='ticketcontainer'>
        <div className='value'>
          <button
            onClick={() => handleButtonClick('Regular')}
            style={{
              backgroundColor: activeButton === 'Regular' ? '#48A0FF' : '#F2F4F7',
              color: activeButton === 'Regular' ? '#F2F4F7' : '#48A0FF',
            }}
          >
            Regular
          </button>
          <button
            onClick={() => handleButtonClick('Vip')}
            style={{
              backgroundColor: activeButton === 'Vip' ? '#48A0FF' : '#F2F4F7',
              color: activeButton === 'Regular' ? '#48A0FF' : '#F2F4F7',
            }}
          >
            ViP
          </button>
        </div>
        <div className='location'>
          <div className='leftloca'>
            <div className='buspic'>
              <img src='data:image/jpeg;base64,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' alt='' />
            </div>
            <div className='sectiontop'>
              <h2>
                <PanoramaFishEyeSharpIcon className='ic' />
                {origin}
              </h2>
              <h3>
                <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}

              </h3>
            </div>
            <div className='sectionbottom'>
              <h2>
                <LocationOnSharpIcon className='ic' />
                {destination}
              </h2>
              <h3>
                <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}
          
              </h3>
            </div>
          </div>
          <div className='rightloca'>

            <h6>Price</h6>
            <div className='book-button'>
            <button>Book</button></div>
          </div>
        </div>
      </div>
   
      <div className='ticketcontainer'>
        <div className='value'>
          <button
            onClick={() => handleButtonClick('Regular')}
            style={{
              backgroundColor: activeButton === 'Regular' ? '#48A0FF' : '#F2F4F7',
              color: activeButton === 'Regular' ? '#F2F4F7' : '#48A0FF',
            }}
          >
            Regular
          </button>
          <button
            onClick={() => handleButtonClick('Vip')}
            style={{
              backgroundColor: activeButton === 'Vip' ? '#48A0FF' : '#F2F4F7',
              color: activeButton === 'Regular' ? '#48A0FF' : '#F2F4F7',
            }}
          >
            ViP
          </button>
        </div>
        <div className='location'>
          <div className='leftloca'>
            <div className='buspic'>
              <img src='https://shopinkenya.com/wp-content/uploads/2020/11/vip-bus-ghana-contacts-destinations-and-Schedule-.jpg' alt='' />
            </div>
            <div className='sectiontop'>
              <h2>
                <PanoramaFishEyeSharpIcon className='ic' />
                {origin}
              </h2>
              <h3>
                <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}

              </h3>
            </div>
            <div className='sectionbottom'>
              <h2>
                <LocationOnSharpIcon className='ic' />
                {destination}
              </h2>
              <h3>
                <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}
          
              </h3>
            </div>
          </div>
          <div className='rightloca'>

            <h6>Price</h6>
            <div className='book-button'>
            <button>Book</button></div>
          </div>
        </div>
      </div>
      <div className='ticketcontainer'>
        <div className='value'>
          <button
            onClick={() => handleButtonClick('Regular')}
            style={{
              backgroundColor: activeButton === 'Regular' ? '#48A0FF' : '#F2F4F7',
              color: activeButton === 'Regular' ? '#F2F4F7' : '#48A0FF',
            }}
          >
            Regular
          </button>
          <button
            onClick={() => handleButtonClick('Vip')}
            style={{
              backgroundColor: activeButton === 'Vip' ? '#48A0FF' : '#F2F4F7',
              color: activeButton === 'Regular' ? '#48A0FF' : '#F2F4F7',
            }}
          >
            ViP
          </button>
        </div>
        <div className='location'>
          <div className='leftloca'>
            <div className='buspic'>
              <img src='https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2022/11/Intercity-STC-Coaches.jpg' alt='' />
            </div>
            <div className='sectiontop'>
              <h2>
                <PanoramaFishEyeSharpIcon className='ic' />
                {origin}
              </h2>
              <h3>
                <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}

              </h3>
            </div>
            <div className='sectionbottom'>
              <h2>
                <LocationOnSharpIcon className='ic' />
                {destination}
              </h2>
              <h3>
                <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}
          
              </h3>
            </div>
          </div>
          <div className='rightloca'>

            <h6>Price</h6>
            <div className='book-button'>
            <button>Book</button></div>
          </div>
        </div>
      </div>

   
    </div>
  );
}

export default SearchNew;
