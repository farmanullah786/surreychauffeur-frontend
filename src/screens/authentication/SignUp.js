import React, { useState } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postRequestWithOutToken } from "../../helpers/methods";
import LoadingOverlay from "../../components/shared/LoadingOverlay";
import SignUpForm from "../../components/forms/SignUpForm";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const uuid = params.get("uuid") ?? null;

  const [text, setText] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const postRequestToSignUpForm = async ({
    email,
    re_email,
    password,
    password2,
    first_name,
    last_name,
    country,
    phone,
  }) => {
    setWrongEmailOrPassword(false);
    if (email !== re_email) {
      setText("Email and confirm email did't match.");
      setWrongEmailOrPassword(true);
      return;
    }
    if (password !== password2) {
      setText("Password and re-confirm password did't match.");
      setWrongEmailOrPassword(true);
      return;
    }
    if (password.length < 8 && password2.length < 8) {
      setText("This password is too short. It must contain at least 8 characters.");
      setWrongEmailOrPassword(true);
      return;
    }
    setLoadingOverlay(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", password2);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("country", country);
    formData.append("phone", phone);

    try {
      const response = await postRequestWithOutToken("register/", formData);
      if (response?.status === 201) {
        setTimeout(() => {
          reset();
          setIsSubmittedSuccessfully(true);
          setLoadingOverlay(false);
          if (uuid) {
            navigate(`/booking-form?uuid=${uuid}`);
          } else {
            navigate("/");
          }
        }, 2000);
      }
    } catch (error) {
      setTimeout(() => {
        setLoadingOverlay(false);
      }, 2000);
      if (error?.response?.status === 409) {
        setText("This email address is already in use.");
        setWrongEmailOrPassword(true);
      }
      if (error?.response?.status === 400) {
        setText("All form data is required.");
        setWrongEmailOrPassword(true);
      }
    }
  };
  return (
    <AppLayout>
      <div>
        {loadingOverlay && <LoadingOverlay />}
        <div className="space"></div>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div id="ctl00_ContentPlaceHolder1_Table1" className="largewidth">
                <h3 className="formheader">Member Sign Up</h3>
                {isSubmittedSuccessfully && (
                  <div
                    className="text-center sign-line"
                    onClick={() => {
                      setIsSubmittedSuccessfully(false);
                    }}
                  >
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      You have been registered. Now you can login to your
                      account and make bookings.
                    </span>
                  </div>
                )}
                <SignUpForm
                  postRequestToSignUpForm={postRequestToSignUpForm}
                  setLoadingOverlay={postRequestToSignUpForm}
                  setShowPassword={setShowPassword}
                  showPassword={showPassword}
                  handleSubmit={handleSubmit}
                  register={register}
                  errors={errors}
                  getValues={getValues}
                />
                <hr />
                <div className="text-center sign-line">
                  <span style={{ fontWeight: "bold" }}>
                    OR sign-in with one click
                  </span>
                </div>
                <div id="socialmedias" className="social-iconset">
                  <span>
                    <input
                      type="image"
                      name="ctl00$ContentPlaceHolder1$btnfacebooklogin"
                      id="ctl00_ContentPlaceHolder1_btnfacebooklogin"
                      Text="Login with Facebook"
                      src={
                        process.env.PUBLIC_URL + "assets/images/fb_login.png"
                      }
                      style={{ borderWidth: 0 }}
                    />
                  </span>
                  <span>
                    <input
                      type="image"
                      name="ctl00$ContentPlaceHolder1$imgGoogle"
                      id="ctl00_ContentPlaceHolder1_imgGoogle"
                      className="img-responsive app_ico"
                      src={process.env.PUBLIC_URL + "assets/images/google.png"}
                      style={{
                        borderWidth: 0,
                        width: "105px",
                        height: "24px",
                        marginBottom: "0px",
                        marginLeft: "10px",
                      }}
                    />
                  </span>
                </div>
                {wrongEmailOrPassword && (
                  <div
                    className="w3-panel text-center sign-line"
                    id="AlreadyMemberRegisteredMsg"
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <p style={{ marginBottom: "0px", color: "red" }}>
                      {text}
                      <input
                        type="button"
                        id="alreadyregistered"
                        // onClick={() => AlreadyMemberRegisteredClose()}
                        style={{
                          marginLeft: "7px",
                          display: "none",
                          padding: "4px 14px",
                          backgroundColor: "#e41a7e",
                          fontSize: "13px",
                          color: "white",
                          border: "none",
                        }}
                        value="Close"
                        align="center"
                      />
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="space"></div>
      </div>
    </AppLayout>
  );
};

export default SignUp;
