import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Career Sphere</p>
        <ul className="footer-links">
          <li>
            <Link to="/social-media" className="footer-link">Social Media</Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">Contact</Link>
          </li>
          <li>
            <Link to="/help" className="footer-link">Help</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
