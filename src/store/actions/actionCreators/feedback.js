import * as actionTypes from "../actionTypes";
import { getRequestWithOutToken, postRequestWithOutToken } from "../../../helpers/methods";

// Action creator for successful feedback retrieval
const getRequestToFeedback = (data) => ({
  type: actionTypes.GET_REQUEST_TO_FEEDBACK,
  data: data,
});

// Dispatch function for retrieving feedback
export const getRequestToFeedbackDispatch = (url) => async (dispatch) => {
  try {
    const response = await getRequestWithOutToken(url);
    if (response?.data?.status_code === 200) {
      dispatch(getRequestToFeedback(response?.data?.data));
    }
  } catch (error) {
    console.error(error);
  }
};

// Action creator for successful feedback submission
const postRequestToFeedback = () => ({
  type: actionTypes.POST_REQUEST_TO_FEEDBACK,
});

// Dispatch function for submitting feedback
export const postRequestToFeedbackDispatch = (url, data, reset, setLoadingOverlay) => async (dispatch) => {
  try {
    const response = await postRequestWithOutToken(url, data);
    console.log(response);
    if (response?.data?.status_code === 201) {
      dispatch(postRequestToFeedback());
      dispatch(getRequestToFeedbackDispatch(url));
      setTimeout(() => {
        reset();
        setLoadingOverlay(false);
      }, 1000);
    }
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      setLoadingOverlay(false);
    }, 1000);
  }
};
