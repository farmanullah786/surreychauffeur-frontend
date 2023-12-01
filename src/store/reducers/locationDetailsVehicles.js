import * as actionTypes from "../actions/actionTypes";

const initialState = {
    location_details_vehicles: [],
    showSuccessModal: false,
  };

  const executeGetRequestToLocationsDetailsVehicles = (state, action) => {
    return {
      ...state,
      location_details_vehicles: action.data,
      showSuccessModal: true,
    };
  };


  const locationDetailsVehicles = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_REQUEST_TO_LOCATION_DETAILS_VEHICLES:
        return executeGetRequestToLocationsDetailsVehicles(state, action);
      default:
        return state;
    }
  };
  
  export default locationDetailsVehicles;