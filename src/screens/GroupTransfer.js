import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { Link } from "react-router-dom";
import LoadingOverlay from "../components/shared/LoadingOverlay";
import TransferInquiryForm from "../components/forms/TransferInquiryForm";

const GroupTransfer = () => {
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  return (
    <AppLayout>
       {loadingOverlay && <LoadingOverlay />}
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12">
          <div className="head">
            <h2>Group Transfer</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
            <p>
              <span style={{ color: "#000000" }}>
                For our group transfers, we offer a tailored experience. Tell us
                your&nbsp;
              </span>
              <font color="#000000">requirements...</font>
            </p>
          </div>
          <div className="space"></div>
          {/* Booking Form */}
          <div className="col-md-6 full-width">
            <div className="booking-form inner-booking-form">
              <div className="stm_rent_car_form">
                <div name="book-taxi" className="book-taxi-form">
                  <h3>Group Transfer Inquiry</h3>
                  <Link to="/faq" className="faq-btn">
                    FAQ
                  </Link>
                  <TransferInquiryForm setLoadingOverlay={setLoadingOverlay} transfer_type="group"/>
                </div>
              </div>
            </div>
          </div>
          {/* Booking Form /- */}
          <div class="col-md-6 full-width ct-block group-block">
            <div class="sppb-column">
              <div class="sppb-column-addons">
                <div
                  id="sppb-addon-1496028281276"
                  class="sppb-hidden-md sppb-hidden-lg clearfix"
                >
                  <div class="sppb-empty-space  clearfix"></div>
                </div>
                <div class="col-md-12 no-padding">
                  <h2>GROUP TRANSFERS</h2>
                  <p class="MsoNormal" style={{textAalign:'justify'}}>
                    <span lang="EN-US">
                      If you need helpin organizing group transfers, then you’ve
                      come to the right place. Wespecialize in group transfers
                      of any size. From small groups with multipletransportation
                      needs to large groups requiring big vehicles like a mini
                      bus oreven a coach, we do it all. And we’re a lot more
                      flexible that this – You canorganize transportation
                      tailored specifically to your needs or just leave
                      theplanning to us.
                    </span>
                  </p>
                  <p></p>
                  <p class="MsoNormal" style={{textAalign:'justify'}}>
                    <span lang="EN-US">
                      You will have adedicated accounts manager/booking agent
                      who will take care of scheduling yourjourneys and ensuring
                      everything goes smoothly at the time of the transfers.You
                      will also have direct communication with our team of
                      controllers and liveupdates on driver/passenger statuses.
                      We even provide the option of having anon-site
                      representative at airports/hotels to coordinate with
                      passengers.
                      {/* <o:p /> */}
                    </span>
                  </p>
                </div>
                <div class="col-md-12 no-padding">
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-1.jpg"}
                      alt="gt-1"
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-2.jpg"}
                      alt="gt-2"
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-3.jpg"}
                      alt="gt-3"
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-3.jpg"}
                      alt="gt-3"
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-1.jpg"}
                      alt="gt-1"
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-2.jpg"}
                      alt="gt-2"
                      class="img-responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </AppLayout>
  );
};

export default GroupTransfer;
