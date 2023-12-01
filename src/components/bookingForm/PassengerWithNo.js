import React from "react";
import CountrySelect from "../shared/CountrySelect";

const PassengerWithNo = (props) => {
  return (
    <div id="ctl00_ContentPlaceHolder1_pnlnopassengerpanel">
      <div className="book-inner-h1">Booker's Details:</div>

      <div className="book-list">
        <div className="book-list2">
          <span className="red">*</span>
          <span id="ctl00_ContentPlaceHolder1_Label7">Booker's Full Name:</span>
        </div>
        <div className="book-list3">
          <input
            type="text"
            maxLength="250"
            id="ctl00_ContentPlaceHolder1_txtbookerfullname"
            className="b-field clsRequired form-control pick-up-location"
            {...props?.register("booker_full_name", { required: true })}
          />

          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.booker_full_name ? "block" : "none",
            }}
          >
            *
          </span>
        </div>
      </div>

      <div className="book-list">
        <div className="book-list2">
          <span className="red">*</span>
          <span id="ctl00_ContentPlaceHolder1_Label8">Booker's Email:</span>
        </div>
        <div className="book-list3">
          <input
            type="email"
            maxLength="250"
            id="ctl00_ContentPlaceHolder1_txtbookeremail"
            className="b-field clsRequired form-control pick-up-location"
            {...props?.register("booker_email", { required: true })}
          />

          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.booker_email ? "block" : "none",
            }}
          >
            *
          </span>
        </div>
      </div>

      <div className="book-list">
        <div className="book-list2">
          <span className="red">*</span>
          <span id="ctl00_ContentPlaceHolder1_Label9">
            Re-confirm booker's email:
          </span>
        </div>
        <div className="book-list3">
          <input
            type="text"
            maxLength="250"
            id="ctl00_ContentPlaceHolder1_txtreconfirmbookeremail"
            className="b-field clsRequired form-control pick-up-location"
            {...props?.register("rb_email", {
              required: true,
              validate: (value) => {
                const { booker_email } = props?.getValues();
                return booker_email === value || "Email should be the same";
              },
            })}
          />

          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.rb_email ? "block" : "none",
            }}
          >
            *
          </span>
        </div>
      </div>

      <div className="book-list">
        <div className="book-list2">
          <span className="red">*</span>
          <span id="ctl00_ContentPlaceHolder1_Label10">Bookers Mobile No:</span>
        </div>
        <div className="book-list3">
          <select
            id="ctl00_ContentPlaceHolder1_ddlbookermobileno"
            className="b-field3 form-control pick-up-location"
            {...props?.register("booker_mobile_country_code", { required: true })}
          >
            <CountrySelect />
          </select>
          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.booker_mobile_country_code ? "block" : "none",
            }}
          >
            *
          </span>
          <input
            type="text"
            maxLength="250"
            id="ctl00_ContentPlaceHolder1_txtbookermobileno"
            className="b-field3 form-control pick-up-location"
            {...props?.register("booker_mobile_number", { required: true })}
          />

          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.booker_mobile_number ? "block" : "none",
            }}
          >
            *
          </span>
        </div>
      </div>

      <div className="book-list">
        <div className="book-list2">
          <span id="ctl00_ContentPlaceHolder1_Label11">Bookers Home No:</span>
        </div>
        <div className="book-list3">
          <select
            id="ctl00_ContentPlaceHolder1_ddlbookerhomeno"
            className="b-field3 form-control pick-up-location"
            {...props?.register("booker_home_country_code", { required: true })}
          >
            <CountrySelect />
          </select>
          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.booker_home_country_code ? "block" : "none",
            }}
          >
            *
          </span>
          <input
            type="text"
            maxLength="250"
            id="ctl00_ContentPlaceHolder1_txtbookerhomeno"
            className="b-field form-control pick-up-location"
            {...props?.register("booker_home_number", { required: true })}
          />

          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.booker_home_number ? "block" : "none",
            }}
          >
            *
          </span>
        </div>
      </div>

      <div className="book-inner-h1">Passenger's Details:</div>

      <div className="book-list">
        <div className="book-list2">
          <span className="red">*</span>
          <span id="ctl00_ContentPlaceHolder1_Label12">
            Passenger's First Name:
          </span>
        </div>
        <div className="book-list3">
          <input
            type="text"
            maxLength="48"
            id="ctl00_ContentPlaceHolder1_txtpassfirstname"
            className="b-field clsRequired form-control pick-up-location"
            {...props?.register("passenger_first_name", { required: true })}
          />

          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.passenger_first_name ? "block" : "none",
            }}
          >
            *
          </span>
        </div>
      </div>

      <div className="book-list">
        <div className="book-list2">
          <span className="red">*</span>
          <span id="ctl00_ContentPlaceHolder1_Label13">
            Passenger's Last Name:
          </span>
        </div>
        <div className="book-list3">
          <input
            type="text"
            maxLength="48"
            id="ctl00_ContentPlaceHolder1_txtpasslastname"
            className="b-field clsRequired form-control pick-up-location"
            {...props?.register("passenger_last_name", { required: true })}
          />

          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.passenger_last_name ? "block" : "none",
            }}
          >
            *
          </span>
        </div>
      </div>

      <div className="book-list">
        <div className="book-list2">
          <span className="red">*</span>
          <span id="ctl00_ContentPlaceHolder1_Label14">
            Passenger's Mobile Number:
          </span>
        </div>
        <div className="book-list3">
          <select
            id="ctl00_ContentPlaceHolder1_ddlpassmobilenumber"
            className="b-field3 form-control pick-up-location"
            {...props?.register("passenger_mobile_country_code", { required: true })}
          >
            <CountrySelect />
          </select>
          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.passenger_mobile_country_code ? "block" : "none",
            }}
          >
            *
          </span>
          <input
            type="text"
            maxLength="40"
            id="ctl00_ContentPlaceHolder1_txtpassmobilenumber"
            className="b-field clsRequired form-control pick-up-location"
            {...props?.register("passenger_mobile_number", { required: true })}
          />

          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.passenger_mobile_number ? "block" : "none",
            }}
          >
            *
          </span>
        </div>
      </div>
    </div>
  );
};

export default PassengerWithNo;
