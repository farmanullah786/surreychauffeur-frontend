import React from "react";
import { Link } from "react-router-dom";
import { jwtDecode as jwt_decode } from "jwt-decode";
import MemberNavbar from "./MemberNavbar"


const NavigationBar = () => {
  const isLogged = localStorage.getItem("authToken") ?? null;
  const user = isLogged && jwt_decode(isLogged);
  return (
    <nav className="navbar ow-navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="navbar-brand logo-block">
            <Link to="/">
              <img
                src={
                  process.env.PUBLIC_URL + "assets/images/pinkberry-logo.jpg"
                }
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
          {/* <Scrollspy items={['top', 'airport', 'section3']} currentClassName="is-current" offset={70} className="nav navbar-nav"> */}
            <li>
              <Link to="/">
                Home<span className="nav-sep">|</span>
              </Link>
            </li>
            {/* Add other navigation items as needed */}
            <li>
              <Link to="/airport-transfer">
                Airport Transfers<span className="nav-sep">|</span>
              </Link>
            </li>
            <li>
              <Link to="/cruise-port-transfort">
                Cruise Port Transfers<span className="nav-sep">|</span>
              </Link>
            </li>
            <li>
              <Link to="/station-transfort">
                Station Transfers<span className="nav-sep">|</span>
              </Link>
            </li>
            <li>
              <Link to="/corporate-transfer">
                Corporate Transfers<span className="nav-sep">|</span>
              </Link>
            </li>
            <li>
              <Link to="/group-transfer">
                Group Transfers<span className="nav-sep">|</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/sightseeing-tour">
                Sightseeing Tour<span className="nav-sep">|</span>
              </Link>
            </li> */}
            <li>
              <Link to="/our-vehicle">Our vehicles</Link>
            </li>
            {/* </Scrollspy> */}
            
            {/* Uncomment and modify the following line for a "Contact Us" link */}
            {/* <li><a to="contact-us.html">Contact Us</a></li> */}
          </ul>
        </div>
      </div>
      {isLogged && (
       <MemberNavbar/>
      )}
    </nav>
  );
};

export default NavigationBar;
