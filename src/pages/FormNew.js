import React, { useState, useEffect, useRef } from 'react';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CalendarInput from './Calendarinput';
import ReturnCalendarInput from './ReturnCalendar';
import './formnew.css';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';




const cities = [
  'Accra',
  'Abuja',
  'Abidjan',
  'Bolgatanga',
  'Bunkrugu',
  'Cape Coast',
  'Cotonou',
  'Ho',
  'Kumasi',
  'Kintampo',
  'Lagos',
  'Lomé',
  'Navrongo/Bawku/Paga',
  'Nalerigu',
  'Nkoranza',
  'Nkrankwanta',
  'Nandom',
  'Ouagadougou',
  'Obuasi',
  'Sunyani',
  'Sampa',
  'Sandema',
  'Sefwi',
  'Tamale',
  'Takoradi',
  'Techiman',
  'Tarkwa',
  'Tumu',
  'Wa',
  'Walewale',
  'Wenchi',
  'Yendi',
];
function FormNew() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [showOriginPopup, setShowOriginPopup] = useState(false);
    const [showDestinationPopup, setShowDestinationPopup] = useState(false);
    const originRef = useRef(null);
    const navigate = useNavigate();
  
    const destinationRef = useRef(null);
  
    const handleSearch = () => {
      navigate('/search', {
        state: {
          origin,
          destination,
          ticketQuantity,
          selectedDate,
        },
      });
    }

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
    setShowOriginPopup(true);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
    setShowDestinationPopup(true);
  };

  const handleOriginSelection = (selectedCity) => {
    setOrigin(selectedCity);
    setShowOriginPopup(false);
  };

  const handleDestinationSelection = (selectedCity) => {
    setDestination(selectedCity);
    setShowDestinationPopup(false);
  };

  const filteredOriginCities = cities.filter((city) =>
    city.toLowerCase().startsWith(origin.toLowerCase()) && city !== destination
  );

  const filteredDestinationCities = cities.filter((city) =>
    city.toLowerCase().startsWith(destination.toLowerCase()) && city !== origin
  );
  const handleTicketQuantityChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, '');
    setTicketQuantity(formattedValue);
  };
  const [ticketQuantity, setTicketQuantity] = useState('');


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        originRef.current &&
        !originRef.current.contains(event.target) &&
        destinationRef.current &&
        !destinationRef.current.contains(event.target)
      ) {
        setShowOriginPopup(false);
        setShowDestinationPopup(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
const [selectedDate, setSelectedDate] = useState(null);

const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='form-container'>
      <div className='form'>
        <div className='form-space'>
          <PanoramaFishEyeIcon className='float-Icon' />
          <div className='columnContainer'>
            <div className='word'>
              <h6>FROM</h6>
            </div>
            <div className='inputField' ref={originRef}>
              <input
                placeholder='ORIGIN'
                value={origin}
                onChange={handleOriginChange}
              />
              {showOriginPopup && (
                <ul className='popup'>
                  {filteredOriginCities.map((city, index) => (
                    <li key={index} onClick={() => handleOriginSelection(city)}>
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className='form-space'>
          <LocationOnIcon className='float-Icon' />
          <div className='columnContainer'>
            <div className='word'>
              <h6>TO</h6>
            </div>
            <div className='inputField' ref={destinationRef}>
              <input
                placeholder='DESTINATION'
                value={destination}
                onChange={handleDestinationChange}
              />
              {showDestinationPopup && (
                <ul className='popup'>
                  {filteredDestinationCities.map((city, index) => (
                    <li
                      key={index}
                      onClick={() => handleDestinationSelection(city)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className='calcontainer'>       
        <div className='calform-space'>
          <CalendarTodayIcon className='float-Icon' />
          <div className='columnContainer'>
            <div className='word'>
              <h6>DATE</h6>
            </div>
            <div className='inputField'>
              <CalendarInput
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                onDateChange={handleDateChange}
              />
            </div>
          </div>
        </div>
        <div className='calform-space2'>
          <CalendarMonthIcon className='float-Icon' />
          <div className='columnContainer'>
            <div className='word'>
              <h6>RETURN DATE</h6>
            </div>
            <div className='inputField'>
              <ReturnCalendarInput selectedDate={selectedDate} />
            </div>
          </div>
        </div></div>
 
        <div className='form-spacex'>
          <ConfirmationNumberIcon className='float-Icon' />
          <div className='columnContainer'>
            <div className='word'>
              <h6>TICKET QUANTITY</h6>
            </div>
            <div className='inputField'>
              <input
                placeholder='0'
                value={ticketQuantity}
                onChange={handleTicketQuantityChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='search-button' onClick={handleSearch}>
        <SearchIcon className='searchIcon' />{' '}
        <h6 className='searchText'>Search</h6>
      </div>
    </div>
  );
}

export default FormNew;
