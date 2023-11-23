import React from "react";
import AppLayout from "../components/applayout/AppLayout";

const TransferSuccessMessage = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="space"></div>
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="head2">
            <p>
              Thank you for submitting your inquiries, and we will get back to
              you shortly.
              <br />
              If this is an urgent booking, please give us a call, and we will
              assist you promptly.
            </p>
          </div>
          <div className="head2">
            <img
              src={process.env.PUBLIC_URL + "assets/images/Success.png"}
              alt="Success"
              className="img-responsive"
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TransferSuccessMessage;
