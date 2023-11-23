import React, { useState } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import { Link, useNavigate } from "react-router-dom";
import { postRequestWithOutToken } from "../../helpers/methods";
import LoadingOverlay from "../../components/shared/LoadingOverlay";
import LoginForm from "../../components/forms/LoginForm";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  const postRequestToLoginForm = async ({ email, password }) => {
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

  const redirectToForgotPassword = () => {
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
                    <LoginForm
                      setShowPassword={setShowPassword}
                      postRequestToLoginForm={postRequestToLoginForm}
                      setLoadingOverlay={setLoadingOverlay}
                      setWrongEmailOrPassword={setWrongEmailOrPassword}
                      register={register}
                      handleSubmit={handleSubmit}
                      redirectToForgotPassword={redirectToForgotPassword}
                      showPassword={showPassword}
                      navigate={navigate}
                    />
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

export default Login;
