import React, { useEffect, useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";
import PayPalButton from "../components/PayPalButton";
import LoadingOverlay from "../components/shared/LoadingOverlay";

const BookingSuccessMessage = (props) => {
  const [showPaypal, setShowPaypal] = useState(false);
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const uuid = params.get("uuid") ?? null;
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  useEffect(() => {
    props?.getRequestToBooking(`booking/?booked_uuid=${uuid}`);
  }, [uuid]);
  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <div className="">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ marginLeft: "50px" }}>
                    <p
                      style={{
                        fontSize: "large",
                        fontWeight: "bold",
                        marginTop: "30px",
                        marginLeft: "20px",
                        color: "#1a1a1a",
                      }}
                    >
                      Dear{" "}
                      <span
                        id="ctl00_ContentPlaceHolder1_lblName"
                        style={{ color: "Black" }}
                      >
                        {props?.booking?.passenger?.passenger_first_name +
                          " " +
                          props?.booking?.passenger?.passenger_last_name}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "large",
                        fontWeight: "normal",
                        marginTop: "30px",
                        marginLeft: "20px",
                        color: "#000",
                      }}
                    >
                      Thank you for booking with
                      <a
                        href="http://www.pinkberrycars.com"
                        target="_blank"
                        style={{ color: "blue", paddingInline: "3px" }}
                      >
                        <span id="ctl00_ContentPlaceHolder1_lblWebsiteName2">
                          www.pinkberrycars.com
                        </span>
                      </a>
                      <br />
                    </p>

                    <div
                      style={{
                        fontSize: "large",
                        fontWeight: "normal",
                        marginTop: "30px",
                        marginLeft: "20px",
                        color: "#000",
                      }}
                    >
                      <div id="ctl00_ContentPlaceHolder1_pnloneway">
                        Your Booking reference number:
                        <span
                          id="ctl00_ContentPlaceHolder1_lblbookingreferenceno"
                          style={{ color: "Red", fontWeight: "bold" }}
                        >
                          {props?.booking?.reference_number}
                        </span>
                      </div>

                      <div
                        id="ctl00_ContentPlaceHolder1_dvmultivehicle"
                        style={{ display: "none" }}
                      >
                        <br />
                        <br />
                        If you have reserved multiple vehicles, each vehicle
                        will have its own booking reference number, and you will
                        receive a separate email confirmation for each vehicle.
                        <br />
                        <br />
                      </div>
                      <div id="ctl00_ContentPlaceHolder1_pnlpaypal">
                        Please{" "}
                        <span style={{ color: "Blue" }}>
                          click the green button below
                        </span>{" "}
                        to pay via{" "}
                        {String(
                          props?.booking?.payment_type
                            ?.charAt(0)
                            .toUpperCase() +
                            props?.booking?.payment_type?.slice(1)
                        )}{" "}
                        and complete your booking.
                        <br />
                        <br />
                        {props?.booking?.status == "Paid" ? (
                          <input
                            type="button"
                            value="Payment Paid"
                            id="ctl00_ContentPlaceHolder1_btnredirectpaypal"
                            className="paypalbtn"
                          />
                        ) : props?.booking?.payment_type == "paypal" ? (
                            <div
                              id="ctl00_ContentPlaceHolder1_btnredirectpaypal"
                              style={{width:"20%"}}
                            >
                              <PayPalButton
                                uuid={uuid}
                                price={props?.booking?.price}
                                setLoadingOverlay={setLoadingOverlay}
                              />
                            </div>
                        ) : props?.booking?.payment_type == "cash" ? (
                          <input
                            type="button"
                            value="Cash"
                            id="ctl00_ContentPlaceHolder1_btnredirectpaypal"
                            className="paypalbtn"
                          />
                        ) : (
                          ""
                        )}
                      </div>

                      <span
                        id="ctl00_ContentPlaceHolder1_lblmessage1"
                        style={{ color: "Black" }}
                      ></span>
                      <br />
                      <br />
                      <span
                        id="ctl00_ContentPlaceHolder1_lblmessage2"
                        style={{ color: "Red", fontWeight: "bold" }}
                      >
                        Please Note: If the transfer is within 12 hours from the
                        time of booking, please call us to confirm your booking.
                        <br />
                        <br />
                        <u>
                          Your booking will not be completed until you make the
                          payment!!
                        </u>
                      </span>
                      <br />
                      <br />
                      <span
                        id="ctl00_ContentPlaceHolder1_lblmessage3"
                        style={{ color: "Black" }}
                      >
                        <br />
                        <br />
                        Once you made the payment, our customer service team
                        will confirm your booking via email within 12 hours from
                        the time of booking.
                        <br />
                        <br />
                        If you have any difficulties in paying via{" "}
                        {String(
                          props?.booking?.payment_type
                            ?.charAt(0)
                            .toUpperCase() +
                            props?.booking?.payment_type?.slice(1)
                        )}
                        , please choose alternative payment methods such as
                        cash, credit, or pay via phone.
                      </span>
                    </div>

                    <div
                      style={{
                        color: "darkviolet",
                        width: "100%",
                        fontWeight: "bold",
                        marginLeft: "20px",
                        padding: "3px",
                        paddingTop: "5px",
                      }}
                    >
                      Check in your JUNK/SPAM folder; sometimes, the email goes
                      into JUNK or SPAM.
                      <br />
                      And add our email address to your safe sender list.
                    </div>

                    <p
                      style={{
                        fontSize: "large",
                        fontWeight: "bold",
                        marginTop: "30px",
                        marginLeft: "20px",
                      }}
                    >
                      Thank you
                      <br />
                      <span
                        id="ctl00_ContentPlaceHolder1_lblWebsiteName"
                        style={{ color: "Black" }}
                        className="thanks-msg"
                      >
                        Pink Berry Cars
                      </span>
                      <br />
                      <span
                        id="ctl00_ContentPlaceHolder1_lblPhoneNo"
                        style={{ color: "Black" }}
                        className="thanks-msg"
                      >
                        020 3327 6606
                      </span>
                      <br />
                      <span
                        id="ctl00_ContentPlaceHolder1_lblInternationPhoneNo"
                        style={{ color: "Black" }}
                        className="thanks-msg"
                      >
                        +4420 3327 6606
                      </span>
                      <br />
                      <br />
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    booking: state?.booking?.booking_form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRequestToBooking: (url) =>
      dispatch(actionCreators.getRequestToBookingDispatch(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingSuccessMessage);
