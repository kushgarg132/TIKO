import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Payment.css';

function PaymentSuccess() {
  return (
    <div className="payment-success">
      <FaCheckCircle className="icon" />
      <h2>Payment successful</h2>
      <p>Thank you for your payment.</p>
    </div>
  );
}

export default PaymentSuccess;
