import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../BottomNavbar/BottomNavbar.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="footer__section">
          <h3>Contact Us</h3>
          <p>Email: info@trainticketbooking.com</p>
          <p>Phone: +1 (555) 555-5555</p>
          <p>Address: 123 Main Street, Anytown USA</p>
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
        <p>&copy; 2023 Train Ticket Booking. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
