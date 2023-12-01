import * as actionTypes from "../actions/actionTypes";

const initialState = {
    vehicles: [],
    showSuccessModal: false,
  };

  const executeGetRequestToVehicles = (state, action) => {
    return {
      ...state,
      vehicles: action.data,
      showSuccessModal: true,
    };
  };

  const vehicles = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_REQUEST_TO_VEHICLES:
        return executeGetRequestToVehicles(state, action);
  
      default:
        return state;
    }
  };
  
  export default vehicles;