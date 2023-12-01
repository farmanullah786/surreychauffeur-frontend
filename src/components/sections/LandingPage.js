import React, { useState } from "react";
import LocationDetails from "../forms/LocationDetails";
import LoadingOverlay from "../shared/LoadingOverlay";

const LandingPage = () => {
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  return (
    <>
    {loadingOverlay && <LoadingOverlay />}
      {/* Photo Slider2 */}
      <div className="container-fluid photos-slider2 no-padding">
        <div
          id="photos-slider2"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img
                src={process.env.PUBLIC_URL + "assets/images/banner-img.jpg"}
                alt="side-1"
              />
              <div className="container photos-slider2-content">
                <div className="col-md-6 col-sm-6 col-xs-6 col-md-offset-6 col-sm-offset-6 col-xs-offset-6">
                  <div className="slider-content">
                    <div className="slider-content-list">
                      <h2>Airport Transfers</h2>
                      <span className="pulse-2">
                        <img
                          src={
                            process.env.PUBLIC_URL + "assets/images/AT-icon.gif"
                          }
                          className="slider-icon-sprite-set"
                          alt="AT-icon"
                        />
                      </span>

                      <h2>Cruise Port Transfers</h2>
                      <span className="pulse-2">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "assets/images/CRT-icon.gif"
                          }
                          className="slider-icon-sprite-set"
                          alt="CRT-icon"
                        />
                      </span>

                      <h2>Corporate Transfers</h2>
                      <span className="pulse-2">
                        <img
                          src={
                            process.env.PUBLIC_URL + "assets/images/CT-icon.gif"
                          }
                          className="slider-icon-sprite-set"
                          alt="CT-icon"
                        />
                      </span>

                      <h2>Group Transfers</h2>
                      <span className="pulse-2">
                        <img
                          src={
                            process.env.PUBLIC_URL + "assets/images/GT-icon.gif"
                          }
                          className="slider-icon-sprite-set"
                          alt="GT-icon"
                        />
                      </span>

                      <h2>Long Distance Transfers</h2>
                      <span className="pulse-2">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "assets/images/LDT-icon.gif"
                          }
                          className="slider-icon-sprite-set"
                          alt="LDT-icon"
                        />
                      </span>

                      <h2>Sightseeing Tours</h2>
                      <span className="pulse-2">
                        <img
                          src={process.env.PUBLIC_URL + "assets/images/man.gif"}
                          className="slider-icon-sprite-set"
                          alt="SST-icon"
                        />
                      </span>
                    </div>
                    <p className="highlight" style={{ padding: "10px" }}>
                      <span>£5 Off</span> On All Transfers
                    </p>
                  </div>
                </div>
              </div>

              <div className="container photos-slider2-content-mobile">
                <div className="col-xs-4">
                  <span className="pulse">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/AT-icon.gif"}
                      className="slider-icon-sprite-set2"
                      alt="AT-icon"
                    />
                  </span>
                  <h2>Airport Transfers</h2>
                </div>
                <div className="col-xs-4">
                  <span className="pulse">
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/CRT-icon.gif"
                      }
                      className="slider-icon-sprite-set2"
                      alt="CRT-icon"
                    />
                  </span>
                  <h2>Cruise Port Transfers</h2>
                </div>
                <div className="col-xs-4">
                  <span className="pulse">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/CT-icon.gif"}
                      className="slider-icon-sprite-set2"
                      alt="CT-icon"
                    />
                  </span>
                  <h2>Corparate Transfers</h2>
                </div>
                <div className="col-xs-4">
                  <span className="pulse">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/GT-icon.gif"}
                      className="slider-icon-sprite-set2"
                      alt="GT-icon"
                    />
                  </span>
                  <h2>Group Transfers</h2>
                </div>
                <div className="col-xs-4">
                  <span className="pulse">
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/LDT-icon.gif"
                      }
                      className="slider-icon-sprite-set2"
                      alt="LDT-icon"
                    />
                  </span>
                  <h2>Long Distance Transfers</h2>
                </div>
                <div className="col-xs-4">
                  <span className="pulse">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/man.gif"}
                      className="slider-icon-sprite-set2"
                      alt="SST-icon"
                    />
                  </span>
                  <h2>Sightseeing Tours</h2>
                </div>
                <div className="col-xs-12">
                  <p className="highlight">
                    <span>£5 Off</span> On All Transfers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LocationDetails setLoadingOverlay={setLoadingOverlay}/>
      </div>
      {/* Photo Slider End */}
    </>
  );
};

export default LandingPage;
