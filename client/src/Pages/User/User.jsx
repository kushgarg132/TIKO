import React from 'react';
import './User.css';

function UserProfile() {
  return (
   <div>
    
    <div className="user-profile-box">
      <h3>User Profile</h3>
      <div className="user-profile-info">
        <div className="user-profile-field">
          <span className="field-label">Name:</span>
          <span className="field-value">Anindita</span>
        </div>
        <div className="user-profile-field">
          <span className="field-label">Age:</span>
          <span className="field-value">30</span>
        </div>
        <div className="user-profile-field">
          <span className="field-label">Gender:</span>
          <span className="field-value">Female</span>
        </div>
        <div className="user-profile-field">
          <span className="field-label">BirthDate:</span>
          <span className="field-value">01/01/1990</span>
        </div>
        <h3>Contact Information</h3>
        <div className="user-profile-field">
          <span className="field-label">Email</span>
          <span className="field-value">abc@gmail.com</span>
        </div>
        <div className="user-profile-field">
          <span className="field-label">Phone Number</span>
          <span className="field-value">1234567890</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserProfile;