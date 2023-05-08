import React, { useState } from 'react';
import "./SearchBar.css";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";

import { useDispatch } from "react-redux";
import { format, addMonths } from 'date-fns';
import { getAllTrains } from '../../actions/trains';
import { Navigate, useNavigate } from 'react-router-dom';
const SearchBox = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const navigate= useNavigate();

  const dispatch = useDispatch();
  const handleFromCityChange = (event) => {
    setFromCity(event.target.value);
  };

  const handleToCityChange = (event) => {
    setToCity(event.target.value);
  };

const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const source=data.get('fromCity');
    const destination=data.get('toCity');
    const date=data.get('departureDate');
    const day=new Date(date).getDay();
    dispatch(getAllTrains());
    navigate("/avail");
  };

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  }

  const today = format(new Date(), 'yyyy-MM-dd');

  return (
    <>
      <form className="search-box" onSubmit={handleSubmit}>
        <div className="search-box-inputs">
          <div className="input-group">
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
          <button className="swap-button" onClick={handleSwap}>
            <i className="fas fa-exchange-alt"><MdOutlineSwapHorizontalCircle/></i>
          </button>

          <div className="input-group">
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

          <div className="input-group">
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
        </div>
        <button className='butt' type="submit">SEARCH</button>
      </form>
      </>
  );
};

export default SearchBox;