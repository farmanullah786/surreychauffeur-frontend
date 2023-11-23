import React from "react";
import StickyContactBar from "../StickyContactBar";
import Header from "../Header";
import LoadingIndicator from '../shared/LoadingIndicator'
import Footer from "../Footer";
import CopyrightBar from "../CopyrightBar";
import AllGetRequests from "../../AllGetRequests";

const AppLayout = (props) => {
  return (
    <>
    <AllGetRequests/>
      <StickyContactBar />
      <div id="ctl00_dvMainContainer" className="main-container">
        <Header />
        <LoadingIndicator />
        <div id="ctl00_UpdatePanel3">{props.children}</div>
        <Footer />
        <CopyrightBar />
      </div>
    </>
  );
};

export default AppLayout;
