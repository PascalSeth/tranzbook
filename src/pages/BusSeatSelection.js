import React from 'react';
import './busseat.css';
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
    
    <div className='busseatpick'>
      <div className='buscontainerseat'>
        <div className='pickseat'>
          <div className='pickseat-left'>
            <h3>Review Ticket options</h3>
        
          </div>
          <div className='pickseat-right'>
            <h4>Price</h4>
            <div className='continue-button-pick'>
              <button>Continue</button>
            </div>
          </div>
        </div>
        <div className='pickcard'>
          <div className='pickcard-orient'>
          <div className='pickcardtop'>
                      <PanoramaFishEyeSharpIcon className='pickcardicon'/> Origin: {origin} |
          </div>
          <div className='pickcardbottom'>
          <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}

          </div>
          </div>
          <div className='pickcard-orient2'>
          <div className='pickcardtop'>
                      <LocationOnSharpIcon className='pickcardicon'/> Destination: {destination} | 
            </div>
            <div className='pickcardbottom'>
            <AccessTimeSharpIcon className='ic' /> 7:00am | Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}

          </div>
          </div>
    
        </div>

      <div className='seatselection'> 
      <div style={{display:'flex',justifyContent:"space-between",padding:12,backgroundColor:'white'}}>
    <h4 style={{color:'#48A0FF',fontWeight:600,}}>45 Seats</h4>
    <h4 style={{color:'#48A0FF',fontWeight:600,}}>Tour Bus</h4>
  </div>
<div className='seat-header'>
 
<h4>Flexibilities and Conditions</h4>
</div>
<div className='seat-book'>
<Busbooking/>
</div>
      </div>
<div className='amenities'>
<div className='seat-header'>
  <h4>Amenities</h4></div>

  <div className='amenitylistcontainer'>
  <div className='amenitylist'>
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
    <div className='continue-button'>
    <button>
      Continue
    </button>
  </div>

  
  </div>

</div>

</div>
    </div>
  )
}

export default BusSeatSelection
