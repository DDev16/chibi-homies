import React from 'react';
import './footer.css'; // Import your CSS file for styling
import logo from '../../assets/zyro-image (1).png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src= {logo} alt="ChibiGoneApes Logo" />
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ChibiGoneApes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
