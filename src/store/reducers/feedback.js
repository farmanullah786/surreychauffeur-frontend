import * as actionTypes from "../actions/actionTypes";

const initialState = {
    feedbacks: [],
    showSuccessModal: false,
  };

  const executeGetRequestToFeedback = (state, action) => {
    return {
      ...state,
      feedbacks: action.data,
      showSuccessModal: true,
    };
  };
  const executePostRequestToFeedback = (state) => {
    return {
      ...state,
      showSuccessModal: true,
    };
  };

  const feedback = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_REQUEST_TO_FEEDBACK:
        return executeGetRequestToFeedback(state, action);
      case actionTypes.POST_REQUEST_TO_FEEDBACK:
        return executePostRequestToFeedback(state);
  
      default:
        return state;
    }
  };
  
  export default feedback;