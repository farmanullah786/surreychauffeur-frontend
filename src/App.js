import React from "react";
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { Navigate, useRoutes } from "react-router-dom";
import PageNotFound from "./screens/PageNotFound";
import LoginForm from "./screens/LoginForm";
import SignUpForm from "./screens/SignUpForm";
import AboutPinkberry from "./screens/AboutPinkberry";
import ContactUs from "./screens/ContactUs";
import TermsAndConditions from "./screens/TermsAndConditions";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import SiteMap from "./screens/SiteMap";
import FAQ from "./screens/FAQ";
import Feedback from "./screens/Feedback";
import AddFeedback from "./screens/AddFeedback";
import GroupTransferForm from "./screens/GroupTransferForm";
import CorporateTransfer from "./screens/CorporateTransfer";
import SightSeeingTour from "./screens/SightSeeingTour";
import Vehicles from "./screens/Vehicles";
import DriveWithUs from "./screens/DriveWithUs";
import MainFile from "./screens/MainFile";
import AirportTransfer from "./screens/AirportTransfer";
import CruisePortTransport from "./screens/CruisePortTransport";
import StationTransport from "./screens/StationTransport";
import AirportTransportInfo from "./screens/AirportTransportInfo";
import CruisePortTransportInfo from "./screens/CruisePortTransportInfo";
import StationTransportInformation from "./screens/StationTransportInformation";
import ForgottenPassword from "./screens/ForgottenPassword";
import ChangePassword from "./screens/ChangePassword";
import ResetPassword from "./screens/ResetPassword";

import "animate.css";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import BillingForm from "./components/BillingForm";

function App() {
  const isLogged = localStorage.getItem("authToken") ?? null;
  const user = isLogged && jwt_decode(isLogged);
  const password_token = localStorage.getItem("password_token") ?? null;
  let routes = useRoutes([
    {
      path: "/",
      element: <MainFile />,
    },
    {
      path: "/login-form",
      element: !isLogged ? <LoginForm />: <Navigate to="/"/>,
    },
    {
      path: "/forgot-password",
      element: !isLogged ? <ForgottenPassword />: <Navigate to="/"/>,
    },
    {
      path: "/change-password",
      element: <ChangePassword />,
    },
    {
      path: "/user-profile",
      element: isLogged ? <PersonalDetailsForm />: <Navigate to="/login-form"/>,
    },
    {
      path: "/billing-form",
      element: isLogged ? <BillingForm />: <Navigate to="/login-form"/>,
    },
    {
      path: "/password-changed",
      element:  <ResetPassword />,
    },
    {
      path: "/signup-form",
      element: <SignUpForm />,
    },
    {
      path: "/about-pink-berry",
      element: <AboutPinkberry />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },

    {
      path: "/terms-condition",
      element: <TermsAndConditions />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/site-map",
      element: <SiteMap />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/feedback",
      element: <Feedback />,
    },
    {
      path: "/add-feedback",
      element: <AddFeedback />,
    },
    {
      path: "/group-transfer",
      element: <GroupTransferForm />,
    },
    {
      path: "/airport-transfer",
      element: <AirportTransfer />,
    },
    {
      path: "/airport-transfer-detail",
      element: <AirportTransportInfo />,
    },
    {
      path: "/cruis-port-transfort",
      element: <CruisePortTransport />,
    },
    {
      path: "/cruise-port-transfer-info",
      element: <CruisePortTransportInfo />,
    },
    {
      path: "/station-transfort",
      element: <StationTransport />,
    },
    {
      path: "/station-transfort-info",
      element: <StationTransportInformation />,
    },
    {
      path: "/corporate-transfer",
      element: <CorporateTransfer />,
    },
    {
      path: "/sightseeing-tour",
      element: <SightSeeingTour />,
    },
    {
      path: "/our-vehicle",
      element: <Vehicles />,
    },
    {
      path: "/drive-with-us",
      element: <DriveWithUs />,
    },
  ]);
  if (routes == null) {
    return <PageNotFound />;
  }
  return routes;
}

export default App;
