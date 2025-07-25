import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import insta_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
          <img src={footer_logo} alt="footer_logo" />
          <p>SNAPCART</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={insta_icon} alt="instagram_icon" />
          </div>
          <div className="footer-icons-container">
            <img src={pinterest_icon} alt="instagram_icon" />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="instagram_icon" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ {new Date().getFullYear()} - All Rights Reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
