import React, { useState } from "react";
import "./Payment.css";
import { FaPlus } from "react-icons/fa";

const PaymentBox = ({ price }) => {
  const [isPaid, setIsPaid] = useState(false);

  const handlePayClick = () => {
    // Handle payment logic here
    console.log("Payment processed successfully!");
    setIsPaid(true);
  };

  const handleDownloadClick = () => {
    // Handle download ticket logic here
    console.log("Ticket downloaded successfully!");
  };

  return (
    <div>
      <div className="booking-container">
        <hr />
        <h3 className="booking-title">Order Summary</h3>
        <div className="booking-details">
          <div className="booking-detail-left">
            <p>Base Fare for Adult:</p>
            <p>Tax:</p>
            <p>Tatkal Fare:</p>
            <hr></hr>
            <p>
              <strong>Total Price per Adult</strong>
            </p>
          </div>
          <div className="booking-detail-right">
            <p>${price}</p>
            <p>$0</p>
            <p>${price}</p>
            <hr />
            <p>
              <strong>${price}</strong>
            </p>
          </div>
        </div>
        {isPaid ? (
          <div className="payment-confirmation">
            <p>Payment confirmed</p>
            <button onClick={handleDownloadClick}>Download ticket</button>
          </div>
        ) : (
          <button onClick={handlePayClick} className="booking-button">
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

const PaymentBoxContainer = ({ price }) => {
  return (
    <div className="payment-container">
      <PaymentBox price={price} />
    </div>
  );
};

export default PaymentBoxContainer;
