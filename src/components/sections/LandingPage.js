import React from "react";
import AirportSelect from "../shared/AirportSelect";
import CruisePortSelect from "../shared/CruisePortSelect";
import TubeStationSelect from "../shared/TubeStationSelect";

const LandingPage = () => {
  return (
    <>
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

        <div id="ctl00_ContentPlaceHolder1_Booking_Update1">
          {/* Booking Form  */}
          <div className="booking-form">
            <div className="container full-width">
              <div className="col-md-6 full-width">
                <div className="stm_rent_car_form">
                  <div name="book-taxi" className="book-taxi-form">
                    <h3>Instant Quote & Booking</h3>
                    <a href="faq.aspx" className="faq-btn">
                      FAQ
                    </a>
                    <div className="row">
                      <div
                        className="form-group col-md-4 col-sm-4"
                        style={{ marginBottom: "4px", paddingBottom: "4px" }}
                      >
                        <label htmlFor="transport_type">
                          Pick-Up Location :
                        </label>
                        {/* paste 1 */}
                        <select
                          name="ctl00$ContentPlaceHolder1$Booking$ddlFrom"
                          id="ctl00_ContentPlaceHolder1_Booking_ddlFrom"
                          className="form-control clsddlFrom"
                        >
                          <option selected="selected" value="<--SELECT-->">
                            &lt;--SELECT--&gt;
                          </option>
                          <option value="138">Airport</option>
                          <option value="139">Postcode</option>
                          <option value="140">Address</option>
                          <option value="142">Sea port/Cruise port</option>
                          <option value="143">Stations</option>
                        </select>
                      </div>
                      <div
                        className="form-group col-md-8 col-sm-8"
                        style={{ marginBottom: "4px", paddingBottom: "4px" }}
                      >
                        <label
                          id="ctl00_ContentPlaceHolder1_Booking_lbllocationtype1"
                          htmlFor="transport_type2"
                          style={{ display: "none !important" }}
                        >
                          Select / Enter
                        </label>
                        <select
                          id="ctl00_ContentPlaceHolder1_Booking_ddlFromLoc"
                          className="form-control clsddlFromLoc"
                        >
                          <AirportSelect />
                        </select>
                        <select
                          id="ctl00_ContentPlaceHolder1_Booking_ddlFromSeaport"
                          className="form-control clsddlFromSeaport"
                        >
                          <CruisePortSelect />
                        </select>
                        {/* paste 4 */}
                        <select
                          name="ctl00$ContentPlaceHolder1$Booking$ddlFromStation"
                          id="ctl00_ContentPlaceHolder1_Booking_ddlFromStation"
                          className="form-control clsddlFromStation"
                          style={{ display: "none" }}
                        >
                          <TubeStationSelect />
                        </select>
                        <input
                          name="ctl00$ContentPlaceHolder1$Booking$txtFrom"
                          type="text"
                          id="ctl00_ContentPlaceHolder1_Booking_txtFrom"
                          className="form-control clstxtFrom"
                          style={{ display: "none" }}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <p className="gs1">
                          eg: Heathrow Airport or W1K 2BH or Paddington or
                          Southampton
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div id="TextBoxContainer">
                        {/* Textboxes will be added here */}
                        <div
                          id="ctl00_ContentPlaceHolder1_Booking_rptVias"
                          className="col-md-12 col-sm-12"
                          style={{ display: "none" }}
                        ></div>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="form-group col-md-4 col-sm-4"
                        style={{ marginBottom: "4px", paddingBottom: "4px" }}
                      >
                        <label htmlFor="transport_type3">
                          Drop-Off Location :
                        </label>
                        {/* paste 5 */}
                        <select
                          name="ctl00$ContentPlaceHolder1$Booking$ddlTo"
                          id="ctl00_ContentPlaceHolder1_Booking_ddlTo"
                          className="form-control clsddlTo"
                        >
                          <option selected="selected" value="<--SELECT-->">
                            &lt;--SELECT--&gt;
                          </option>
                          <option value="138">Airport</option>
                          <option value="139">Postcode</option>
                          <option value="140">Address</option>
                          <option value="142">Sea port/Cruise port</option>
                          <option value="143">Stations</option>
                        </select>
                      </div>
                      <div
                        className="form-group col-md-8 col-sm-8"
                        style={{ marginBottom: "4px", paddingBottom: "4px" }}
                      >
                        <label
                          id="ctl00_ContentPlaceHolder1_Booking_lbllocationtype2"
                          htmlFor="transport_type"
                          style={{ display: "none !important" }}
                        >
                          Select / Enter
                        </label>
                        {/* paste 6 */}
                        <select
                          name="ctl00$ContentPlaceHolder1$Booking$ddlToLoc"
                          id="ctl00_ContentPlaceHolder1_Booking_ddlToLoc"
                          className="form-control clsddlToLoc"
                          style={{ display: "none" }}
                        >
                          <AirportSelect />
                        </select>
                        {/* paste 7 */}
                        <select
                          name="ctl00$ContentPlaceHolder1$Booking$ddlToSeaport"
                          id="ctl00_ContentPlaceHolder1_Booking_ddlToSeaport"
                          className="form-control clsddlToSeaport"
                          style={{ display: "none" }}
                        >
                          <CruisePortSelect />
                        </select>
                        {/* paste 8 */}
                        <select
                          name="ctl00$ContentPlaceHolder1$Booking$ddlToStation"
                          id="ctl00_ContentPlaceHolder1_Booking_ddlToStation"
                          className="form-control clsddlToStation"
                          style={{ display: "none" }}
                        >
                          <TubeStationSelect />
                        </select>
                        <input
                          name="ctl00$ContentPlaceHolder1$Booking$txtTo"
                          type="text"
                          id="ctl00_ContentPlaceHolder1_Booking_txtTo"
                          className="form-control clstxtTo"
                          style={{ display: "none" }}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <p className="gs1">
                          eg: Heathrow Airport or W1K 2BH or Paddington or
                          Southampton
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-12 frmcheckbox">
                        <input
                          id="ctl00_ContentPlaceHolder1_Booking_rbtnoneway"
                          type="checkbox"
                          name="ctl00$ContentPlaceHolder1$Booking$rbtnoneway"
                        />
                        <label>One Way</label>
                        <input
                          id="ctl00_ContentPlaceHolder1_Booking_rbtntwoway"
                          type="checkbox"
                          name="ctl00$ContentPlaceHolder1$Booking$rbtntwoway"
                        />
                        <label>Return Way</label>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        id="ctl00_ContentPlaceHolder1_Booking_pnloneway"
                        style={{ display: "none" }}
                      >
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <label htmlFor="datepicker-l">Pickup Date :</label>
                          <div id="datepicker-outer-l" className="input-group">
                            <input
                              name="ctl00$ContentPlaceHolder1$Booking$txtPickupDate"
                              type="text"
                              id="ctl00_ContentPlaceHolder1_Booking_txtPickupDate"
                              className="form-control date_picker hasDatepicker"
                              placeholder="DD/MM/YYYY"
                              readOnly="readonly"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        id="ctl00_ContentPlaceHolder1_Booking_pnlreturn"
                        style={{ display: "none" }}
                      >
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <label htmlFor="datepicker-r">Return Date :</label>
                          <div id="datepicker-outer-r" className="input-group">
                            <input
                              name="ctl00$ContentPlaceHolder1$Booking$txtReturnDate"
                              type="text"
                              id="ctl00_ContentPlaceHolder1_Booking_txtReturnDate"
                              className="form-control date_picker hasDatepicker"
                              placeholder="DD/MM/YYYY"
                              readOnly="readonly"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div id="ctl00_ContentPlaceHolder1_Booking_dvAddViaButton">
                          <input
                            name="ctl00$ContentPlaceHolder1$Booking$btnAddVia"
                            type="submit"
                            id="ctl00_ContentPlaceHolder1_Booking_btnAddVia"
                            value="Add Via"
                            className="viabtn"
                            style={{ display: "none" }}
                          />
                        </div>
                        <input
                          type="submit"
                          name="ctl00$ContentPlaceHolder1$Booking$btnSubmit"
                          value="Get Quote"
                          onClick={() => {
                            // return Search_ValidateControls();
                          }}
                          id="ctl00_ContentPlaceHolder1_Booking_btnSubmit"
                          className="btn"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Booking Form  */}
        </div>
      </div>
      {/* Photo Slider End */}
    </>
  );
};

export default LandingPage;
