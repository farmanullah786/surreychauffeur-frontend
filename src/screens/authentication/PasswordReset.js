import React, { useState } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import { postRequestWithOutToken } from "../../helpers/methods";
import { useNavigate, useParams } from "react-router-dom";
import LoadingOverlay from "../../components/shared/LoadingOverlay";
import { jwtDecode as jwt_decode } from "jwt-decode";
import PasswordResetForm from "../../components/forms/PasswordResetForm";
const PasswordReset = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const user_token = params.get("token") ?? null;

  const isLogged = localStorage.getItem("authToken") ?? null;
  const logged_user = isLogged && jwt_decode(isLogged);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const [error, setError] = useState("");
  const [match, setMatch] = useState(false);

  const postRequestToResetPassword = async (e) => {
    e.preventDefault();
    setLoadingOverlay(true);
    setMatch(false);
    if (newPassword !== confirmPassword) {
      setTimeout(() => {
        setError("Password and Confirm Password must be same.");
        setMatch(true);
        setLoadingOverlay(false);
      }, 1000);
      return;
    }

    const formData = new FormData();
    if (user_token) {
      formData.append("user_token", user_token);
    }
    if (isLogged) {
      formData.append("logged_user", logged_user?.email);
    }
    formData.append("password", newPassword);
    formData.append("cpassword", confirmPassword);

    try {
      const response = await postRequestWithOutToken(
        `reset-password/`,
        formData
      );

      if (response?.data?.status_code === 200) {
        setTimeout(() => {
          setLoadingOverlay(false);
          setConfirmPassword("");
          setNewPassword("");
          navigate(logged_user ? "/change-password-complete": "/reset-password-complete");
        }, 1000);
      }
    } catch (error) {
      setTimeout(() => {
        setLoadingOverlay(false);
        setConfirmPassword("");
        setNewPassword("");
      }, 1000);
    }
  };

  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <section className="main_Wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12 text-left">
              <div className="choose-option2">
                {match && (
                  <span
                    id="ctl00_ContentPlaceHolder1_lblError"
                    style={{ color: "red" }}
                  >
                    {error}
                  </span>
                )}

                <br />
                <h1>Change your password</h1>
                <PasswordResetForm
                  user_token={user_token}
                  logged_user={logged_user}
                  showPassword={showPassword}
                  newPassword={newPassword}
                  setNewPassword={setNewPassword}
                  setConfirmPassword={setConfirmPassword}
                  postRequestToResetPassword={postRequestToResetPassword}
                  setShowPassword={setShowPassword}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default PasswordReset;
