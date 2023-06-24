import React,{useState} from 'react'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import './cargoform.css'
import CalendarInput from './Calendarinput';

function Cargoform() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters

    setInputValue(formattedValue);
  };
  return (
    <div className='cargoform'>
      <form>
       
        <div className='information'>
        <PanoramaFishEyeIcon className='cargosym'/>
        <div className='cargotxt'>
            <h6>From:</h6>
<input placeholder='ORIGIN' className='txt'/>
        </div>
        </div>
       
        <div className='information'> 
        <LocationOnIcon className='cargosym'/>
        <div className='cargotxt'>
        <h6>To:</h6>
        <input placeholder='DESTINATION' className='txt'/>
          </div>
        </div>

        <div className='information'>
            <CalendarMonthIcon className='cargosym'/>
        <div className='cargotxtd'>
          <h6>Date:</h6>
         <CalendarInput className='calenda'/>
        </div>
        </div>

        <div className='information'>
            <BalanceOutlinedIcon className='cargosym'/>
        <div className='cargotxt'>
          <input placeholder='weight' value={inputValue}
      onChange={handleInputChange} className='txt'/>
        </div>
        </div>

        <div className='inputfield'>
            <input placeholder='Enter goods description'/>
        </div>
<div className='formbutton'>
<button>Book</button>
</div>
        </form>
    </div>
  )
}

export default Cargoform
