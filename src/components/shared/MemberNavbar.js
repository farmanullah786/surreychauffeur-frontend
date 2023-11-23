import React from "react";
import { Link } from "react-router-dom";
import { jwtDecode as jwt_decode } from "jwt-decode";

const MemberNavbar = () => {

  const isLogged = localStorage.getItem("authToken") ?? null;
  const user = isLogged && jwt_decode(isLogged);
  return (
    <div id="ctl00_pnlMemberLogin">
    <div id="member-nav" style={{ background: "#3b0050", border: "none" }}>
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle toggle-fix"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <span className="membername">
            <span id="ctl00_lblHelloMemberName">{user?.full_name}</span>
          </span>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav topnav topnav2" id="navigation1">
            <li>
              <a href="RetailBookingList.aspx" className="bdrnone">
                Booking List
              </a>
            </li>
            <li>
              <Link
                to="/user-profile"
                id="ctl00_vieweditprofile"
                className="bdrnone"
              >
                View & Edit Profile
              </Link>
            </li>
            <li>
              <Link
                to="/change-password"
                id="ctl00_changepassword"
                className="bdrnone"
              >
                Change Password
              </Link>
            </li>
            <li>
              <Link
                to="/billing-form"
                id="ctl00_MemberCardData"
                className="bdrnone"
              >
                Add new card
              </Link>
            </li>
            <li>
              <a
                href="Reuseitsagecard.aspx"
                id="ctl00_Reuseitsagecard"
                className="bdrnone"
              >
                Saved Card Details
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default MemberNavbar;
