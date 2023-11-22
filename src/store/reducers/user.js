import * as actionTypes from "../actions/actionTypes";

const initialState = {
    user: [],
    showSuccessModal: false,
  };

  const executeGetRequestToUserProfile = (state, action) => {
    return {
      ...state,
      user: action.data,
      showSuccessModal: true,
    };
  };
  const executePutRequestToUserProfile = (state) => {
    return {
      ...state,
      showSuccessModal: true,
    };
  };

  const user = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_REQUEST_TO_USER_PROFILE:
        return executeGetRequestToUserProfile(state, action);
      case actionTypes.PUT_REQUEST_TO_USER_PROFILE:
        return executePutRequestToUserProfile(state);
  
      default:
        return state;
    }
  };
  
  export default user;