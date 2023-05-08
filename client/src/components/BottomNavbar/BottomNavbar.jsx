import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../BottomNavbar/BottomNavbar.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>TIKO is a railway ticket booking system that simulates IRCTC by enabling users to book and manage train tickets.</p>
        </div>
        <div className="footer__section">
          <h3>Contact Us</h3>
          <p>Email: info@tiko.com</p>
          <p>Phone: +91-8541939746</p>
          <p>Address: Sus, Pune</p>
        </div>
        <div className="footer__section">
          <h3>Follow Us</h3>
          <ul className="footer__social">
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
          </ul>
        </div>
        {/* <div className="footer__section">
          <h3>Newsletter</h3>
          <form className="footer__form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div> */}
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 TIKO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
