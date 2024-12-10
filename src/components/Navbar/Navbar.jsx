import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMenu = () => {
    setIsMobile(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.navbar')) {
        setIsMobile(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className={`navbar ${isMobile ? 'active' : ''}`}>
      {/* First UL: HOME and PORTFOLIO for large screens */}
      <ul className={`navbar-links large-screen ${isMobile ? 'active' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
        </li>
      </ul>

      {/* Logo in between */}
      <div className="navbar-logo">
        <NavLink
          to="/"
          onClick={() => {
            closeMenu();
            scrollToTop();
          }}
        >
          <img src={Logo} alt="Logo" className="logo" />
        </NavLink>
      </div>

      {/* Second UL: SERVICES and CONTACT for large screens */}
      <ul className={`navbar-links large-screen ${isMobile ? 'active' : ''}`}>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </button>

      {/* Third UL: MOBILE MENU */}
      <ul className={`navbar-links mobile-screen ${isMobile ? 'active' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
