import React, { useState } from 'react';
import './ticketcard.css';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';

function Ticketsinfo({ origin, destination, selectedDate }) {
  const [activeButton, setActiveButton] = useState('Regular');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
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
            <button>Book</button>
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
            <button>Book</button>
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
            <button>Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticketsinfo;
