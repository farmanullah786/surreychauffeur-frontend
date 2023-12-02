import React, { useEffect, useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import CarDetails from "../components/shared/CarDetail";
import * as actionCreators from "../store/actions/index";
import { connect } from "react-redux";
import LoadingOverlay from "../components/shared/LoadingOverlay";
import MapWithCurrentLocation from "./MapWithCurrentLocation";

const Result = (props) => {
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const uuid = params.get("uuid") ?? null;

  // const mapUrl =
  //   "https://www.google.com/maps/embed/v1/place?q=HEATHROW+TERMINAL+1+TW6+1JS";

  useEffect(() => {
    return () => {
      props?.getRequestToBookingVehicles(`vehicles/?uuid=${uuid}`);
    };
  }, []);

  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <section className="container clearfix">
        <div className="content3">
          <div className="row">
            <div className="heading">Quotes and Vehicles</div>
            <div className="text">
              <div className="pricebox1">
                <span className="picesbox1">
                  Prices are based on per vehicle not per passenger(s)
                  <br />
                  Prices are quoted with all the discounts
                </span>
                <div className="tripDetails">
                  <ul className="clearfix">
                    <div id="ctl00_ContentPlaceHolder1_pnldistance">
                      <li className="distance distfix">
                        <i></i>
                        <div className="tdVals">
                          <h6>DISTANCE - MILES</h6>
                          <p style={{ textTransform: "none" }}>
                            <span id="ctl00_ContentPlaceHolder1_lblMiles">
                              82.07
                            </span>
                          </p>
                        </div>
                      </li>
                    </div>
                    <div id="ctl00_ContentPlaceHolder1_pnltime">
                      <li className="time">
                        <i></i>
                        <div className="tdVals timebox">
                          <h6>Estimated Time</h6>
                          <p style={{ textTransform: "none" }}>
                            <span id="ctl00_ContentPlaceHolder1_lblTime">
                              1 H 50 MIN To 2 H 45 MIN
                            </span>
                            Depending on traffic
                          </p>
                        </div>
                      </li>
                    </div>
                    <div id="ctl00_ContentPlaceHolder1_pnlcovid">
                      <div className="dvcovid">
                        <img
                          src={
                            process.env.PUBLIC_URL + "assets/images/covid.png"
                          }
                          alt="Covid"
                        />
                        <div className="dvcovid-txt">
                          <h2>COVID 19 - BOOK WITH CONFIDENCE</h2>
                          <p>
                            Flexible date changes and cancellations
                            <br />
                            <br />
                            Read our T&amp;C
                          </p>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="pricebox2">
                <div id="iframeContainer">
                  <iframe
                    // src={mapUrl}
                    src={""}
                    id="ctl00_ContentPlaceHolder1_ifrm"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    style={{ marginBottom: "-20px" }}
                  >
                    <MapWithCurrentLocation />
                  </iframe>
                </div>
                <br />
                <br />
                <a
                  href=""
                  id="ctl00_ContentPlaceHolder1_lnkLargeMap"
                  className="pinkButton clsLargeMap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enlarge
                </a>
                <button
                  type="button"
                  id="myHeader1"
                  className="warningbtn"
                  style={{
                    background: "#666",
                    cursor: "pointer",
                    float: "right",
                  }}
                >
                  Allow extra time for your journey
                </button>
                <div
                  className="toastbox"
                  style={{ display: "none", float: "right" }}
                >
                  <button
                    type="button"
                    className="toast-close-button"
                    role="button"
                  >
                    ï¿½
                  </button>
                  <b>Disclaimer :</b>
                  <br />
                  Driving time and distance shown here is only for guidance
                  purpose, you may allow additional driving time for your
                  journey in case of road works, diversions, road traffic,
                  adverse weather conditions, additional pickups/drop off.
                  accidents,
                </div>
                <br />
                <br />
              </div>
            </div>

            <div className="terminal-box">
              <table cellPadding="5" cellSpacing="5" border="0" width="100%">
                <tbody>
                  <tr
                    style={{
                      background: "#000",
                      color: "White",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    <td
                      style={{
                        width: "49%",
                        fontWeight: "bold",
                        fontSize: "larger",
                      }}
                      align="center"
                    >
                      From
                    </td>
                    <td
                      style={{
                        width: "49%",
                        fontWeight: "bold",
                        fontSize: "larger",
                      }}
                      align="center"
                    >
                      To
                    </td>
                  </tr>

                  <tr
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      color: "Green",
                      fontWeight: "bold",
                    }}
                  >
                    <td
                      style={{
                        borderRightWidth: "1px",
                        borderRightStyle: "solid",
                        borderRightColor: "#CCC",
                        fontSize: "larger",
                        border: "1px solid #3DA51F",
                        backgroundColor: "#EBF9E0",
                        fontFamily: "arial",
                        fontWeight: 700,
                        color: "#41A724",
                      }}
                      align="center"
                    >
                      {props?.booking?.label_pick_up_location}
                    </td>
                    <td
                      style={{
                        fontSize: "larger",
                        border: "1px solid #3DA51F",
                        backgroundColor: "#EBF9E0",
                        fontFamily: "arial",
                        fontWeight: 700,
                        color: "#41A724",
                      }}
                      align="center"
                    >
                      {props?.booking?.label_drop_up_location}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              {props?.location_vehicles?.map((location_vehicle, index) => (
                <CarDetails
                  key={index}
                  location_vehicle={location_vehicle}
                  location_details={props?.location_details}
                  uuid={uuid}
                  setLoadingOverlay={setLoadingOverlay}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    location_details:
      state.locationDetailsVehicles.location_details_vehicles.location_details,
    location_vehicles:
      state.locationDetailsVehicles.location_details_vehicles.location_vehicles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRequestToBookingVehicles: (url) =>
      dispatch(
        actionCreators.getRequestToLocationDetailsVechiclesDispatch(url)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
