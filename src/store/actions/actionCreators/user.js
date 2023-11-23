import * as actionTypes from "../actionTypes";
import { getRequest, putRequest } from "../../../helpers/methods";

// Action creator for successful user profile retrieval
const getRequestToUserProfile = (data) => ({
  type: actionTypes.GET_REQUEST_TO_USER_PROFILE,
  data: data,
});

// Dispatch function for retrieving user profile
export const getRequestToUserProfileDispatch = (url) => async (dispatch) => {
  try {
    const response = await getRequest(url);
    if (response?.data?.status_code === 200) {
      dispatch(getRequestToUserProfile(response?.data?.data));
    }
  } catch (error) {
    console.error(error);
  }
};

// Action creator for successful user profile update
const putRequestToUserProfile = () => ({
  type: actionTypes.PUT_REQUEST_TO_USER_PROFILE,
});

// Dispatch function for updating user profile
export const putRequestToUserProfileDispatch = (url, formData, setLoadingOverlay, setIsFormSubmittedSuccesful) => async (dispatch) => {
  try {
    const response = await putRequest(url, formData);
    if (response?.status === 200) {
      setTimeout(() => {
        setLoadingOverlay(false);
        dispatch(putRequestToUserProfile());
        dispatch(getRequestToUserProfile(url));
        setIsFormSubmittedSuccesful(true);
        // navigate("/");
      }, 1000);
    }
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      setLoadingOverlay(false);
    }, 2000);
  }
};
