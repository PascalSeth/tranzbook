import React from 'react';
import { useLocation } from 'react-router-dom';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';

function TicketConfirmation() {
  const location = useLocation();
  const origin = location.state ? location.state.origin : 'N/A';
  const destination = location.state ? location.state.destination : 'N/A';
  const ticketQuantity = location.state ? location.state.ticketQuantity : 'N/A';
  const selectedDate = location.state ? location.state.selectedDate : 'N/A';

  return (
    <div className='flex flex-col items-center bg-[#48a0ff38] h-screen'>
      <div className='w-[80%] bg-[#48a0ff38]'>
        <div className='ticket-confirmation-container flex flex-col bg-white p-[2vw] rounded-md m-[3vh]'>
          <h3 className='font-semibold text-[#48a0ff] text-center'>
            Ticket Confirmation
          </h3>
          <div className='ticket-details flex flex-col pb-[2vh]'>
            <div className='ticket-detail'>
              <PanoramaFishEyeSharpIcon className='ticket-icon' /> Origin: {origin}
            </div>
            <div className='ticket-detail'>
              <LocationOnSharpIcon className='ticket-icon' /> Destination: {destination}
            </div>
            <div className='ticket-detail'>
              <AccessTimeSharpIcon className='ticket-icon' /> Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}
            </div>
            <div className='ticket-detail'>
              <span className='ticket-icon'>🎟️</span> Ticket Quantity: {ticketQuantity}
            </div>
          </div>
          {/* Add additional ticket details as needed */}
          <div className='continue-button-pick mt-[2vh]'>
            <button className='outline-none bg-none border-none font-semibold text-white'>
              Print Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketConfirmation;
