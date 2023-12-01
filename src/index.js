import React from "react";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Reducers
import feedback from "./store/reducers/feedback";
import user from "./store/reducers/user";
import vehicles from "./store/reducers/vehicles";
import locationDetailsVehicles from "./store/reducers/locationDetailsVehicles";
import booking from "./store/reducers/booking";
import bookingList from "./store/reducers/bookingList";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
  feedback,
  user,
  vehicles,
  locationDetailsVehicles,
  booking,
  bookingList,
});
const store = createStore(
  rootReducers,
  // applyMiddleware(thunk),
  composeEnhancer(applyMiddleware(thunk))
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
