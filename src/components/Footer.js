import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="col-md-3 col-sm-3">
          <div className="footer-about">
            <h3>About Us</h3>
            <ul>
              <li>
                <p>We are specialised in providing private hire transfers (car service with the driver), services for to and from all London Airports, UK Cruise Ports, Train/Tube Stations, to and from anywhere in the UK.</p>
              </li>
              <li>
                <img src={process.env.PUBLIC_URL+"assets/images/payment_cards.png"} alt="payments" className="img-responsive" />
              </li>
              <li>
                <img src={process.env.PUBLIC_URL+"assets/images/securesagepay.png"} alt="payments" className="img-responsive" style={{ marginTop: '10px' }} />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-3">
          <div className="footer-explore">
            <h3>Explore Links</h3>
            <ul>
              <li><Link to="/terms-condition"><i className="fa fa-caret-right" aria-hidden="true"></i>Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy-policy"><i className="fa fa-caret-right" aria-hidden="true"></i>Privacy Policy</Link></li>
              <li><Link to="/site-map"><i className="fa fa-caret-right" aria-hidden="true"></i>Site Map</Link></li>
              <li><Link to="/faq"><i className="fa fa-caret-right" aria-hidden="true"></i>FAQ</Link></li>
              <li><Link to="/feedback"><i className="fa fa-caret-right" aria-hidden="true"></i>Feedback</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-3">
          <div className="footer-quick">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</Link></li>
              <li><Link to="/airport-transfer"><i className="fa fa-caret-right" aria-hidden="true"></i>Airport Transfer</Link></li>
              <li><Link to="/cruis-port-transfort"><i className="fa fa-caret-right" aria-hidden="true"></i>Cruise Port Transfer</Link></li>
              <li><Link to="/station-transfort"><i className="fa fa-caret-right" aria-hidden="true"></i>Station Transfer</Link></li>
              <li><Link to="/corporate-transfer"><i className="fa fa-caret-right" aria-hidden="true"></i>Corporate Transfer</Link></li>
              <li><Link to="/sightseeing-tour"><i className="fa fa-caret-right" aria-hidden="true"></i>Sightseeing Tour</Link></li>
              <li><Link to="/our-vehicle"><i className="fa fa-caret-right" aria-hidden="true"></i>Our Vehicles</Link></li>
              <li><Link to="/contact-us"><i className="fa fa-caret-right" aria-hidden="true"></i>Contact Us</Link></li>
              <li><Link to="/drive-with-us"><i className="fa fa-caret-right" aria-hidden="true"></i>Drive With Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-3">
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li className="mail"><span className="mail-add"><i className="fa fa-envelope" aria-hidden="true"></i>Email :</span><a href="mailto:info@pinkberrycars.com"> info@pinkberrycars.com</a></li>
              <li className="hotline"><span className="phone-no"><i className="fa fa-mobile" aria-hidden="true"></i>Hotline :</span> (+44) 20 3327 6606</li>
            </ul>
            <ul className="footer-social">
              <li className="social-ico"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li className="social-ico"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li className="social-ico"><a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
              <li className="social-ico"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
            <div className="public_carriage_office_logo">
              <img src={process.env.PUBLIC_URL+"assets/images/public_carriage_office_logo.jpg"} alt="public carriage office" className="img-responsive" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
