import * as actionTypes from "../actionTypes";
import {
  getRequestWithOutToken,
  postRequestWithOutToken,
} from "../../../helpers/methods";

const getRequestToFeedback = (data) => {
  return {
    type: actionTypes.GET_REQUEST_TO_FEEDBACK,
    data: data,
  };
};

export const getRequestToFeedbackDispatch = (url) => {
  return async (dispatch) => {
    try {
      const response = await getRequestWithOutToken(url);
      if (response?.data?.status_code === 200) {
        dispatch(getRequestToFeedback(response?.data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
const postRequestToFeedback = () => {
  return {
    type: actionTypes.POST_REQUEST_TO_FEEDBACK,
  };
};

export const postRequestToFeedbackDispatch = (url, data, reset) => {
  return async (dispatch) => {
    try {
      const response = await postRequestWithOutToken(url, data);
      console.log(response)
      if (response?.data?.status_code === 201) {
        dispatch(postRequestToFeedback());
        dispatch(getRequestToFeedbackDispatch(url));
        reset()
      }
    } catch (error) {
      console.log(error);
    }
  };
};
