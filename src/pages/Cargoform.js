import React,{useState} from 'react'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import CalendarInput from '../components/Calendar/Calendarinput';

function Cargoform() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters

    setInputValue(formattedValue);
  };
  return (
    <div className='flex flex-col items-center'>
      <form className='flex flex-col items-center'>
       
        <div className='information'>
        <PanoramaFishEyeIcon className='cargosym'/>
        <div className='cargotxt'>
<input placeholder='ORIGIN' className='txt'/>
        </div>
        </div>
       
        <div className='information'> 
        <LocationOnIcon className='cargosym'/>
        <div className='cargotxt'>
        <input placeholder='DESTINATION' className='txt'/>
          </div>
        </div>

        <div className='information'>
            <CalendarMonthIcon className='cargosym'/>
        <div className='cargotxtd'>
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
<div className='p-[1vh] bg-[#48a0ff] items-center flex flex-col w-full rounded-md'>
<button className='p-[1vh] border-none bg-none text-white font-semibold'>Book</button>
</div>
        </form>
    </div>
  )
}

export default Cargoform
