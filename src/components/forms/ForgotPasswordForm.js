import React from "react";

const ForgotPasswordForm = (props) => {
  return (
    <form onSubmit={props?.handleSubmit(props?.postRequestToForgotPassword)}>
      <div className="text-left form-group has-feedback">
        <input
          type="text"
          id="ctl00_ContentPlaceHolder1_txtrequestemailaddress"
          className="form-control input-default"
          placeholder="Email Address"
          {...props?.register("email")}
        />
        <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
        <span
          id="ctl00_ContentPlaceHolder1_RequiredFieldValidator3"
          style={{
            color: "Red",
            display: props?.errors?.email ? "block" : "none",
          }}
        >
          *
        </span>
      </div>

      <div className="text-left form-group has-feedback">
        <span
          id="ctl00_ContentPlaceHolder1_lblresetpassworderror"
          style={{ color: "Green", fontWeight: "bold" }}
        ></span>
      </div>

      <div className="text-left form-group has-feedback text-center">
        <input
          type="submit"
          value="SUBMIT"
          id="ctl00_ContentPlaceHolder1_btnrequest"
          className="popcvrbtn"
        />
      </div>

      {props?.wrongEmailOrPassword && (
        <div
          className="w3-panel"
          id="MemberForgottenPasswordMsg"
          style={{
            width: "380px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          <p>
            Valid email address required.This email address is not registered
            with us.
            <br />
            <a
              onClick={() => {
                props?.setWrongEmailOrPassword(false);
                props?.reset();
              }}
              href="#"
              style={{ textDecoration: "underline" }}
            >
              Close
            </a>
          </p>
        </div>
      )}
    </form>
  );
};

export default ForgotPasswordForm;
