import * as actionTypes from "../actions/actionTypes";

const initialState = {
    booking_form: [],
    showSuccessModal: false,
  };

  const executeGetRequestToBooking = (state, action) => {
    return {
      ...state,
      booking_form: action.data,
      showSuccessModal: true,
    };
  };

  const booking = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_REQUEST_TO_BOOKING:
        return executeGetRequestToBooking(state, action);
  
      default:
        return state;
    }
  };
  
  export default booking;