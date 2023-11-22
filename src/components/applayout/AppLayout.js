import React, { useEffect, useState } from "react";
import StickyContactBar from "../StickyContactBar";
import Header from "../Header";
import LoadingIndicator from "../LoadingIndicator";
import MainFooter from "../MainFooter";
import CopyrightBar from "../CopyrightBar";
import AllGetRequests from "../../AllGetRequests";

const AppLayout = (props) => {
  return (
    <>
    <AllGetRequests/>
      <StickyContactBar />
      <div id="ctl00_dvMainContainer" class="main-container">
        {" "}
        <Header />
        <LoadingIndicator />
        <div id="ctl00_UpdatePanel3">{props.children}</div>
        <MainFooter />
        <CopyrightBar />
      </div>
    </>
  );
};

export default AppLayout;
