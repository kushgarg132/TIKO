import React, { useState } from "react";
import "./TravellerDetails.css";

const TravellerDetails = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSaveClick = () => {
    const traveller = { name, age, gender };
    props.onSave(traveller);
  };

  const handleCancelClick = () => {
    props.onClose();
  };

  return (
    <div className="traveller-details">
      <h2>Traveller Details</h2>
      <div className="traveller-details-form">
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Age:
          <input type="text" value={age} onChange={handleAgeChange} />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={handleGenderChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <div className="traveller-details-buttons">
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default TravellerDetails;
