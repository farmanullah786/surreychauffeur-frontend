import React, { useState } from "react";
import Hours from "../shared/Hours";
import Minutes from "../shared/Minutes";
import CountrySelect from "../shared/CountrySelect";
import PassengerWithYes from "./PassengerWithYes";
import PassengerWithNo from "./PassengerWithNo";
import ReturnPath from "./ReturnPath";

const PassengerDetails = (props) => {
  const isLogged = localStorage.getItem("authToken") ?? null;
  const [isPassenger, setIsPassenger] = useState(
    props?.is_passenger ? props?.is_passenger : "yes"
  );
  return (
    <div id="book-right">
      <div class="book-h3">Passenger Details</div>
      <div class="book-cver">
        <div id="ctl00_ContentPlaceHolder1_pnlDisplay2">
          <div className="book-list">
            <div className="book-list2">
              <span className="red">*</span>Flight Landing Date
            </div>
            <div className="book-list3">
              <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                  <tr>
                    <input
                      type="text"
                      value={props?.pickUpDate}
                      readOnly="readonly"
                      id="ctl00_ContentPlaceHolder1_txtflightLandDate"
                      className="form-control  pick-up-location b-field"
                    />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="book-list">
            <div className="book-list2">
              <span className="red">*</span>Flight Landing Time
            </div>
            <div className="book-list3" style={{ display: "flex" }}>
              <div className="hr" style={{ flex: 1 }}>
                Hr:
              </div>
              <div className="hr2" style={{ flex: 1 }}>
                <select
                  id="ctl00_ContentPlaceHolder1_ddlHour"
                  className="form-control  pick-up-location b-field2"
                  {...props?.register("hours", { required: true })}
                >
                  <Hours />{" "}
                </select>
                <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
                <span
                  id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
                  style={{
                    color: "Red",
                    display: props?.errors?.hours ? "block" : "none",
                  }}
                >
                  *
                </span>
              </div>
              <div className="min" style={{ flex: 1 }}>
                Min:
              </div>
              <div className="min2" style={{ flex: 1 }}>
                <select
                  id="ctl00_ContentPlaceHolder1_DDlminut"
                  className="form-control  pick-up-location b-field2"
                  {...props?.register("minutes", { required: true })}
                >
                  <option selected="selected" value="-1"></option>
                  <Minutes />
                </select>
                <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
                <span
                  id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
                  style={{
                    color: "Red",
                    display: props?.errors?.hours ? "block" : "none",
                  }}
                >
                  *
                </span>
              </div>
            </div>
          </div>

          <div className="book-list">
            <div className="book-list2">
              After how many minutes you would like to meet the driver from the
              landing time?
            </div>
            <div className="book-list3 booking-form-table">
              <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                  <tr valign="middle">
                    <td>
                      <select
                        id="ctl00_ContentPlaceHolder1_ddlPickupTimein"
                        className="form-control  pick-up-location b-field2"
                        {...props?.register("waiting_time")}
                      >
                        <option selected value="00">
                          00
                        </option>
                        <option value="05">05</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="35">35</option>
                        <option value="40">40</option>
                        <option value="45">45</option>
                        <option value="50">50</option>
                        <option value="55">55</option>
                        <option value="60">60</option>
                        <option value="75">75</option>
                        <option value="90">90</option>
                        <option value="105">105</option>
                        <option value="120">120</option>
                        <option value="140">140</option>
                        <option value="180">180</option>
                      </select>
                    </td>
                    <td>
                      &nbsp;&nbsp; minutes after the flight has landed. You will
                      get 45 minutes of free waiting from this time.&nbsp;&nbsp;
                      <a id="trigger">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "assets/images/questionsymbol.png"
                          }
                          alt="question mark"
                        />
                      </a>
                      {/* HIDDEN / POP-UP DIV */}
                      <div
                        id="pop-up"
                        style={{ display: "none", borderCollapse: "collapse" }}
                      >
                        <p style={{ fontWeight: "bold" }}>
                          Please allow enough or extra time to clear immigration
                          and baggage reclaim.
                        </p>
                        <p style={{ fontWeight: "bold" }}>
                          Your requested pickup time will be adjusted
                          accordingly if your flight is delayed or early.
                        </p>
                        <p style={{ fontWeight: "bold", color: "blue" }}>
                          Average clearing timing:
                        </p>
                        <table id="tbl" style={{ width: "70%" }} border="1">
                          <tbody>
                            <tr>
                              <td>UK &amp; EU Citizen: 30 to 60 Minutes</td>
                            </tr>
                            <tr>
                              <td>
                                Business, First Class &amp; Hand luggage only:
                                15 to 40 minutes
                              </td>
                            </tr>
                            <tr>
                              <td>Other nationalities: 40 to 80 minutes</td>
                            </tr>
                            <tr>
                              <td>
                                <span style={{ fontWeight: "bold" }}>Non</span>{" "}
                                EU &amp; Foreign students: 40 to 90 minutes
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p style={{ fontWeight: "bold" }}>
                          *This timing can vary depending on how busy the
                          airport is *
                        </p>
                        <p style={{ fontWeight: "bold" }}>
                          In case if you come out early, give us a call, and if
                          we have a driver available earlier, we will send the
                          driver inside early.
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="book-list">
            <span style={{ color: "green" }}>
              ATTENTION: Must select the time in a 24-hour clock format (Example
              18.00)
            </span>
          </div>
        </div>
        {}
        <ReturnPath register={props?.register} errors={props?.errors}  dropUpDate={props?.dropUpDate}/>
        <div id="ctl00_ContentPlaceHolder1_Update3">
          <div id="ctl00_ContentPlaceHolder1_pnlcheckpassenger">
            <div className="book-list">
              <div className="book-list2">Are you the Passenger?</div>
              <div className="book-list2">
                &nbsp;&nbsp;&nbsp;
                <input
                  id="ctl00_ContentPlaceHolder1_rdoyespassenger"
                  type="radio"
                  value="yes"
                  {...props?.register("is_passenger")}
                  checked={isPassenger === "yes" ? true : false}
                  onClick={() => setIsPassenger("yes")}
                />
                &nbsp;Yes &nbsp;&nbsp;&nbsp;
                <input
                  id="ctl00_ContentPlaceHolder1_rdonopassenger"
                  type="radio"
                  value="no"
                  checked={isPassenger === "no" ? true : false}
                  onClick={() => setIsPassenger("no")}
                  {...props?.register("is_passenger")}
                />
                &nbsp;No
              </div>
            </div>
          </div>
          {isPassenger == "yes" && (
            <PassengerWithYes
              register={props?.register}
              errors={props?.errors}
              getValues={props?.getValues}
            />
          )}

          {isPassenger == "no" && (
            <PassengerWithNo
              register={props?.register}
              errors={props?.errors}
              getValues={props?.getValues}
            />
          )}
        </div>

        <div className="book-list">
          <div className="book-list4">
            <table
              cellPadding="0"
              cellSpacing="0"
              border="0"
              width="100%"
              className="booking-form-table"
            >
              <tbody>
                <tr
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <td
                    style={{
                      width: "35%",
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Passengers:&nbsp;
                    <select
                      id="ctl00_ContentPlaceHolder1_ddlPassenger"
                      className="form-control pick-up-location b-field2"
                      {...props?.register("passenger_capacity")}
                    >
                      <option value=""></option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                  <td
                    style={{
                      width: "30%",
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Luggages:&nbsp;
                    <select
                      id="ctl00_ContentPlaceHolder1_ddlLuggages"
                      className="form-control pick-up-location b-field2"
                      {...props?.register("check_in_luggage_capacity")}
                    >
                      <option value=""></option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                  <td
                    style={{
                      width: "35%",
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Hand Lugg:&nbsp;
                    <select
                      id="ctl00_ContentPlaceHolder1_ddlHand"
                      className="form-control pick-up-location b-field2"
                      {...props?.register("hand_luggage_capacity")}
                    >
                      <option value=""></option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="book-inner-h1">
          Extra Seat - By law, baby seats are not required in taxis
        </div>
        <div className="book-list">
          <div className="book-list2">First Child Seat(Free):</div>
          <div className="book-list3">
            <select
              id="ctl00_ContentPlaceHolder1_ddlbabyseat1"
              className="form-control  pick-up-location b-field3"
              {...props?.register("first_child_seat_required")}
            >
              <option value="No child seat required" selected>
                No child seat required
              </option>
              <option value="Rear-facing infant seat (suitable for babies)">
                Rear-facing infant seat (suitable for babies)
              </option>
              <option value="Forward-facing upright child seat (for toddlers and smaller children)">
                Forward-facing upright child seat (for toddlers and smaller
                children)
              </option>
              <option value="Child booster seat">Child booster seat</option>
            </select>
          </div>
        </div>
        <div className="book-list">
          <div className="book-list2">Second Child Seat(Free):</div>
          <div className="book-list3">
            <select
              id="ctl00_ContentPlaceHolder1_ddlbabyseat2"
              className="form-control  pick-up-location b-field3"
              {...props?.register("second_child_seat_required")}
            >
              <option selected value="No child seat required">
                No child seat required
              </option>
              <option value="Rear-facing infant seat (suitable for babies)">
                Rear-facing infant seat (suitable for babies)
              </option>
              <option value="Forward-facing upright child seat (for toddlers and smaller children)">
                Forward-facing upright child seat (for toddlers and smaller
                children)
              </option>
              <option value="Child booster seat">Child booster seat</option>
            </select>
          </div>
        </div>
        <div className="book-list">
          <div className="book-list2">Special Requirement:</div>
          <div className="book-list3">
            <textarea
              rows="3"
              cols="45"
              id="ctl00_ContentPlaceHolder1_txtSpecial"
              className="b-field"
              maxLength="300"
              {...props?.register("special_requirements")}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
