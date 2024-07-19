import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons';
import "../../css/Footer.css"; // CSS file for styling
import logo from "../../assets/images/HotelLogo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handlePhoneClick = (e, phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      const { clientX, clientY } = e;
      setTooltipPosition({ x: clientX, y: clientY });
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <footer className="footer">
      <div className="overlay"></div>
     
      <div className="footer-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="footer-contact">
        <p className='footer-contact-title'><b>Contact Us</b></p>
        <ul className="contact-links">
          <li><a href="https://www.google.com/maps?ll=51.541287,-0.261686&z=17&t=m&hl=en&gl=LK&mapclient=embed&cid=11362073612214208868" target='_blank' rel="noopener noreferrer"><span className='contact-icons'><FontAwesomeIcon icon={faMapMarkerAlt} /></span><span className='contact-label'>Bridge Park Hotel, 16 Hillside,<br/>London, NW10 8BN, United Kingdom</span></a></li>
          <li><a onClick={(e) => handlePhoneClick(e, '+44 208961 1260')} style={{ cursor: 'pointer' }}><span className='contact-icons'><FontAwesomeIcon icon={faPhone} /></span><span className='contact-label'>(+44) 020 8961 1260</span></a></li>
          <li><a href="mailto:bridgeparkhotel@gmail.com" target='_blank' rel="noopener noreferrer"><span className='contact-icons'><FontAwesomeIcon icon={faEnvelope} /></span><span className='contact-label'>(Booking)<br/>stay@bridgeparkhotel.co.uk</span></a></li>
          <li><a href="mailto:bridgeparkhotel@gmail.com" target='_blank' rel="noopener noreferrer"><span className='contact-icons'><FontAwesomeIcon icon={faEnvelope} /></span><span className='contact-label'>(Other)<br/>admin@bridgeparkhotel.co.uk</span></a></li>
        </ul>
      </div>

      <div className="footer-quick-links">
        <div className='footer-quick-menu'>
          <p><b>Quick Links</b></p>
          <ul className="quick-links quick-links-mobile">
            <div className='check-line'>
            <li><a href="/rooms" target='_blank' rel="noopener noreferrer"><span className="quick-link-label">Rooms</span></a></li>
            <li><a href="https://direct-book.com/properties/bridgeparkdirect?" target='_blank' rel="noopener noreferrer"><span className="quick-link-label">Group Booking</span></a></li>
            <li><a href="/HomeRules" target='_blank' rel="noopener noreferrer"><span className="quick-link-label">Booking Policy</span></a></li>
            <li><a href="https://direct-book.com/properties/bridgepark/book?step=step1" target='_blank' rel="noopener noreferrer"><span className="quick-link-label">Guest Info&nbsp;&nbsp;&nbsp;</span></a></li>
            <li><a href="/faq" target='_blank' rel="noopener noreferrer"><span className="quick-link-label">FAQ&nbsp;</span></a></li>
            <li><a href="/website-support" target='_blank' rel="noopener noreferrer"><span className="quick-link-label">Website Support</span></a></li>
            <li><a href="https://direct-book.com/properties/bridgeparkdirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=GBP&checkInDate=2024-06-14&checkOutDate=2024-06-15&trackPage=no" target='_blank' rel="noopener noreferrer"><span className="quick-link-label">Siteminder page</span></a></li>
            <li><a href="/sitemaps" target='_blank' rel="noopener noreferrer"><span className="quick-link-label">Site Maps</span></a></li>
            <li><a href="/privacy" target='_blank' rel="noopener noreferrer"><span className="quick-link-label">Privacy & Policy</span></a></li>
            </div>
          </ul>
        </div>

        <div className='quick-social-media'>
          <p><b>Follow Us</b></p>
          <ul className="social-links">
            <li><a href="https://www.instagram.com/bridgeparkhotellondon/" target='_blank' rel="noopener noreferrer"><span><FontAwesomeIcon icon={faInstagram} /></span><span className="social-label">Instagram</span></a></li>
            <li><a href="https://www.facebook.com/bridgeparkhotellondon/" target='_blank' rel="noopener noreferrer"><span><FontAwesomeIcon icon={faFacebook} /></span><span className="social-label">Facebook</span></a></li>
            <li><a href="https://twitter.com/bridgeparkuk" target='_blank' rel="noopener noreferrer"><span><FontAwesomeIcon icon={faTwitter} /></span><span className="social-label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/company/bridgeparkhotellondon" target='_blank' rel="noopener noreferrer"><span><FontAwesomeIcon icon={faLinkedinIn} /></span><span className="social-label">LinkedIn</span></a></li>
            <li><a href="https://www.pinterest.com/bridgeparkhotellondon/" target='_blank' rel="noopener noreferrer"><span><FontAwesomeIcon icon={faPinterest} /></span><span className="social-label">Pinterest</span></a></li>
          </ul>
        </div>
      </div>
      
      <div className='footer-copyright'>
       <a /*</div>href='/copyright'*/><p>Copyright &copy; {currentYear} Bridge Park Hotel. All Rights Reserved</p></a>
      </div>
      
      {showTooltip && (
        <div className="tooltip" style={{ top: tooltipPosition.y - 180, left: tooltipPosition.x + 10 }}>
          Phone number copied to clipboard!
        </div>
      )}
    </footer>
  );
};

export default Footer;