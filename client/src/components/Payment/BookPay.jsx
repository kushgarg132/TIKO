import React from 'react';
import './BookPay.css'
import { FaPlus } from 'react-icons/fa';


const PaymentBox = ({ price }) => {
  const handlePayClick = () => {
    // Handle payment logic here
    console.log('Payment processed successfully!');
  };

  return (
    <div>
  
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
      </div>
      </div>
    
  );
};


export default PaymentBox;
