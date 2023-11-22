import * as actionTypes from "../actionTypes";
import {
  getRequest,
  putRequest
} from "../../../helpers/methods";

const getRequestToUserProfile = (data) => {
  return {
    type: actionTypes.GET_REQUEST_TO_USER_PROFILE,
    data: data,
  };
};

export const getRequestToUserProfileDispatch = (url) => {
  return async (dispatch) => {
    try {
      const response = await getRequest(url);
      if (response?.data?.status_code === 200) {
        dispatch(getRequestToUserProfile(response?.data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};


const putRequestToUserProfile = () => {
  return {
    type: actionTypes.PUT_REQUEST_TO_USER_PROFILE,
  };
};

export const putRequestToUserProfileDispatch = (url, formData,setLoadingOverlay,setIsFormSubmittedSuccesful) => {
  return async (dispatch) => {

    try {
      const response = await putRequest(url, formData);
      if (response?.status === 200) {
        setTimeout(() => {
          setLoadingOverlay(false);
          dispatch(putRequestToUserProfile());
          dispatch(getRequestToUserProfile(url));
          setIsFormSubmittedSuccesful(true)
          // navigate("/");
        }, 1000);
      }
    } catch (error) {
      setTimeout(() => {
        setLoadingOverlay(false);
      }, 2000);
    }
    // try {
    //   const response = await putRequest(url);
    //   if (response?.data?.status_code === 200) {
    //     dispatch(putRequestToUserProfile());
    //     dispatch(getRequestToUserProfile(url));
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
};