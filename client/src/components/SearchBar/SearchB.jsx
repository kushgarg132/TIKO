import React, { useState } from 'react';
import "./SearchB.css";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { format, addMonths } from 'date-fns';

const SearchBo = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  const handleFromCityChange = (event) => {
    setFromCity(event.target.value);
  };

  const handleToCityChange = (event) => {
    setToCity(event.target.value);
  };

const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

//   const handleReturnDateChange = (event) => {
//     setReturnDate(event.target.value);
//   };

//   const handlePassengerCountChange = (event) => {
//     setPassengerCount(event.target.value);
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  }

  const today = format(new Date(), 'yyyy-MM-dd');

  return (
    <>
      <form className="search-b" onSubmit={handleSubmit}>
        <div className="search-b-inputs">
          <div className="input-grp">
            <label htmlFor="fromCity">From</label>
            <input
              type="text"
              id="fromCity"
              placeholder='Enter Station'
              value={fromCity}
              onChange={handleFromCityChange}
              required
            />
          </div>
          <button className="swap-but" onClick={handleSwap}>
            <i className="fas fa-exchange-alt"><MdOutlineSwapHorizontalCircle/></i>
          </button>

          <div className="input-grp">
            <label htmlFor="toCity">To</label>
            <input
              type="text"
              id="toCity"
              placeholder='Enter Station'
              value={toCity}
              onChange={handleToCityChange}
              required
            />
          </div>

          <div className="input-grp">
            <label htmlFor="departureDate">Departure Date</label>
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              onChange={handleDepartureDateChange}
              min={today}
              max={format(addMonths(new Date(), 4), 'yyyy-MM-dd')}
              required
            />
          </div>
          <button className = "but" type="submit">SEARCH</button>
        </div> 
      </form>
      </>
  );
};

export default SearchBo;