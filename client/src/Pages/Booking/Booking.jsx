import React from 'react';
import './Booking.css'
import { FaPlus } from 'react-icons/fa';
import TrainCard from '../../components/TrainCard/TrainCard';

const PaymentBox = ({ price }) => {
  const handlePayClick = () => {
    // Handle payment logic here
    console.log('Payment processed successfully!');
  };

  return (
    <div>
      <TrainCard/>
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
      <div className="small-box">
  <h2>Note</h2>
  <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
    <li>No cancellation policy</li>
    <li>Pay on meal policy</li>
    <li>Book from Tiko for better offers</li>
  </ul>
</div>
      <div className="add-traveller-container">
      <h3 class="add-traveller-heading">Add Traveller and Preferences</h3>
      <button className="add-traveller-button">
        <FaPlus style={{ marginRight: '5px' }} />
        Add Traveller
      </button>
     </div>
    </div>

    
  );
};

const PaymentBoxContainer = ({ price }) => {
  return (
    <div className='payment-container'>
      <PaymentBox price={price} />
    </div>
  );
};

export default PaymentBoxContainer;
