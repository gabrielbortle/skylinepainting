// Footer.jsx
import React from 'react';
import './Footer.css'; // Create a CSS file for styling
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://m.facebook.com/profile.php?id=100037466028402&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src= {Facebook} alt="Facebook" className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/_skylinepainting_?igsh=MTdpdHpvbzljeHA2aQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src= {Instagram} alt="Instagram" className="social-icon" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="contact">
          <h2>Get in Contact!</h2>
          <h4>Chino Ortiz</h4>
          <p>(208) 701 - 8837</p>
          <p>(208) 313 - 9266</p>
          <p>Skylinepanting27@gmail.com</p>
        </div>
      </div>

      {/* Footer Attribution */}
      <div className="footer-bottom">
        <p>Website by Teton Code <br></br> &copy; 2024 Skyline Painting. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
