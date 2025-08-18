import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Jack & Jill Toy Shop</h3>
              <p>Making childhood magical, one toy at a time!</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/toys">Toys Collection</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><a href="/toys?category=cars/rideables">Cars & Rideables</a></li>
              <li><a href="/toys?category=rakhdi">Rakhdi</a></li>
              <li><a href="/toys?category=cradles baby toys">Cradles & Baby Toys</a></li>
              <li><a href="/toys?category=electronics">Electronics</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@jakcnjill.com</p>
              <p>📍 123 Toy Street, Fun City, FC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Jack & Jill Toy Shop. All rights reserved.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 