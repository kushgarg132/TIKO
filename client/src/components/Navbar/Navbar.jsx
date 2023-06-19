import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCurrentUser } from "../../actions/currentUser";
import decode from "jwt-decode";
import {
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

import LOGO from "../../assets/LogoTiko.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__logo">
        <a href="/">
          <img src={LOGO} alt="Train Ticket Reservation" />
        </a>
      </div>

      <div className={`navbar__toggle ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <ul className={`navbar__menu ${showMenu ? "active" : ""}`}>
        <li className="navbar__menu-item">
          <a href="/">Book Train Tickets</a>
        </li>
        {/* <li className="navbar__menu-item">
          <a href="#">Cancel Train Tickets</a>
        </li> */}
        <li className="navbar__menu-item">
          <a href="/checkPNR">PNR Status</a>
        </li>
        {/* <li className="navbar__menu-item">
          <a href="#">Train Timetable</a>
        </li> */}
      </ul>

      {User === null ? (
        <div className="navbar__actions">
          <a href="/login" className="navbar__user-link">
            <FontAwesomeIcon
              icon={faUser}
              className="navbar__user-icon"
            />
            <span className="navbar__user-name">Login/Signup</span>
          </a>
        </div>
      ) : (
      <>
        <div className="wrapper">
          <div className="box">
            <h6>Welcome {User.result.name}</h6>
            <h6>To TIKO!!</h6>
            <div className="dropdown">
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/profile">Your Profile</Link>

                <button className="dropdown-item" onClick={()=>handleLogout()}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </>)}

    </nav>
  );
};

export default Navbar;
