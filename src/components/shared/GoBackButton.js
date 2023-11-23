import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This navigates back to the previous page
  };

  return (
    <button
      id="ctl00_ContentPlaceHolder1_btnback"
      className="payybtncard"
      onClick={handleGoBack}
    >
      Back
    </button>
  );
};

export default GoBackButton;
