import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postRequest } from "../helpers/methods";
import GoBackButton from "../components/shared/GoBackButton";

import LoadingOverlay from "../components/shared/LoadingOverlay";
import BillingForm from "../components/forms/BillingForm";
const Billing = () => {

  const [loadingOverlay, setLoadingOverlay] = useState(false);



  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <section className="main_Wrapper">
        <div className="container">
          <div className="space"></div>
          <div className="col-md-12">
            <div id="ctl00_ContentPlaceHolder1_dvLabel">
              <h3>Save your card detail to pay for the future bookings</h3>
            </div>
            <BillingForm setLoadingOverlay={setLoadingOverlay}/>
            <span
              id="ctl00_ContentPlaceHolder1_lblerror"
              style={{ color: "red" }}
            ></span>

          
            <GoBackButton/>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Billing;
