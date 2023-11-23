import React, { useState } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import { postRequestWithOutToken } from "../../helpers/methods";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../../components/shared/LoadingOverlay";
import ForgotPasswordForm from "../../components/forms/ForgotPasswordForm";
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


  const postRequestToForgotPassword = async ({ email }) => {
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
                          <ForgotPasswordForm
                            handleSubmit={handleSubmit}
                            postRequestToForgotPassword={
                              postRequestToForgotPassword
                            }
                            register={register}
                            errors={errors}
                            setWrongEmailOrPassword={setWrongEmailOrPassword}
                            wrongEmailOrPassword={wrongEmailOrPassword}
                          />
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
