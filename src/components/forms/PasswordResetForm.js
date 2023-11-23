import React from "react";

const PasswordResetForm = (props) => {
  return (
    <form onSubmit={props?.postRequestToResetPassword}>
      <div className="paymentbox-listc2">
        <div className="paymentbox-list1">Email address</div>
        <div className="paymentbox-list2 reset-password">
          <span>
            {props?.user_token
              ? props?.user_token?.email
              : props?.logged_user
              ? props?.logged_user?.email
              : ""}
          </span>
        </div>
      </div>
      <div className="paymentbox-listc1">
        <div className="paymentbox-list1">Please enter your new Password*</div>
        <div className="paymentbox-list2 reset-password">
          <input
            type={props?.showPassword ? "text" : "password"}
            value={props?.newPassword}
            onChange={(e) => props?.setNewPassword(e.target.value)}
            className="insubfield"
          />
          <span style={{ color: "red", display: "none" }}>*</span>
        </div>
      </div>
      <div className="paymentbox-listc2">
        <div className="paymentbox-list1">Confirm password*</div>
        <div className="paymentbox-list2 reset-password">
          <input
            type={props?.showPassword ? "text" : "password"}
            value={props?.confirmPassword}
            onChange={(e) => props?.setConfirmPassword(e.target.value)}
            className="insubfield"
          />
          <span style={{ color: "red", display: "none" }}>*</span>
        </div>
      </div>
      <div className="paymentbox-listc1">
        <div className="paymentbox-list1"> Show Password</div>
        <div className="paymentbox-list2 reset-password">
          <input
            type="checkbox"
            name="chkshowpassword"
            checked={props?.showPassword}
            onChange={() => props?.setShowPassword(!props?.showPassword)}
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
  );
};

export default PasswordResetForm;
