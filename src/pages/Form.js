import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import './form.css';
import SearchIcon from '@mui/icons-material/Search';
import CalendarInput from './Calendarinput';
import ReturnCalendarInput from './ReturnCalendar';

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
  'Yendi'
];

function Form({ onSearch }) {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [ticketQuantity, setTicketQuantity] = useState('');

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTicketQuantityChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, '');
    setTicketQuantity(formattedValue);
  };

  const handleSearch = () => {
    onSearch({
      origin,
      destination,
      selectedDate,
      ticketQuantity,
    });
  };

  // Filter cities to exclude the selected origin from the destination dropdown
  const filteredCities = cities.filter((city) => city !== origin);

  return (
    <div className='form'>
      <div className='details'>
        <form>
          <div className='info'>
            <PanoramaFishEyeIcon className='symbol' />
            <div className='word'>
              <h6>FROM</h6>
              <div className='dropdown-container'>
                <select           className='dropdownlst'
 value={origin} onChange={handleOriginChange}>
                  <option value=''>ORIGIN</option>
                  {
                  cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className='info'>
            <LocationOnIcon className='symbol' />
            <div className='word'>
              <h6>TO</h6>
              <div className='dropdown-container'>
                <select className='cont' value={destination} onChange={handleDestinationChange}>
                  <option value=''>DESTINATION</option>
                  {filteredCities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className='info'>
            <CalendarMonthIcon className='symbol' />
            <div className='word'>
              <h6>DATE</h6>
              <CalendarInput selectedDate={selectedDate} onDateChange={handleDateChange} className='cal' />
            </div>
          </div>

          <div className='info'>
            <CalendarTodayIcon className='symbol' />
            <div className='word'>
              <h6>RETURN DATE</h6>
              <ReturnCalendarInput selectedDate={selectedDate} className='cal' />
            </div>
          </div>

          <div className='info1'>
            <ConfirmationNumberIcon className='symbol' />
            <div className='word'>
              <h6>TICKET QUANTITY</h6>
              <input
                placeholder='0'
                value={ticketQuantity}
                onChange={handleTicketQuantityChange}
                className='txt'
              />
            </div>
          </div>
        </form>

        <Link
          to={{
            pathname: '/search',
            search: `?origin=${origin}&destination=${destination}&date=${selectedDate}&quantity=${ticketQuantity}`,
            state: {
              selectedDate: selectedDate,
              ticketQuantity: ticketQuantity,
            },
          }}
          className='lin'
        >
          <div className='button' onClick={handleSearch}>
            <SearchIcon className='search' />
            <button>Search</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Form;
