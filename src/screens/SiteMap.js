import React from "react";
import AppLayout from "../components/applayout/AppLayout";
import { Link } from "react-router-dom";

const SiteMap = () => {
  return (
    <AppLayout>
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12 site-map">
          <div className="head">
            <h2>Site Map</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
            <p></p>
          </div>
          <div className="space"></div>

          <div className="col-md-4">
            <p className="smap">Home Page</p>
            <ul>
              <li>
                <Link to="/">Top Section with Slider</Link>
              </li>
              <li>
                <Link to="/about-pink-berry">About Us Section</Link>
              </li>
              <li>
                <Link to="/airport-transfer">Airport Transfer</Link>
              </li>
              <li>
                <Link to="/cruis-port-transfort">Cruise Port Transfer</Link>
              </li>
              <li>
                <Link to="/station-transfort">Station Transfer</Link>
              </li>
              <li>
                <Link to="/feedbacks">Feedback Section</Link>
              </li>
              <li>
                <Link to="#">Footer</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <p className="smap">Separate Pages</p>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/login-form">Login & Register Page</Link>
              </li>
              <li>
                <Link to="/about-pink-berry">About Us Page</Link>
              </li>
              <li>
                <Link to="/airport-transfer">Airport Transfer Page</Link>
              </li>
              <li>
                <Link to="/cruis-port-transfort">Cruise Port Transfer Page</Link>
              </li>
              <li>
                <Link to="/station-transfort">Station Transfer Page</Link>
              </li>
              <li>
                <Link to="/corporate-transfer">Corporate Transfer Page</Link>
              </li>
              <li>
                <Link to="/group-transfer">Group Transfer Page</Link>
              </li>
              {/* <li>
                <Link to="/sightseeing-tour">Sightseeing Tour Page</Link>
              </li> */}
              <li>
                <Link to="/our-vehicle">Our Vehicle Page</Link>
              </li>
              <li>
                <Link to="/drive-with-us">Drive With Us Page</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <p className="smap">Common Pages</p>
            <ul>
              <li>
                <Link to="/terms-condition">Terms &amp; Condition Page</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Page</Link>
              </li>
              <li>
                <Link to="/faq">FAQ Page</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SiteMap;
