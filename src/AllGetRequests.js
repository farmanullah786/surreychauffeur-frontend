import React, { useEffect } from "react";
import { connect } from "react-redux";
import { jwtDecode as jwt_decode } from "jwt-decode";
import * as actionCreators from "./store/actions/index";
import { useNavigate } from "react-router-dom";

const AllGetRequest = (props) => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("authToken") ?? null;
  const user = isLogged && jwt_decode(isLogged);
  console.log(user,"User")
  let token_expiration_time = user?.exp * 1000;
  let current_time = new Date().getTime();

  useEffect(() => {
    if (token_expiration_time < current_time) {
      logout();
    }
  }, [current_time, token_expiration_time]);

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  useEffect(() => {
    {
      props.getRequestToFeedback(`feedback/`);
    }
    {
      user?.user_id && props.getRequestToUserProfile(`update-profile/${user?.user_id}`);
    }
  }, []);
};
// const mapStateToProps = (state) => {
//   return {
//     current_user: state.currentUserReducer?.user,
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    getRequestToFeedback: (url) =>
      dispatch(actionCreators.getRequestToFeedbackDispatch(url)),

    getRequestToUserProfile: (url) =>
      dispatch(actionCreators.getRequestToUserProfileDispatch(url)),
  };
};

export default connect(null, mapDispatchToProps)(AllGetRequest);
