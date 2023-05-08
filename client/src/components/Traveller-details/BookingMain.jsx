import React, { useState } from "react";
import "./BookingMain.css";
import { FaPlus } from "react-icons/fa";
import TrainCard from "./TrainCard2";
import TravellerDetails from "./TravellerDetails";

const BookingMain = () => {
  const [showTravellerDetails, setShowTravellerDetails] = useState(false);
  const [travellers, setTravellers] = useState([]);

  const handleAddTravellerClick = () => {
    setShowTravellerDetails(true);
  };

  const handleTravellerDetailsSave = (traveller) => {
    setTravellers([...travellers, traveller]);
    setShowTravellerDetails(false);
  };

  const handleTravellerDetailsClose = () => {
    setShowTravellerDetails(false);
  };

  return (
    <div className="bground">
      <div className="traveller-box">
        <div className="add-traveller-container">
          <h3 class="add-traveller-heading">Add Traveller and Preferences</h3>
          <button
            className="add-traveller-button"
            onClick={handleAddTravellerClick}
          >
            <FaPlus style={{ marginRight: "5px" }} /> Add Traveller
          </button>
        </div>

        {travellers.map((traveller, index) => (
          <div key={index} className="traveller-details-box">
            <h3>Traveller {index + 1} Details:</h3>
            <div>Name: {traveller.name}</div>
            <div>Age: {traveller.age}</div>
            <div>Gender: {traveller.gender}</div>
          </div>
        ))}
      </div>
      {showTravellerDetails && (
        <div className="traveller-details-popup">
          <div className="traveller-details-popup-container">
            <TravellerDetails
              onSave={handleTravellerDetailsSave}
              onClose={handleTravellerDetailsClose}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingMain;
