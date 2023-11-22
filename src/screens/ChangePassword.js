import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { postRequest, postRequestWithOutToken } from "../helpers/methods";
import { useNavigate, useParams } from "react-router-dom";
import LoadingOverlay from "../components/LoadingOverlay";
import { jwtDecode as jwt_decode } from "jwt-decode";
const ChangePassword = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const user_token = params.get("token") ?? null;
  const token_user = user_token ? jwt_decode(user_token) : {};

  const isLogged = localStorage.getItem("authToken") ?? null;
  const logged_user = isLogged && jwt_decode(isLogged);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const [error, setError] = useState("");
  const [match, setMatch] = useState(false);

  const postRequestToPasswordChange = async (e) => {
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
          navigate("/password-changed");
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
              <form onSubmit={postRequestToPasswordChange}>
                <div className="paymentbox-listc2">
                  <div className="paymentbox-list1">Email address</div>
                  <div className="paymentbox-list2">
                    <span>
                      {user_token
                        ? user_token?.email
                        : logged_user
                        ? logged_user?.email
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="paymentbox-listc1">
                  <div className="paymentbox-list1">
                    Please enter your new Password*
                  </div>
                  <div className="paymentbox-list2">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="insubfield"
                    />
                    <span style={{ color: "red", display: "none" }}>*</span>
                  </div>
                </div>
                <div className="paymentbox-listc2">
                  <div className="paymentbox-list1">Confirm password*</div>
                  <div className="paymentbox-list2">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="insubfield"
                    />
                    <span style={{ color: "red", display: "none" }}>*</span>
                  </div>
                </div>
                <div className="paymentbox-listc1">
                  <div className="paymentbox-list1"> Show Password</div>
                  <div className="paymentbox-list2">
                    <input
                      type="checkbox"
                      name="chkshowpassword"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="pinkButton"
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ChangePassword;
