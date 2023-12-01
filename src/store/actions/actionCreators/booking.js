import * as actionTypes from "../actionTypes";
import { getRequest, getRequestWithOutToken } from "../../../helpers/methods";



const getRequestToBooking = (data) => ({
    type: actionTypes.GET_REQUEST_TO_BOOKING,
    data: data,
  });
  
  // Dispatch function for retrieving feedback
  export const getRequestToBookingDispatch = (url) => async (dispatch) => {
    try {
      const response = await getRequestWithOutToken(url);
      if (response?.status === 200) {
        dispatch(getRequestToBooking(response?.data?.data));
      }
    } catch (error) {
      console.error(error);
    }
  };



  
// Action creator for successful feedback retrieval
const getRequestToBookingList = (data) => ({
  type: actionTypes.GET_REQUEST_TO_BOOKING_LIST,
  data: data,
});

// Dispatch function for retrieving feedback
export const getRequestToBookingListDispatch = (url) => async (dispatch) => {
  try {
    const response = await getRequest(url);
    console.log(response,"HHHHHHHHHHHHHHHHHHHHHHHHH")
    if (response?.status === 200) {
      dispatch(getRequestToBookingList(response?.data?.data));
    }
  } catch (error) {
    console.error(error);
  }
};
