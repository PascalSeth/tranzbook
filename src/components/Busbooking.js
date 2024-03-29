import React, { useState } from 'react';
import AirlineSeatReclineNormalOutlinedIcon from '@mui/icons-material/AirlineSeatReclineNormalOutlined';


function Busbooking() {
  // Generate an array of seat numbers (1-45)
  const seatNumbers = Array.from({ length: 45 }, (_, index) => index + 1);

  // Initialize a state to keep track of selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to handle seat selection
  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  // Arrange the seats in two rows, each with 11 seats, horizontally as specified
  const seatGrid = [
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21],
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
  ];

  const seatGrid2 = [
    [23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    [24, 26, 28, 30, 32, 34, 36, 38, 40, 42,44 ],
  ];
  // Generate an array of seat numbers (1-45)
  const seatCNumbers = Array.from({ length: 45 }, (_, index) => index + 1);

  // Initialize a state to keep track of selected seats
  const [selectedCseats, setSelectedCseats] = useState([]);

  // Function to handle seat selection
  const toggleSeatCSelection = (seatCNumber) => {
    if (selectedCseats.includes(seatCNumber)) {
      setSelectedCseats(selectedCseats.filter((seat) => seat !== seatCNumber));
    } else {
      setSelectedCseats([...selectedCseats, seatCNumber]);
    }
  };

  // Split the seat numbers into two ranges
  const firstRange = seatCNumbers.slice(0, 11);
  const secondRange = seatCNumbers.slice(11,22);
  const thirdRange = seatCNumbers.slice(22,33);
  const fourthRange = seatCNumbers.slice(33,44);




  return (
    <div className='bg-white p-[2vw] flex flex-col items-center'>
      <div className='max-lg:hidden'>
      <div className='mb-[5vh] flex-col '>  
          {seatGrid.map((row, rowIndex) => (
        <div key={rowIndex} className='flex'>
          {row.map((seatNumber) => (
            <div
            className='seatings flex-col mx-[1vw] max-lg:mx-[2vw] my-[1vh] w-fit cursor-pointer
             border-gray-400 
             items-center flex border rounded-lg maxl'
              key={seatNumber}
              onClick={() => toggleSeatSelection(seatNumber)} // Handle seat selection on click
            >
              <AirlineSeatReclineNormalOutlinedIcon />
              {seatNumbers.includes(seatNumber) && (
                <span style={{ fontWeight:'600',
                color: selectedSeats.includes(seatNumber) ? 'white' : '#6C7782', // Change background color when selected
              }}>{seatNumber}</span>
              )}
            </div>
          ))}
        </div>
      ))}
      </div>

      <div style={{marginBottom:"2vh"}}>  
          {seatGrid2.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((seatNumber) => (
            <div
            className='seatings flex-col mx-[1vw] max-lg:mx-[2vw] my-[1vh] w-fit cursor-pointer border-gray-400 items-center flex border rounded-lg'
              key={seatNumber}
              onClick={() => toggleSeatSelection(seatNumber)} // Handle seat selection on click
            >
              <AirlineSeatReclineNormalOutlinedIcon />
              {seatNumbers.includes(seatNumber) && (
                <span style={{ fontWeight:'600',
                color: selectedSeats.includes(seatNumber) ? 'white' : '#6C7782', // Change background color when selected
              }}>{seatNumber}</span>
              )}
            </div>
          ))}
        </div>
      ))}
      </div></div>

      <div className='flex lg:hidden '>
        <div className='flex'>
      <div>
        {firstRange.map((seatCNumber) => (
          <div
            key={seatCNumber}
            onClick={() => toggleSeatCSelection(seatCNumber)}
            className='seatings flex-col mx-[1vw] max-lg:mx-[2vw] my-[1vh] w-fit cursor-pointer
            border-gray-400 
            items-center flex border rounded-lg maxl'
          >
            <AirlineSeatReclineNormalOutlinedIcon />
            {seatCNumber}
          </div>
        ))}
      </div>
      <div>
        {secondRange.map((seatCNumber) => (
          <div
            key={seatCNumber}
            onClick={() => toggleSeatCSelection(seatCNumber)}
            className='seatings flex-col mx-[1vw] max-lg:mx-[2vw] my-[1vh] w-fit cursor-pointer
            border-gray-400 
            items-center flex border rounded-lg maxl'
          >
            <AirlineSeatReclineNormalOutlinedIcon />
            {seatCNumber}
          </div>
        ))}
      </div>
      
      
      </div>

      <div>
</div>
<div className='flex'>
<div className='flex ml-[6vw]'>
      <div>
        {thirdRange.map((seatCNumber) => (
          <div
            key={seatCNumber}
            onClick={() => toggleSeatCSelection(seatCNumber)}
            className='seatings flex-col mx-[1vw] max-lg:mx-[2vw] my-[1vh] w-fit cursor-pointer
            border-gray-400 
            items-center flex border rounded-lg maxl'
          >
            <AirlineSeatReclineNormalOutlinedIcon />
            {seatCNumber}
          </div>
        ))}
      </div>
      <div>
        {fourthRange.map((seatCNumber) => (
          <div
            key={seatCNumber}
            onClick={() => toggleSeatCSelection(seatCNumber)}
              className='seatings flex-col mx-[1vw] max-lg:mx-[2vw] my-[1vh] w-fit cursor-pointer
             border-gray-400 
             items-center flex border rounded-lg maxl'
          >
            <AirlineSeatReclineNormalOutlinedIcon />
            {seatCNumber}
          </div>
        ))}
      </div>
      
      
      </div>
</div>
      </div>



     
    </div>
  );
}

export default Busbooking;