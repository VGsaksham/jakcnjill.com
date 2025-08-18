import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PromoBanner from './PromoBanner';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Promotional Banner */}
      <PromoBanner />
      
      {/* Main Header */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            {/* Logo */}
            <Link to="/" className="logo">
              <div className="logo-content">
                <img src="/img/logo.png" alt="Jack & Jill Toys" className="logo-image" />
                <div className="logo-text-wrapper">
                  <div className="logo-text">Jakc & Jill</div>
                  <div className="logo-subtitle">TOYS</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/toys" 
                className={`nav-link ${isActive('/toys') ? 'active' : ''}`}
              >
                Collection
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            {/* Overlay to close menu when clicking outside */}
            <div className="mobile-menu-overlay" onClick={closeMenu}></div>
            
            <nav className="mobile-nav">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>🏠</span>
                Home
              </Link>
              <Link 
                to="/toys" 
                className={`nav-link ${isActive('/toys') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>🧸</span>
                Collection
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>ℹ️</span>
                About
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>📞</span>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 