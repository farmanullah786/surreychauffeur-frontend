import React, { useEffect } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { connect } from "react-redux";

const BookingDetail = (props) => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const booking_id = params.get("booking_id") ?? null;

  const booking_detail = props?.booking_lists.filter(
    (booking_list) => booking_list.id === booking_id
  )[0];
  console.log(booking_detail, "booking_detail");
  return (
    <AppLayout>
      <section className="">
        <div className="content">
          <div className="contentCover">
            <div id="ctl00_ContentPlaceHolder1_updMain">
              <div
                className="Title"
                style={{ borderBottom: "1px solid #d4e0ee", height: "40px" }}
              >
                Booking Reference:&nbsp;
                <span id="ctl00_ContentPlaceHolder1_lblBookingReference">
                  {booking_detail?.reference_number}
                </span>
              </div>

              <table
                style={{
                  color: "Black",
                  fontFamily: "Arial",
                  width: "100%",
                  fontSize: "medium",
                  backgroundColor: "white",
                }}
                className="booking-list-detail"
              >
                <tbody>
                  <tr>
                    <td colSpan="4" align="center">
                      <span
                        id="ctl00_ContentPlaceHolder1_lblError"
                        style={{ color: "Red", fontFamily: "Arial" }}
                      ></span>
                    </td>
                  </tr>

                  <tr
                    style={{
                      borderBottom: "1px solid #d4e0ee",
                      height: "40px",
                    }}
                  >
                    <td
                      style={{
                        fontWeight: "bold",
                        width: "20%",
                        borderRight: "#d4e0ee 1px solid",
                        textAlign: "right",
                      }}
                    >
                      Created Date&nbsp;
                    </td>
                    <td align="left" style={{ width: "30%" }}>
                      <span id="ctl00_ContentPlaceHolder1_lblCreatedDate">
                        {booking_detail?.booked_on}
                      </span>
                    </td>
                    <td
                      style={{
                        fontWeight: "bold",
                        width: "20%",
                        borderRight: "#d4e0ee 1px solid",
                        textAlign: "right",
                      }}
                    >
                      Created Time&nbsp;
                    </td>
                    <td align="left" style={{ width: "30%" }}>
                      <span id="ctl00_ContentPlaceHolder1_lblCreatedTime">
                        {booking_detail?.hours + ":" + booking_detail?.minutes}
                      </span>
                    </td>
                  </tr>

                  <tr
                    style={{
                      borderBottom: "1px solid #d4e0ee",
                      height: "40px",
                      display: "none",
                    }}
                  >
                    <td
                      style={{
                        fontWeight: "bold",
                        width: "20%",
                        borderRight: "#d4e0ee 1px solid",
                      }}
                      align="right"
                    >
                      Booking Status&nbsp;
                    </td>
                    <td align="left" style={{ width: "30%" }}>
                      <span id="ctl00_ContentPlaceHolder1_lblStatus">
                        Un Paid
                      </span>
                    </td>
                    <td
                      style={{ fontWeight: "bold", width: "20%" }}
                      align="right"
                    ></td>
                    <td style={{ width: "30%" }} align="left"></td>
                  </tr>
                  <tr>
                    <td
                      id="ctl00_ContentPlaceHolder1_table"
                      colSpan={4}
                      style={{ color: "Black" }}
                    >
                      <table
                        width="100%"
                        border="0"
                        cellSpacing="0"
                        cellPadding="0"
                        style={{
                          border: "#d4e0ee 1px solid",
                          backgroundColor: "White",
                          fontFamily: "verdana, arial",
                          fontSize: "11px",
                          fontWeight: "normal",
                          color: "#000",
                          textDecoration: "none",
                        }}
                        className="booking-list-detail"
                      >
                        <tr style={{ backgroundColor: "#eff3f9" }}>
                          <td
                            colSpan={2}
                            style={{
                              padding: "5px",
                              textDecoration: "underline",
                              borderTop: "#d4e0ee 1px solid",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                              fontSize: "12px",
                            }}
                          >
                            Traveller Information
                          </td>
                          <td
                            colSpan={2}
                            style={{
                              padding: "5px",
                              textDecoration: "underline",
                              borderTop: "#d4e0ee 1px solid",
                              borderBottom: "#d4e0ee 1px solid",
                              fontSize: "12px",
                            }}
                          >
                            Carrier Details
                          </td>
                        </tr>

                        {/* Row with traveler information */}
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                              width: "15%",
                            }}
                          >
                            {booking_detail?.is_passenger == "yes"
                              ? "First Name:"
                              : "Booker's Full Name:"}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                              width: "25%",
                            }}
                          >
                            {booking_detail?.is_passenger == "yes"
                              ? booking_detail?.passenger?.passenger_first_name
                              : booking_detail?.booker?.booker_full_name}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                              width: "15%",
                            }}
                          >
                            Passenger No:
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              width: "45%",
                            }}
                            id="nop"
                          >
                            {booking_detail?.passenger_capacity}
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.is_passenger == "yes"
                              ? "Last Name:"
                              : "Booker's Email:"}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.is_passenger == "yes"
                              ? booking_detail?.passenger?.passenger_last_name
                              : booking_detail?.booker?.booker_email}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            Hand Luggage:
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.hand_luggage_capacity}
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.is_passenger == "yes"
                              ? "Email Address:"
                              : "Bookers Mobile No:"}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.is_passenger == "yes"
                              ? booking_detail?.passenger?.passenger_email
                              : booking_detail?.booker
                                  ?.booker_mobile_country_code +
                                booking_detail?.booker
                                  ?.booker_mobile_number}{" "}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            Check-in Luggage:
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.check_in_luggage_capacity}
                          </td>
                        </tr>

                        {/* Row with Mobile Number, Vehicle */}
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.is_passenger == "yes"
                              ? "Mobile Number:"
                              : "Bookers Home No:"}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.is_passenger == "yes"
                              ? booking_detail?.passenger
                                  ?.passenger_mobile_country_code +
                                booking_detail?.passenger
                                  ?.passenger_mobile_number
                              : booking_detail?.booker
                                  ?.booker_home_country_code +
                                booking_detail?.booker?.booker_home_number}{" "}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            Vehicle:
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.vehicle?.name}
                          </td>
                        </tr>

                        {booking_detail?.is_passenger == "no" && (
                          <>
                            <tr>
                              <td
                                style={{
                                  padding: "5px",
                                  borderBottom: "#d4e0ee 1px solid",
                                  borderRight: "#d4e0ee 1px solid",
                                }}
                              >
                                Passenger's First Name:
                              </td>
                              <td
                                style={{
                                  padding: "5px",
                                  borderBottom: "#d4e0ee 1px solid",
                                  borderRight: "#d4e0ee 1px solid",
                                }}
                              >
                                {
                                  booking_detail?.passenger
                                    ?.passenger_first_name
                                }
                              </td>
                              <td
                                style={{
                                  padding: "5px",
                                  borderBottom: "#d4e0ee 1px solid",
                                  borderRight: "#d4e0ee 1px solid",
                                }}
                              ></td>
                              <td
                                style={{
                                  padding: "5px",
                                  borderBottom: "#d4e0ee 1px solid",
                                }}
                              ></td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  padding: "5px",
                                  borderBottom: "#d4e0ee 1px solid",
                                  borderRight: "#d4e0ee 1px solid",
                                }}
                              >
                                Passenger's Last Name:
                              </td>
                              <td
                                style={{
                                  padding: "5px",
                                  borderBottom: "#d4e0ee 1px solid",
                                  borderRight: "#d4e0ee 1px solid",
                                }}
                              >
                                {booking_detail?.passenger?.passenger_last_name}
                              </td>
                              <td
                                style={{
                                  padding: "5px",
                                  borderBottom: "#d4e0ee 1px solid",
                                  borderRight: "#d4e0ee 1px solid",
                                }}
                              ></td>
                              <td
                                style={{
                                  padding: "5px",
                                  borderBottom: "#d4e0ee 1px solid",
                                }}
                              ></td>
                            </tr>
                          </>
                        )}
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.is_passenger == "yes"
                              ? "Home Number:"
                              : "Passenger's Mobile Number:"}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.is_passenger == "yes"
                              ? booking_detail?.passenger
                                  ?.passenger_home_country_code +
                                booking_detail?.passenger?.passenger_home_number
                              : booking_detail?.booker
                                  ?.booker_mobile_country_code +
                                booking_detail?.booker
                                  ?.booker_mobile_number}{" "}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            Special Ins:
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                            }}
                          >
                            {booking_detail?.special_requirements}
                          </td>
                        </tr>

                        {/* Row with Extra Seat */}
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            Extra Seat:
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          >
                            First Child Seat(Free):{" "}
                            {booking_detail?.first_child_seat_required}
                            <br />
                            Second Child Seat(Free):{" "}
                            {booking_detail?.second_child_seat_required}
                          </td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                              borderRight: "#d4e0ee 1px solid",
                            }}
                          ></td>
                          <td
                            style={{
                              padding: "5px",
                              borderBottom: "#d4e0ee 1px solid",
                            }}
                            id="special"
                          ></td>
                        </tr>

                        {/* Row with empty colspan */}
                        <tr>
                          <td
                            colspan="4"
                            style={{ borderBottom: "#d4e0ee 1px solid" }}
                          >
                            &nbsp;
                          </td>
                        </tr>

                        {/* Row with empty colspan */}
                        <tr>
                          <td
                            colspan="4"
                            style={{ borderBottom: "#d4e0ee 1px solid" }}
                          >
                            &nbsp;
                          </td>
                        </tr>

                        <tr valign="top">
                          <td colspan="2">
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                              style={{
                                border: "#d4e0ee 1px solid",
                                backgroundColor: "White",
                                fontFamily: "verdana, arial",
                                fontSize: "11px",
                                fontWeight: "normal",
                                color: "#000",
                                textDecoration: "none",
                              }}
                              className="booking-list-detail"
                            >
                              <tbody>
                                <tr style={{ backgroundColor: "#eff3f9" }}>
                                  <td
                                    style={{
                                      padding: "5px",
                                      textDecoration: "underline",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                      fontSize: "12px",
                                    }}
                                    colspan="2"
                                  >
                                    Pick-up Information
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    From:
                                  </td>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    {booking_detail?.location_details?.label_pick_up_location}
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    Flight Number:
                                  </td>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    {booking_detail?.reference_number}
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    Coming From:
                                  </td>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    {booking_detail?.coming_from}
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    Flight Landing Date:
                                  </td>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                    id="pickupdate"
                                  >
                                    {booking_detail?.location_details?.pick_up_date}
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    Flight Landing Time:
                                  </td>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                    id="pickuptime"
                                  >
                                    {booking_detail?.hours +
                                      ":" +
                                      booking_detail?.minutes}
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    Waiting time from the time of landing:
                                  </td>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    {booking_detail?.waiting_time + " "}
                                    minutes
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td colspan="2">
                            {/* Row with Drop-off Information */}
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                              style={{
                                border: "#d4e0ee 1px solid",
                                backgroundColor: "White",
                                fontFamily: "verdana, arial",
                                fontSize: "11px",
                                fontWeight: "normal",
                                color: "#000",
                                textDecoration: "none",
                              }}
                              className="booking-list-detail"
                            >
                              <tbody>
                                <tr style={{ backgroundColor: "#eff3f9" }}>
                                  <td
                                    style={{
                                      padding: "5px",
                                      textDecoration: "underline",
                                      borderBottom: "#d4e0ee 1px solid",
                                      fontSize: "12px",
                                    }}
                                    colspan="2"
                                  >
                                    Drop-off Information
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                      borderRight: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    To:
                                  </td>
                                  <td
                                    style={{
                                      padding: "5px",
                                      borderBottom: "#d4e0ee 1px solid",
                                    }}
                                  >
                                    {booking_detail?.location_details?.label_drop_up_location}{" "}
                                  </td>
                                </tr>

                                {booking_detail?.location_details?.two_way && (
                                  <>
                                    <tr>
                                      <td
                                        style={{
                                          padding: "5px",
                                          borderBottom: "#d4e0ee 1px solid",
                                          borderRight: "#d4e0ee 1px solid",
                                        }}
                                      >
                                        Return Date:
                                      </td>
                                      <td
                                        style={{
                                          padding: "5px",
                                          borderBottom: "#d4e0ee 1px solid",
                                          borderRight: "#d4e0ee 1px solid",
                                        }}
                                        id="returndate"
                                      >
                                        {booking_detail?.location_details?.drop_up_date}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          padding: "5px",
                                          borderBottom: "#d4e0ee 1px solid",
                                          borderRight: "#d4e0ee 1px solid",
                                        }}
                                      >
                                        Return Time:
                                      </td>
                                      <td
                                        style={{
                                          padding: "5px",
                                          borderBottom: "#d4e0ee 1px solid",
                                          borderRight: "#d4e0ee 1px solid",
                                        }}
                                        id="returntime"
                                      >
                                        {booking_detail?.return_hours +
                                          ":" +
                                          booking_detail?.return_minutes}
                                      </td>
                                    </tr>
                                  </>
                                )}
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr>
                          <td colspan="4">&nbsp;</td>
                        </tr>

                        {/* Row with Meeting Point */}
                        <tr>
                          <td
                            style={{
                              padding: "10px 5px 10px 5px",
                              fontSize: "14px",
                              border: "#d4e0ee 1px solid",
                              backgroundColor: "White",
                              textDecoration: "underline",
                              fontWeight: "bold",
                            }}
                          >
                            Meeting Point:
                          </td>
                          <td
                            style={{
                              padding: "10px 5px 10px 5px",
                              fontSize: "11px",
                              border: "#d4e0ee 1px solid",
                              backgroundColor: "#eff3f9",
                            }}
                            colspan="3"
                          >
                            After completing this booking, we will send you two
                            emails. The first email is to say that we have
                            received your booking. The second email will be sent
                            within 12 hours from the time of booking to confirm
                            your booking. If your booking is within this{" "}
                            <span style={{ color: "Red" }}>12 hours</span>,
                            please <span style={{ color: "Red" }}>CALL</span> us
                            to <span style={{ color: "Red" }}>confirm</span>.{" "}
                            <span
                              style={{ color: "Green", fontWeight: "bold" }}
                            >
                              If the pickup from the airport, our driver will
                              meet you with a name board displaying the
                              Passenger name at ARRIVALS
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colspan="4"
                            style={{ borderBottom: "#d4e0ee 1px solid" }}
                          >
                            &nbsp;
                          </td>
                        </tr>

                        {/* Row with Cost and Payment Status */}
                        <tr>
                          <td
                            colspan="4"
                            style={{
                              padding: "10px 5px 10px 5px",
                              fontSize: "18px",
                              borderBottom: "#d4e0ee 1px solid",
                              backgroundColor: "#eff3f9",
                            }}
                          >
                            GBP Cost:{" "}
                            <span style={{ color: "#008000" }} id="fares">
                              £ {booking_detail?.price}
                            </span>{" "}
                            Payment Status:{" "}
                            <span style={{ color: "#008000" }}>PAYPAL</span>.
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" valign="top">
                      &nbsp;&nbsp;
                    </td>
                    <td align="left" style={{ width: "30%" }}>
                      {/* Content for the fourth column on the row */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    booking_lists: state?.bookingList?.booking_list,
  };
};

export default connect(mapStateToProps)(BookingDetail);
