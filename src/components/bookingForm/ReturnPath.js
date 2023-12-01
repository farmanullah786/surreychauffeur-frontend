import React from "react";
import Hours from "../shared/Hours";
import Minutes from "../shared/Minutes";

const ReturnPath = (props) => {
  return (
    <div id="ctl00_ContentPlaceHolder1_pnlReturn">
      <div className="book-inner-h1">Return Journey Details</div>
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
                  value={props?.dropUpDate}
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
              {...props?.register("return_hours", { required: true })}
            >
              <Hours />{" "}
            </select>
            <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
            <span
              id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
              style={{
                color: "Red",
                display: props?.errors?.return_hours ? "block" : "none",
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
              {...props?.register("return_minutes", { required: true })}
            >
              <option selected="selected" value="-1"></option>
              <Minutes />
            </select>
            <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
            <span
              id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
              style={{
                color: "Red",
                display: props?.errors?.return_minutes ? "block" : "none",
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
                    {...props?.register("return_waiting_time")}
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
                  &nbsp;&nbsp; minutes after the flight has landed. You will get
                  45 minutes of free waiting from this time.&nbsp;&nbsp;
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
                      Please allow enough or extra time to clear immigration and
                      baggage reclaim.
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      Your requested pickup time will be adjusted accordingly if
                      your flight is delayed or early.
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
                            Business, First Class &amp; Hand luggage only: 15 to
                            40 minutes
                          </td>
                        </tr>
                        <tr>
                          <td>Other nationalities: 40 to 80 minutes</td>
                        </tr>
                        <tr>
                          <td>
                            <span style={{ fontWeight: "bold" }}>Non</span> EU
                            &amp; Foreign students: 40 to 90 minutes
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p style={{ fontWeight: "bold" }}>
                      *This timing can vary depending on how busy the airport is
                      *
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      In case if you come out early, give us a call, and if we
                      have a driver available earlier, we will send the driver
                      inside early.
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
      <div id="ctl00_ContentPlaceHolder1_trFlightNo" className="book-list">
        <div className="book-list2">
          <span className="red">*</span>Return Flight No
        </div>
        <div className="book-list3">
          <input
            name="ctl00$ContentPlaceHolder1$txtReturnFlightNo1"
            type="text"
            id="ctl00_ContentPlaceHolder1_txtReturnFlightNo1"
            className={`b-field clsRequired ${
              props?.errors?.return_flight_number ? "error" : ""
            }`}
            {...props?.register("return_flight_number", { required: true })}
          />
          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.return_flight_number ? "block" : "none",
            }}
          >
            *
          </span>{" "}
        </div>
      </div>
      <div id="ctl00_ContentPlaceHolder1_update2">
        <table id="table2">{/* Table content goes here */}</table>
      </div>
      <div class="book-inner-h1"></div>
      <div id="ctl00_ContentPlaceHolder1_UpdatePanel3">
        <div class="book-list">
          <table id="table5"></table>
        </div>
      </div>
    </div>
  );
};

export default ReturnPath;
