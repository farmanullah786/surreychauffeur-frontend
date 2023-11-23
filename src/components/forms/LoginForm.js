import React from "react";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props?.handleSubmit(props?.postRequestToLoginForm)}>
      <div className="text-left form-group has-feedback">
        <input
          type="text"
          className="form-control input-default"
          {...props?.register("email")}
          placeholder="Email Address"
        />
        <i className="glyphicon glyphicon-user form-control-feedback glyphiconalign"></i>
      </div>
      <div className="text-left form-group has-feedback">
        <input
          type={props?.showPassword ? "text" : "password"}
          {...props?.register("password")}
          className="form-control input-default"
          placeholder="Password"
        />
        <i className="glyphicon glyphicon-lock form-control-feedback glyphiconalign"></i>
      </div>
      <div className="text-left form-group has-feedback">
        <input
          id="ctl00_ContentPlaceHolder1_chkshowpassword"
          type="checkbox"
          name="ctl00$ContentPlaceHolder1$chkshowpassword"
          onClick={() => props?.setShowPassword(!props?.showPassword)}
        />

        <label
        // style={{paddingTop:"10px"}}
        >
          Show password
        </label>
      </div>
      <div className="text-left form-group has-feedback">
        <div className="col-md-4 lbtn">
          <input
            type="submit"
            value="Login"
            className="clsbtnlogin submit-button"
          />
        </div>
        <div className="col-md-4 obtn">
          <Link to="" onClick={props?.redirectToForgotPassword}>
            Reset Password
          </Link>
        </div>
        <div className="col-md-4 obtn">
          <Link
            to=""
            onClick={() => {
                props?.setLoadingOverlay(true);
              setTimeout(() => {
                props?.setLoadingOverlay(false);
                props?.navigate("/signup-form");
              }, 2000);
            }}
          >
            Sign Up
          </Link>
        </div>
        <div className="col-md-12">
          <hr />
          <div className="socialmediaicon col-md-12">
            <h2>OR sign-in with one click</h2>
            <input
              type="image"
              src={process.env.PUBLIC_URL + "assets/images/fb_login.png"}
              style={{ borderWidth: "0px" }}
            />
            <input
              type="image"
              src={process.env.PUBLIC_URL + "assets/images/google.png"}
              style={{
                borderWidth: "0px",
                width: "105px",
                height: "24px",
                marginBottom: "0px",
                marginLeft: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
