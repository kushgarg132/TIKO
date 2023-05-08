import React, { useState } from "react";
import TrainCard from "../../components/TrainCard/TrainCard";
// import BookingMain from "../../components/Traveller-details/BookingMain";
import "./Booking.css";
import Payment from "../../components/Payment/Payment";

import Footer from "../../components/BottomNavbar/BottomNavbar";
import Navbar from "../../components/Navbar/Navbar";
const BookingMainPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="traincard">
        <TrainCard />
      </div>
      <div className="payment">
        <Payment />
      </div>
      {/* <div className="traveller-card">
        <BookingMain />
      </div> */}
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default BookingMainPage;
