import React from "react";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { Navigate, useRoutes } from "react-router-dom";

import AboutPinkberry from "./screens/AboutPinkberry/AboutPinkberry";
import AirportTransport from "./screens/AirportTransport/AirportTransfer";
import AirportTransportInfo from "./screens/AirportTransport/AirportTransportInfo";
import Billing from "./screens/Billing";
import ContactUs from "./screens/ContactUs";
import CorporateTransfer from "./screens/CorporateTransfer";
import CruisePortTransport from "./screens/CruisePortTransport/CruisePortTransport";
import CruisePortTransportInfo from "./screens/CruisePortTransport/CruisePortTransportInfo";
import DriveWithUs from "./screens/DriveWithUs";
import FAQ from "./screens/FAQ";
import FeedbackForm from "./screens/feedback/FeedbackForm";
import Feedbacks from "./screens/feedback/Feedbacks";
import ForgottenPassword from "./screens/authentication/ForgottenPassword";
import GroupTransfer from "./screens/GroupTransfer";
import HomePage from "./screens/HomePage";
import Login from "./screens/authentication/Login";
import PageNotFound from "./screens/PageNotFound";
import PasswordReset from "./screens/authentication/PasswordReset";
import PasswordResetComplete from "./screens/authentication/PasswordResetComplete";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Profile from "./components/userProfile/Profile";
import SignUp from "./screens/authentication/SignUp";
import SightSeeingTour from "./screens/SightSeeingTour";
import SiteMap from "./screens/SiteMap";
import StationTransport from "./screens/StationTransport/StationTransport";
import StationTransportInfo from "./screens/StationTransport/StationTransportInfo";
import TermsAndConditions from "./screens/TermsAndConditions";
import TransferSuccessMessage from "./screens/TransferSuccessMessage";
import Vehicles from "./screens/Vehicles";
import BookingTypeSelection from "./screens/BookingTypeSelection";
import MapWithCurrentLocation from "./screens/MapWithCurrentLocation";

import "animate.css";
import Result from "./screens/Result";
import Booking from "./screens/Booking";
import BookingList from "./screens/BookingList";
import BookingDetail from "./screens/BookingDetail";
import BookingConfirmation from "./screens/BookingConfirmation";
import BookingSuccessMessage from "./screens/BookingSuccessMessage";

function App() {
  const isLogged = localStorage.getItem("authToken") ?? null;
  const user = isLogged && jwt_decode(isLogged);
  // const bookingData = localStorage.removeItem("bookingData")
  //   ? localStorage.removeItem("bookingData")
  //   : null;
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/google",
      element: <MapWithCurrentLocation />,
    },
    {
      path: "/about-pink-berry",
      element: <AboutPinkberry />,
    },
    {
      path: "/airport-transfer",
      element: <AirportTransport />,
    },
    {
      path: "/airport-transfer-detail",
      element: <AirportTransportInfo />,
    },
    {
      path: "/billing-form",
      element: isLogged ? <Billing /> : <Navigate to="/login-form" />,
    },
    {
      path: "/booking-type-selection",
      element: <BookingTypeSelection />,
    },
    {
      path: "/booking-form",
      element: <Booking />,
    },
    {
      path: "/booking-list",
      element: isLogged ? <BookingList /> : <Navigate to="/login-form" />,
    },
    {
      path: "/booking-detail",
      element: isLogged ? <BookingDetail /> : <Navigate to="/login-form" />,
    },
    {
      path: "/booking-confirmation",
      element: <BookingConfirmation />,
    },
    {
      path: "/booking-success-message",
      element: <BookingSuccessMessage />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/corporate-transfer",
      element: <CorporateTransfer />,
    },
    {
      path: "/cruise-port-transfort",
      element: <CruisePortTransport />,
    },
    {
      path: "/cruise-port-transfer-info",
      element: <CruisePortTransportInfo />,
    },
    {
      path: "/drive-with-us",
      element: <DriveWithUs />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/feedback-form",
      element: <FeedbackForm />,
    },
    {
      path: "/feedbacks",
      element: <Feedbacks />,
    },
    {
      path: "/forgot-password",
      element: !isLogged ? <ForgottenPassword /> : <Navigate to="/" />,
    },
    {
      path: "/group-transfer",
      element: <GroupTransfer />,
    },
    {
      path: "/login-form",
      element: !isLogged ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/our-vehicle",
      element: <Vehicles />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/reset-password",
      element: <PasswordReset />,
    },
    {
      path: "/reset-password-complete",
      element: <PasswordResetComplete />,
    },
    {
      path: "/result",
      element: <Result />,
    },
    {
      path: "/site-map",
      element: <SiteMap />,
    },
    {
      path: "/sightseeing-tour",
      element: <SightSeeingTour />,
    },
    {
      path: "/signup-form",
      element: <SignUp />,
    },
    {
      path: "/station-transfort",
      element: <StationTransport />,
    },
    {
      path: "/station-transfort-info",
      element: <StationTransportInfo />,
    },
    {
      path: "/terms-condition",
      element: <TermsAndConditions />,
    },
    {
      path: "/transfer-inquiry",
      element: <TransferSuccessMessage />,
    },
    {
      path: "/user-profile",
      element: isLogged ? <Profile /> : <Navigate to="/login-form" />,
    },
  ]);

  if (routes == null) {
    return <PageNotFound />;
  }
  return routes;
}

export default App;
