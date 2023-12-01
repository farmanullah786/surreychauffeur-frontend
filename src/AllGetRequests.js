import React, { useEffect } from "react";
import { connect } from "react-redux";
import { jwtDecode as jwtDecode } from "jwt-decode";
import * as actionCreators from "./store/actions/index";
import { useNavigate } from "react-router-dom";

const AllGetRequest = (props) => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken") || null;
  const user = authToken && jwtDecode(authToken);


  const tokenExpirationTime = user?.exp * 1000;
  const currentTime = new Date().getTime();

  useEffect(() => {
    if (tokenExpirationTime < currentTime) {
      logout();
    }
  }, [currentTime, tokenExpirationTime]);

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("bookingData");
    localStorage.removeItem("uuidObject");
    navigate("/");
  };

  useEffect(() => {
    props.getRequestToFeedback(`feedbacks/`);
    props.getRequestToVehicles(`vehicles/`);
    if (user?.user_id) {
      props.getRequestToUserProfile(`update-profile/${user?.user_id}`);
      props.getRequestToBookingList(`booking/${user?.user_id}`);
    }
  }, [authToken, user?.user_id]);

  return null; // or some JSX if needed
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRequestToFeedback: (url) =>
      dispatch(actionCreators.getRequestToFeedbackDispatch(url)),
    getRequestToUserProfile: (url) =>
      dispatch(actionCreators.getRequestToUserProfileDispatch(url)),
    getRequestToVehicles: (url) =>
      dispatch(actionCreators.getRequestToVechiclesDispatch(url)),
    getRequestToBookingList: (url) =>
      dispatch(actionCreators.getRequestToBookingListDispatch(url)),
  };
};

export default connect(null, mapDispatchToProps)(AllGetRequest);
