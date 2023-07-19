import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faTrash } from '@fortawesome/free-solid-svg-icons';
import './busseat.css';

const BusSeatSelection = () => {
  const totalSeats = 55; // Total number of seats
  const [selectedSeats, setSelectedSeats] = useState([]);
  const availableSeats = totalSeats - selectedSeats.length;

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      // Toggle seat selection
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const handleClearSelection = () => {
    setSelectedSeats([]);
  };

  return (
    <div className='busseat'>
      <h2>Bus Seat Selection</h2>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p>Available Seats: {availableSeats}</p>
      <div className="bus-seats">
        {Array.from({ length: totalSeats }, (_, index) => (
          <div
            key={index}
            className={`bus-seat ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(index + 1)}
          >
            <FontAwesomeIcon icon={faCouch} className="seat-icon" />
            <span className="seat-number">{index + 1}</span>
          </div>
        ))}
      </div>
      <button className="clear-button" onClick={handleClearSelection}>
        <FontAwesomeIcon icon={faTrash} className="clear-icon" />
        Clear Selection
      </button>
    </div>
  );
};

export default BusSeatSelection;
