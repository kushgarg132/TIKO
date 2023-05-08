import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

function App() {
  return (
    <div className="wrapper">
      <div className="box">
        <h6>Welcome Kush!</h6>
        <h6>To TIKO!!</h6>
              <div className="dropdown">
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                 <Link className="dropdown-item" to="/profile">Your Profile</Link>
                      
            <Link className="dropdown-item" to="/logout">Log Out</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
