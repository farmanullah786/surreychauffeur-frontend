import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { Link, useNavigate } from "react-router-dom";
import LoadingOverlay from "../components/shared/LoadingOverlay";

const BookingTypeSelection = () => {
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const navigate = useNavigate();
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const uuid = params.get("uuid") ?? null;
  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}

      <div className="container">
        <div className="row">
          <div class="col-md-3 col-sm-12 col-xs-12"></div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div id="ctl00_ContentPlaceHolder1_UpdatePanelControl">
              <div className="contentWrapper">
                <div className="tblbooking">
                  <div className="tblbookingbtn">
                    <Link
                      id="btn1"
                      to={``}
                      onClick={() => {
                        setLoadingOverlay(true);
                        setTimeout(() => {
                          navigate(`/booking-form?uuid=${uuid}`);
                        }, 2000);
                      }}
                    >
                      Not a member – BOOK NOW as a non member
                    </Link>
                  </div>
                  <div className="tblbookingbtn">
                    <Link
                      id="btn1"
                      to={``}
                      onClick={() => {
                        setLoadingOverlay(true);
                        setTimeout(() => {
                          navigate(`/login-form?uuid=${uuid}`);
                        }, 2000);
                      }}
                    >
                      I am a member – Login & BOOK NOW
                    </Link>
                  </div>
                  <div id="dvContent" className="tblbookingbtn">
                    <Link
                      id="btn1"
                      to={``}
                      onClick={() => {
                        setLoadingOverlay(true);
                        setTimeout(() => {
                          navigate(`/signup-form?uuid=${uuid}`);
                        }, 2000);
                      }}
                    >
                      Want to become a member – Sign up & BOOK NOW
                    </Link>
                    <br />
                    <br />
                    <span id="spanidealmessage" style={{ fontStyle: "italic" }}>
                      Ideal for repeating customers
                    </span>
                  </div>
                  <br />
                  <div id="pnldescription" className="tblbooking2">
                    <div style={{ marginLeft: "50px" }}>
                      <span style={{ fontWeight: "bold" }}>
                        <b>Why become a member?</b>
                        <br />
                        <span style={{ fontStyle: "italic" }}>
                          Ideal for repeating customers
                        </span>
                      </span>
                      <br />
                      <br />
                      <ul style={{ listStyle: "circle" }}>
                        <li>Speedy Booking</li>
                        <li>Save and re-use credit card</li>
                        <li>Guaranteed availability</li>
                        <li>Manage Bookings</li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  <a
                    id="lnkReturn"
                    className="popcvrbtn"
                    href="javascript:__doPostBack('lnkReturn','')"
                  >
                    Back
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12"></div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BookingTypeSelection;
