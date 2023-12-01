import * as actionTypes from "../actions/actionTypes";

const initialState = {
    booking_list: [],
    showSuccessModal: false,
  };

  const executeGetRequestToBookingList = (state, action) => {
    return {
      ...state,
      booking_list: action.data,
      showSuccessModal: true,
    };
  };

  const bookingList = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_REQUEST_TO_BOOKING_LIST:
        return executeGetRequestToBookingList(state, action);
  
      default:
        return state;
    }
  };
  
  export default bookingList;