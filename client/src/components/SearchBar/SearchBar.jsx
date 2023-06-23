import React, { useState } from 'react';
import "./SearchBar.css";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";

import { useDispatch } from "react-redux";
import { format, addMonths } from 'date-fns';
import { getTrain } from '../../actions/trains';
import { Navigate, useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
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
    const day=new Date(departureDate).getDay();
    var today = new Date();

    dispatch(getTrain({source:fromCity,destination:toCity,journeyDay:day,today:today}));
    navigate("/avail/"+fromCity+"/"+toCity);
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