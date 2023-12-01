import React from "react";
import CountrySelect from "../shared/CountrySelect";

const PassengerWithYes = (props) => {
  const isLogged = localStorage.getItem("authToken") ?? null;

  return (
    <div id="ctl00_ContentPlaceHolder1_pnlyespassengerpanel">
      <div className="book-list">
        <div className="book-list2">
          <span className="red">*</span>
          <span id="ctl00_ContentPlaceHolder1_Label1">First Name:</span>
        </div>
        <div className="book-list3">
          <input
            type="text"
            maxLength="48"
            id="ctl00_ContentPlaceHolder1_txtFirstName"
            className="form-control pick-up-location b-field clsRequired"
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
          <span id="ctl00_ContentPlaceHolder1_Label2">Last Name:</span>
        </div>
        <div className="book-list3">
          <input
            type="text"
            maxLength="48"
            id="ctl00_ContentPlaceHolder1_txtLastName"
            className="form-control pick-up-location b-field clsRequired"
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
          <span id="ctl00_ContentPlaceHolder1_Label3">Email Address:</span>
        </div>
        <div className="book-list3">
          <input
            type="email"
            maxLength="100"
            id="ctl00_ContentPlaceHolder1_txtEmail"
            className="form-control pick-up-location b-field clsRequired"
            onCopy={() => false}
            onPaste={() => false}
            onCut={() => false}
            autoComplete="off"
            {...props?.register("passenger_email", { required: true })}
          />

          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.passenger_email ? "block" : "none",
            }}
          >
            *
          </span>
        </div>
      </div>
      <div className="book-list">
        <div className="book-list2">
          <span className="red">*</span>
          <span id="ctl00_ContentPlaceHolder1_Label4">Re-confirm Email:</span>
        </div>
        <div className="book-list3">
          <input
            type="email"
            maxLength="100"
            id="ctl00_ContentPlaceHolder1_txtreconfirmEmail"
            className="form-control pick-up-location b-field clsRequired"
            onCopy={() => false}
            onPaste={() => false}
            onCut={() => false}
            autoComplete="off"
            {...props?.register("re_email", {
              required: isLogged ? false : true,
              validate: isLogged
                ? null
                : (value) => {
                    const { passenger_email } = props?.getValues();
                    return passenger_email === value || "Email should be the same";
                  },
            })}
          />

          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
          <span
            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
            style={{
              color: "Red",
              display: props?.errors?.re_email ? "block" : "none",
            }}
          >
            *
          </span>
        </div>
      </div>
      <div className="book-list">
        <div className="book-list2">
          <span className="red">*</span>
          <span id="ctl00_ContentPlaceHolder1_Label5">Mobile Number:</span>
        </div>
        <div className="book-list3">
          <select
            id="ctl00_ContentPlaceHolder1_ddlmobilenumber"
            className="form-control pick-up-location b-field3"
            style={{ marginBottom: "5px" }}
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
            type="number"
            maxLength="40"
            id="ctl00_ContentPlaceHolder1_txtmobilenumber"
            className="form-control pick-up-location b-field clsRequired"
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
      <div className="book-list">
        <div className="book-list2">
          <span id="ctl00_ContentPlaceHolder1_Label6">Home Number:</span>
        </div>
        <div className="book-list3">
          <select
            id="ctl00_ContentPlaceHolder1_ddlhomenumber"
            className="form-control pick-up-location b-field3"
            style={{ marginBottom: "5px" }}
            {...props?.register("passenger_home_country_code")}
          >
            <CountrySelect />
          </select>
          <input
            type="number"
            maxLength="40"
            id="ctl00_ContentPlaceHolder1_txthomenumber"
            className="form-control pick-up-location b-field"
            {...props?.register("passenger_home_number")}
          />
        </div>
      </div>
    </div>
  );
};

export default PassengerWithYes;
