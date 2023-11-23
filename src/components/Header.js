import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode as jwt_decode } from "jwt-decode";

import NavigationBar from '../components/shared/NavigationBar'
const Header = () => {
  const navigate = useNavigate();

  const isLogged = localStorage.getItem("authToken") ?? null;
  const user = isLogged && jwt_decode(isLogged);
  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <>
      <header className="header-main">
        <div className="top-header container-fluid no-padding">
          <div className="container-fluid">
            <ul className="col-md-4 col-sm-12 social no-bottom-margin pull-left">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-skype" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <div className="col-md-8 col-sm-12 pull-right top-menu">
              <ul className="no-bottom-margin">
                <li className="language-select">
                  {/* Language selection code */}
                  {/* You can add a separate component for language selection if needed */}
                </li>
                {isLogged ? (
                  <li>
                    <Link id="ctl00_lnklogin" onClick={() => logout()}>
                      Log Out
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link id="ctl00_lnklogin" to="/login-form">
                      Login
                    </Link>
                  </li>
                )}
                <li>
                  <Link to="/signup-form">Register</Link>
                </li>
                <li>
                  <Link to="/about-pink-berry">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="middle-header container-fluid no-padding">
          <div className="container-fluid">
            {/* Logo Block */}
            {/* You can create a separate Logo component if needed */}
            <div className="col-md-3 col-sm-4 col-xs-12 logo-block pull-left">
              <Link to="/">
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/pinkberry-logo.jpg"
                  }
                  alt="Logo"
                  className="img-responsive"
                />
              </Link>
            </div>
            {/* App icons and contact information */}
            <div className="col-md-9 col-sm-8 col-xs-12 pull-right app-ico">
              {/* Contact information and app icons */}
              <div class="col-md-4 col-sm-6 col-xs-6 location">
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/icon/mail_ico.png"
                  }
                  alt="mail"
                />
                <p>
                  Email us :<span>info@pinkberrycars.com</span>
                </p>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-6 phone">
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/icon/call_ico.png"
                  }
                  alt="phone"
                />
                <p>
                  Call us now :<span class="num-cal">(+44) 20 3327 6606</span>
                </p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12 mob_apps">
                <a
                  href="https://play.google.com/store/apps/details?id=com.eurosofttech.PinkBerryCars"
                  target="_blank"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "assets/images/icon/google_playstore.jpg"
                    }
                    alt="android"
                    class="img-responsive app_ico"
                  />
                </a>
                <a
                  href="https://itunes.apple.com/nz/app/pink-berry-cars/id961569654?mt=8"
                  target="_blank"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "assets/images/icon/apple_store.jpg"
                    }
                    alt="ios"
                    class="img-responsive app_ico"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <NavigationBar />
      </header>

      
    </>
  );
};

export default Header;
