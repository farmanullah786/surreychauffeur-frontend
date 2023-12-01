import React, { useEffect, useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode as jwt_decode } from "jwt-decode";
import LoadingOverlay from "../components/shared/LoadingOverlay";
import { postRequest, postRequestWithOutToken } from "../helpers/methods";

const BookingConfirmation = (props) => {
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  const navigate = useNavigate();
  const isLogged = localStorage.getItem("authToken") ?? null;
  const user = isLogged && jwt_decode(isLogged);
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const uuid = params.get("uuid") ?? null;

  const [bookingData, setBookingData] = useState(
    localStorage.getItem("bookingData")
      ? JSON.parse(localStorage.getItem("bookingData"))
      : null
  );
  console.log("bookingData", bookingData?.is_passenger);

  const postRequestToBookingForm = async () => {
    const {
      agreement,
      check_in_luggage_capacity,
      coming_from,
      first_child_seat_required,
      second_child_seat_required,
      flight_landing_date,
      flight_number,
      hand_luggage_capacity,
      hours,
      minutes,
      is_passenger,
      location_details,
      passenger_capacity,
      payment_type,
      price,
      special_requirements,
      vehicle,
      waiting_time,
      booker_full_name,
      booker_email,
      booker_mobile_country_code,
      booker_mobile_number,
      booker_home_country_code,
      booker_home_number,
      passenger_first_name,
      passenger_last_name,
      passenger_email,
      passenger_home_number,
      passenger_home_country_code,
      passenger_mobile_country_code,
      passenger_mobile_number,
      return_flight_number,
      return_hours,
      return_minutes,
      return_waiting_time,
    } = bookingData;

    setLoadingOverlay(true);
    const formData = new FormData();
    if (isLogged) {
      formData.append("user", user?.user_id);
    }
    if (is_passenger == "yes") {
      formData.append("passenger_first_name", passenger_first_name);
      formData.append("passenger_last_name", passenger_last_name);
      formData.append("passenger_email", passenger_email);
      formData.append(
        "passenger_mobile_country_code",
        passenger_mobile_country_code
      );
      formData.append("passenger_mobile_number", passenger_mobile_number);
      formData.append(
        "passenger_home_country_code",
        passenger_home_country_code
      );
      formData.append("passenger_home_number", passenger_home_number);
    }
    if (is_passenger == "no") {
      formData.append("booker_full_name", booker_full_name);
      formData.append("booker_email", booker_email);
      formData.append("booker_mobile_country_code", booker_mobile_country_code);
      formData.append("booker_mobile_number", booker_mobile_number);
      formData.append("booker_home_country_code", booker_home_country_code);
      formData.append("booker_home_number", booker_home_number);
      formData.append("passenger_first_name", passenger_first_name);
      formData.append("passenger_last_name", passenger_last_name);
      formData.append(
        "passenger_mobile_country_code",
        passenger_mobile_country_code
      );
      formData.append("passenger_mobile_number", passenger_mobile_number);
    }

    if (bookingData?.two_way) {
      formData.append("return_flight_number", return_flight_number);
      formData.append("return_hours", return_hours);
      formData.append("return_minutes", return_minutes);
      formData.append("return_waiting_time", return_waiting_time);
    }
    formData.append("vehicle", vehicle);
    formData.append("price", price);
    formData.append("location_details", location_details);
    formData.append("hours", hours);
    formData.append("minutes", minutes);
    formData.append("flight_number", flight_number);
    formData.append("coming_from", coming_from);
    formData.append("flight_landing_date", flight_landing_date);
    formData.append("is_passenger", is_passenger);
    formData.append("passenger_capacity", passenger_capacity);
    formData.append("check_in_luggage_capacity", check_in_luggage_capacity);
    formData.append("hand_luggage_capacity", hand_luggage_capacity);
    formData.append("first_child_seat_required", first_child_seat_required);
    formData.append("second_child_seat_required", second_child_seat_required);
    formData.append("special_requirements", special_requirements);
    formData.append("waiting_time", waiting_time);
    formData.append("payment_type", payment_type);
    formData.append("agreement", agreement);
    try {
      const response = await postRequestWithOutToken("booking/", formData);
      console.log(response, "response");
      if (response?.data?.status_code === 200) {
        const bookind_id = response?.data?.data["id"];
        localStorage.removeItem("bookingData");
        localStorage.removeItem("uuidObject");
        setTimeout(() => {
          setLoadingOverlay(false);
          navigate(`/booking-success-message?uuid=${bookind_id}`);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setLoadingOverlay(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (!bookingData) {
      navigate("/");
    }
  }, [bookingData]);
  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}

      <section className="container">
        <div className="content3">
          {isLogged && (
            <div
              id="ctl00_ContentPlaceHolder1_divmembernameheader"
              class="memname"
            >
              <h4>
                Hello{" "}
                <span id="ctl00_ContentPlaceHolder1_lblMember">
                  {user?.full_name}
                </span>
              </h4>
            </div>
          )}
          <div className="contentBook" style={{ marginTop: "60px" }}>
            <div id="ctl00_ContentPlaceHolder1_upd">
              <div class="heading">
                Double check the below information and continue
              </div>
              <table
                style={{
                  color: "Black",
                  fontFamily: "Arial",
                  width: "100%",
                  fontSize: "medium",
                  backgroundColor: "white",
                  padding: "2% 2%",
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
                            {bookingData?.is_passenger == "yes"
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
                            {bookingData?.is_passenger == "yes"
                              ? bookingData?.passenger_first_name
                              : bookingData?.booker_full_name}
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
                            {bookingData?.passenger_capacity}
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
                            {bookingData?.is_passenger == "yes"
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
                            {bookingData?.is_passenger == "yes"
                              ? bookingData?.passenger_last_name
                              : bookingData?.booker_email}
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
                            {bookingData?.hand_luggage_capacity}
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
                            {bookingData?.is_passenger == "yes"
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
                            {bookingData?.is_passenger == "yes"
                              ? bookingData?.passenger_email
                              : bookingData?.booker_mobile_country_code +
                                bookingData?.booker_mobile_number}{" "}
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
                            {bookingData?.check_in_luggage_capacity}
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
                            {bookingData?.is_passenger == "yes"
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
                            {bookingData?.is_passenger == "yes"
                              ? bookingData?.passenger_mobile_country_code +
                                bookingData?.passenger_mobile_number
                              : bookingData?.booker_home_country_code +
                                bookingData?.booker_home_number}{" "}
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
                            {bookingData?.car_name}
                          </td>
                        </tr>

                        {bookingData?.is_passenger == "no" && (
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
                                {bookingData?.passenger_first_name}
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
                                {bookingData?.passenger_last_name}
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
                            {bookingData?.is_passenger == "yes"
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
                            {bookingData?.is_passenger == "yes"
                              ? bookingData?.passenger_home_country_code +
                                bookingData?.passenger_home_number
                              : bookingData?.booker_mobile_country_code +
                                bookingData?.booker_mobile_number}{" "}
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
                            {bookingData?.special_requirements}
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
                            {bookingData?.first_child_seat_required}
                            <br />
                            Second Child Seat(Free):{" "}
                            {bookingData?.second_child_seat_required}
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
                                    {bookingData?.label_pick_up_location}
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
                                    {bookingData?.flight_number}
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
                                    {bookingData?.coming_from}
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
                                    {bookingData?.flight_landing_date}
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
                                    {bookingData?.hours +
                                      ":" +
                                      bookingData?.minutes}
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
                                    {bookingData?.waiting_time + " "}
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
                                    {bookingData?.label_drop_up_location}{" "}
                                  </td>
                                </tr>

                                {bookingData?.two_way && (
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
                                        {bookingData?.drop_flight_landing_date}
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
                                        {bookingData?.return_hours +
                                          ":" +
                                          bookingData?.return_minutes}
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
                              £ {bookingData?.price}
                            </span>{" "}
                            Payment Status:{" "}
                            <span style={{ color: "#008000" }}>
                              {String(
                                bookingData?.payment_type
                                  ?.charAt(0)
                                  .toUpperCase() +
                                  bookingData?.payment_type?.slice(1)
                              )}
                            </span>
                            .
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "100%", textAlign: "center" }}>
                      <a
                        id="ctl00_ContentPlaceHolder1_btnEditBack"
                        className="button3 onlight"
                        style={{ marginInline: "5px" }}
                        onClick={() => {
                          navigate(`/booking-form?uuid=${uuid}`);
                        }}
                      >
                        Go Back & Edit
                      </a>
                      <a
                        style={{ marginInline: "5px" }}
                        id="ctl00_ContentPlaceHolder1_ImageButton1"
                        className="button4 onlight"
                        onClick={postRequestToBookingForm}
                      >
                        Confirm
                      </a>
                      <span
                        id="ctl00_ContentPlaceHolder1_lblError"
                        style={{
                          color: "Red",
                          display: "inline-block",
                          marginLeft: "10px",
                        }}
                      ></span>
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

export default connect(mapStateToProps)(BookingConfirmation);

// const mapStateToProps = (state) => {
//   return {
//     booking: state?.booking?.booking_form,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getRequestToBooking: (url) =>
//       dispatch(actionCreators.getRequestToBookingDispatch(url)),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BookingConfirmation);
