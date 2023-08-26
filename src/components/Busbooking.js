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

  return (
    <div style={{backgroundColor:'white',padding:'2vw',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div style={{marginBottom:"2vh"}}>  
          {seatGrid.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((seatNumber) => (
            <div
              key={seatNumber}
              style={{
                margin: '5px',
                backgroundColor: selectedSeats.includes(seatNumber) ? 'orange' : 'white', // Change background color when selected
                cursor: 'pointer',
                display:'flex',
                alignItems:'center',
                width:'3vw',
                borderRadius:'9px',
                border:'0.5px solid lightgray'
              }}
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
  
      {/* Add a div for seatGrid2 */}
      <div>
        {seatGrid2.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((seatNumber) => (
              <div
                key={seatNumber}
                style={{
                  margin: '5px',
                  backgroundColor: selectedSeats.includes(seatNumber)
                    ? 'orange'
                    : 'white', // Change background color when selected
                  cursor: 'pointer',
                  display:'flex',
                  alignItems:'center',
                  width:'3vw',
                  borderRadius:'9px',
                  border:'0.5px solid lightgray'


                }}
                onClick={() => toggleSeatSelection(seatNumber)} // Handle seat selection on click
              >
                <AirlineSeatReclineNormalOutlinedIcon />
                {seatNumbers.includes(seatNumber) && (
                  <span style={{  fontWeight:'600',
                  color: selectedSeats.includes(seatNumber) ? 'white' : '#6C7782', // Change background color when selected
                }}>{seatNumber}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Busbooking;
