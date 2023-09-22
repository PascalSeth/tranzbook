import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import { useLocation } from 'react-router-dom'; // Import useLocation
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import Busbooking from '../components/Busbooking';

function BusSeatSelection() {
  const location = useLocation(); // Use useLocation hook
  const origin = location.state ? location.state.origin : 'N/A';
  const destination = location.state ? location.state.destination : 'N/A';
  const ticketQuantity = location.state ? location.state.ticketQuantity : 'N/A';
  const selectedDate = location.state ? location.state.selectedDate : 'N/A';

  return (
    
    <div className='flex  flex-col items-center bg-[#48a0ff38] '>
      <div className=' w-[80%]  bg-[#48a0ff38]'>
        <div className='pickseat flex justify-between items-center p-[2vh]'>
          <div className='flex items-center text-[#48a0ff] text-center w-[50%] max-lg:p-0'>
            <h3 className='font-semibold'>Review Ticket options</h3>
        
          </div>
          <div className='pickseat-right flex items-center max-lg:flex-col'>
            <h4 className='text-[#48a0ff] font-medium mr-4 max-lg:mr-0' >Price</h4>
            <div className='continue-button-pick'>
              <button className='outline-none bg-none border-none font-semibold text-white'>Continue</button>
            </div>
          </div>
        </div>
        <div className='pickcard flex flex-col bg-white p-[2vw] rounded-md m-[3vh]'>
          <div className='pickcard-orient flex  flex-col pb-[2vh]'>
          <div className='pickcardtop'>
                      <PanoramaFishEyeSharpIcon className='pickcardicon'/> Origin: {origin} |
          </div>
          <div className='pickcardbottom'>
          <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}

          </div>
          </div>
          <div className='pickcard-orient2 flex flex-col '>
          <div className='pickcardtop'>
                      <LocationOnSharpIcon className='pickcardicon'/> Destination: {destination} | 
            </div>
            <div className='pickcardbottom'>
            <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}

          </div>
          </div>
    
        </div>

      <div className='seatselection flex flex-col '> 
      <div className='flex justify-between p-[2vh] bg-white'>
    <h4 className='text-[#48a0ff] font-semibold'>45 Seats</h4>
    <h4 className='text-[#48a0ff] font-semibold'>Tour Bus</h4>
  </div>
<div className='seat-header' >
 
<h4>Flexibilities and Conditions</h4>
</div>
<div className='seat-book'>
<Busbooking/>
</div>
      </div>
<div className='amenities'>
<div className='seat-header'>
  <h4>Amenities</h4></div>

  <div className='amenitylistcontainer bg-white items-center p-[2vh] rounded-b-lg rounded-bl-lg' >
  <div className='amenitylist flex max-lg:flex-col'>
    <div className='amenityiconcontainer'>
    <AcUnitIcon className='amenityicon'/>
    Air Conditioning
    </div>
    
    <div className='amenityiconcontainer'>
<KitchenOutlinedIcon className='amenityicon'/>
Refrigerator
    </div>
    
    <div className='amenityiconcontainer'>
<PowerSettingsNewOutlinedIcon className='amenityicon'/>
   Power Outlets
    </div>
    
    <div className='amenityiconcontainer'>
<DesktopWindowsOutlinedIcon className='amenityicon'/>
   Television
    </div>
    </div>
    <div className='continue-button-pick mt-[2vh]'>
    <button className='outline-none bg-none border-none font-semibold text-white'>Continue</button>

  </div>

  
  </div>

</div>

</div>
    </div>
  )
}

export default BusSeatSelection
