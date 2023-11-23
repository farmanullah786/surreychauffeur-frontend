import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postRequestWithOutToken } from "../helpers/methods";
import LoadingOverlay from "../components/shared/LoadingOverlay";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const { register, handleSubmit, reset } = useForm({ mode: "onChange" });

  const sendRequest = async ({ email, password }) => {
    if (!email && !password) {
      return;
    }
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    setLoadingOverlay(true);

    try {
      const response = await postRequestWithOutToken("token/", formData);
      if (response?.status === 200) {
        setTimeout(() => {
          localStorage.setItem("authToken", response?.data?.access_token);
          setLoadingOverlay(false);
          navigate("/");
          reset();
        }, 1000);
      }
    } catch (error) {
      setTimeout(() => {
        setLoadingOverlay(false);
      }, 2000);
      if (error?.response?.status === 401) {
        setTimeout(() => {
          setWrongEmailOrPassword(true);
        }, 2000);
      }
    }
  };

  const RedirectToForgotPassword = () => {
    setLoadingOverlay(true);
    setTimeout(() => {
      navigate("/forgot-password");
      setLoadingOverlay(false);
    }, 2000);
  };
  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12">
          <div className="row">
            <div className="login-formcvr">
              <div className="largewidth formspce">
                <h3 className="formheader">Member Login</h3>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-left form-group has-feedback">
                      <h3>Login Details</h3>
                    </div>
                    {wrongEmailOrPassword && (
                      <div className="errorbox" id="MemberInvalidMsg">
                        Incorrect email address or password!!
                        <br />
                        <Link
                          to="/forgot-password"
                          id="anchorsetpassword"
                          target="_blank"
                        >
                          Want to re-set your password??
                        </Link>
                        <br />
                        <a
                          onClick={() => {
                            setWrongEmailOrPassword(false);
                            reset();
                          }}
                          href="#"
                          style={{ textDecoration: "underline" }}
                        >
                          Close
                        </a>
                      </div>
                    )}
                    <form onSubmit={handleSubmit(sendRequest)}>
                      <div className="text-left form-group has-feedback">
                        <input
                          type="text"
                          className="form-control input-default"
                          {...register("email")}
                          placeholder="Email Address"
                        />
                        <i className="glyphicon glyphicon-user form-control-feedback glyphiconalign"></i>
                      </div>
                      <div className="text-left form-group has-feedback">
                        <input
                          type={showPassword ? "text" : "password"}
                          {...register("password")}
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
                          onClick={() => setShowPassword(!showPassword)}
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
                          <Link to="" onClick={RedirectToForgotPassword}>
                            Reset Password
                          </Link>
                        </div>
                        <div className="col-md-4 obtn">
                          <Link
                            to=""
                            onClick={() => {
                              setLoadingOverlay(true);
                              setTimeout(() => {
                                setLoadingOverlay(false);
                                navigate("/signup-form");
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
                              src={
                                process.env.PUBLIC_URL +
                                "assets/images/fb_login.png"
                              }
                              style={{ borderWidth: "0px" }}
                            />
                            <input
                              type="image"
                              src={
                                process.env.PUBLIC_URL +
                                "assets/images/google.png"
                              }
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
                    <div className="errorbox" style={{ display: "none" }}>
                      Incorrect email address or password!!
                      <br />
                      <Link to="/forgot-password" target="_blank">
                        Want to re-set your password??
                      </Link>
                      <br />
                      <a
                        href="#"
                        style={{ textDecoration: "underline" }}
                        onClick={() => {
                          setWrongEmailOrPassword(false);
                          reset();
                        }}
                      >
                        Close
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </AppLayout>
  );
};

export default LoginForm;
