import * as actionTypes from "../actionTypes";
import { getRequestWithOutToken } from "../../../helpers/methods";

// Action creator for successful feedback retrieval
const getRequestToVechicles = (data) => ({
  type: actionTypes.GET_REQUEST_TO_VEHICLES,
  data: data,
});

// Dispatch function for retrieving feedback
export const getRequestToVechiclesDispatch = (url) => async (dispatch) => {
  try {
    const response = await getRequestWithOutToken(url);

    if (response?.status === 200) {
      dispatch(getRequestToVechicles(response?.data));
    }
  } catch (error) {
    console.error(error);
  }
};

// Action creator for successful feedback retrieval
const getRequestToLocationDetailsVechicles = (data) => ({
  type: actionTypes.GET_REQUEST_TO_LOCATION_DETAILS_VEHICLES,
  data: data,
});

// Dispatch function for retrieving feedback
export const getRequestToLocationDetailsVechiclesDispatch =
  (url) => async (dispatch) => {
    try {
      const response = await getRequestWithOutToken(url);

      if (response?.status === 200) {
        dispatch(getRequestToLocationDetailsVechicles(response?.data?.data));
      }
    } catch (error) {
      console.error(error);
    }
  };

