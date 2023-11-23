import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { postRequestWithOutToken } from "../helpers/methods";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../components/shared/LoadingOverlay";
const ForgottenPassword = () => {
  const navigate = useNavigate();
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const sendRequest = async ({ email }) => {
    const formData = new FormData();
    formData.append("email", email);

    setLoadingOverlay(true);
    setWrongEmailOrPassword(false);
    setEmailExist(false);

    try {
      const response = await postRequestWithOutToken(
        "forgot-password/",
        formData
      );
      if (response?.data?.status_code === 200) {
        setTimeout(() => {
          reset();
          setEmailExist(true);
          setLoadingOverlay(false);
        }, 2000);
      }
    } catch (error) {
      setTimeout(() => {
        setWrongEmailOrPassword(true);
        setLoadingOverlay(false);
      }, 2000);
    }
  };
  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <div class="container-fluid">
        <div class="space"></div>
        <div class="col-md-12">
          <div class="row">
            <div class="login-formcvr">
              <div id="ctl00_ContentPlaceHolder1_dvResetPass">
                <div
                  id="ctl00_ContentPlaceHolder1_panelresetpasswordrequest"
                  className="modalPopup1"
                  align="center"
                >
                  <div id="retailresetpasswordrequest">
                    <div id="tbl1" className="largewidth">
                      <h3 className="formheader">Forgotten Password?</h3>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="text-left form-group has-feedback">
                            <h3>
                              If you have forgotten your password, simply enter
                              the email address which you have already
                              registered with us and click 'Submit' and we'll
                              send you a link to create a new password.
                            </h3>
                          </div>
                          <form onSubmit={handleSubmit(sendRequest)}>
                            <div className="text-left form-group has-feedback">
                              <input
                                type="text"
                                id="ctl00_ContentPlaceHolder1_txtrequestemailaddress"
                                className="form-control input-default"
                                placeholder="Email Address"
                                {...register("email")}
                              />
                              <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
                              <span
                                id="ctl00_ContentPlaceHolder1_RequiredFieldValidator3"
                                style={{
                                  color: "Red",
                                  display: errors?.email ? "block" : "none",
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
                                name="ctl00$ContentPlaceHolder1$btnrequest"
                                value="SUBMIT"
                                // onClick={() =>
                                //   WebForm_DoPostBackWithOptions(
                                //     new WebForm_PostBackOptions(
                                //       "ctl00$ContentPlaceHolder1$btnrequest",
                                //       "",
                                //       true,
                                //       "ab",
                                //       "",
                                //       false,
                                //       false
                                //     )
                                //   )
                                // }
                                id="ctl00_ContentPlaceHolder1_btnrequest"
                                className="popcvrbtn"
                              />
                            </div>

                            {wrongEmailOrPassword && (
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
                                  Valid email address required.This email
                                  address is not registered with us.
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
                                </p>
                              </div>
                            )}
                          </form>
                          {emailExist && (
                            <div class="text-left form-group has-feedback">
                              <span
                                id="ctl00_ContentPlaceHolder1_lblresetpassworderror"
                                style={{ color: "Green", fontWeight: "bold" }}
                              >
                                We have emailed a link. Check your Inbox/Junk
                                mail
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ForgottenPassword;
