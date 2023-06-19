import React, { useState } from "react";
import TrainCard from "../../components/TrainCard/TrainCard";
import './Booking.css'
import  { useLocation, useParams } from 'react-router-dom';

const PaymentBox = ({ price }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get('data');
  const train=JSON.parse(data);
  const handlePayClick = () => {
    console.log('Payment processed successfully!');
  };


  return (
      
    <>
      <TrainCard train={train}/>
      <div className='booking-container'>
        <button onClick={handlePayClick} className='booking-button'>Pay</button>
        <hr />
        <h3 className='booking-title'>Order Summary</h3>
        <div className='booking-details'>
          <div className='booking-detail-left'>
            <p>Base Fare for Adult:</p>
            <p>Tax:</p>
            <p>Tatkal Fare:</p>
            <hr></hr>
            <p><strong>Total Price per Adult</strong></p>
          </div>
          <div className='booking-detail-right'>
            <p>${price}</p>
            <p>$0</p>
            <p>${price}</p>
            <hr />
            <p><strong>${price}</strong></p>
          </div>
        </div>
      <div className="traveller-card">
      </div>
      <div className="note">
        <div className="small-box">
          <h2>Note</h2>
          <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
            <li>No cancellation policy</li>
            <li>Pay on meal policy</li>
            <li>Book from Tiko for better offers</li>
          </ul>
        </div>
      </div>
      </div>
    </>
  )
};

export default PaymentBox;
