import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import LoadingOverlay from "../components/shared/LoadingOverlay";
import TransferInquiry from "../components/forms/TransferInquiry";
import { Link } from "react-router-dom";

const CorporateTransferComponent = () => {
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12">
          <div className="head">
            <h2>Corporate Transfer</h2>
            <span style={{ color: "#000000" }}>
              For our corporate clients, we offer a tailored experience. Tell us
              your&nbsp;
            </span>
            <font color="#000000">
              <span style={{ fontSize: "13.3333px" }}>requirements...</span>
            </font>
          </div>
          <div className="space"></div>
          {/* Booking Form */}
          <div className="col-md-6 full-width">
            <div className="booking-form inner-booking-form">
              <div className="stm_rent_car_form">
                <div name="book-taxi" className="book-taxi-form">
                  <h3>Corporate Transfer Inquiry</h3>
                  <Link to="/faq" className="faq-btn">
                    FAQ
                  </Link>
                  <TransferInquiry setLoadingOverlay={setLoadingOverlay} transfer_type="corporate"/>
                </div>
              </div>
            </div>
          </div>
          {/* Booking Form /- */}
          <div className="col-md-6 full-width ct-block corporate-block">
            <div className="sppb-column">
              <div className="sppb-column-addons">
                <div
                  id="sppb-addon-1496028281276"
                  className="sppb-hidden-md sppb-hidden-lg clearfix"
                >
                  <div className="sppb-empty-space  clearfix"></div>
                </div>
                <div className="col-md-12 no-padding">
                  <h2>FOR YOUR BUSINESS TRAVEL REQUIREMENTS.</h2>
                  <p></p>
                  <p className="MsoNormal" style={{ textAlign: "justify" }}>
                    <span lang="EN-US">
                      If you need help in organizing group transfers, then
                      you’ve come to the right place. We specialize in group
                      transfers of any size. From small groups with multiple
                      transportation needs to large groups requiring big
                      vehicles like a mini bus or even a coach, we do it all.
                      And we’re a lot more flexible that this – You can organize
                      transportation tailored specifically to your needs or just
                      leave the planning to us.
                    </span>
                  </p>
                  <p className="MsoNormal" style={{ textAlign: "justify" }}>
                    <span lang="EN-US">
                      You will have a dedicated accounts manager/booking agent
                      who will take care of scheduling your journeys and
                      ensuring everything goes smoothly at the time of the
                      transfers. You will also have direct communication with
                      our team of controllers and live updates on
                      driver/passenger statuses. We even provide the option of
                      having an on-site representative at airports/hotels to
                      coordinate with passengers.
                      {/* <o:p /> */}
                    </span>
                  </p>
                  <br />
                  <p></p>
                </div>
                <div className="col-md-12 no-padding">
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-1.jpg"}
                      alt="ct-1"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-2.jpg"}
                      alt="ct-2"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-3.jpg"}
                      alt="ct-3"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-3.jpg"}
                      alt="ct-3"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-1.jpg"}
                      alt="ct-1"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-2.jpg"}
                      alt="ct-2"
                      className="img-responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space"></div>
      </div>
    </AppLayout>
  );
};

export default CorporateTransferComponent;
