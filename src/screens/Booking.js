import React, { useEffect, useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";
import { useForm } from "react-hook-form";
import { jwtDecode as jwt_decode } from "jwt-decode";
import LoadingOverlay from "../components/shared/LoadingOverlay";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/forms/Booking";

const Booking = (props) => {
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("authToken") ?? null;
  const user = isLogged && jwt_decode(isLogged);
  const [uuidObject, setUuidObject] = useState(
    localStorage.getItem("uuidObject")
      ? JSON.parse(localStorage.getItem("uuidObject"))
      : null
  );
  const [bookingData, setBookingData] = useState(
    localStorage.getItem("bookingData")
      ? JSON.parse(localStorage.getItem("bookingData"))
      : null
  );
  const [isPayemnt, setIspAyment] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  console.log(uuidObject,bookingData,props?.book_vehicle,props?.location_details)
  const postRequestToBooking = (data) => {
    setIspAyment(false);
    if (!data?.payment_type) {
      setIspAyment(true);
      return;
    }

    if (
      !data?.flight_number &&
      !data?.coming_from &&
      !data?.is_passenger &&
      !data?.first_name &&
      !data?.last_name &&
      !data?.email &&
      !data?.m_country &&
      !data?.m_number &&
      !data?.agreement &&
      !data?.payment_type
    ) {
      return;
    }

    if (isLogged) {
      data["user"] = user?.user_id;
    }
    data["vehicle"] = uuidObject?.car_id;
    data["car_name"] = props?.book_vehicle?.name;
    data["label_pick_up_location"] =
      props?.location_details?.label_pick_up_location;
    data["label_drop_up_location"] =
      props?.location_details?.label_drop_up_location;
    data["flight_landing_date"] = props?.location_details?.pick_up_date;
    data["drop_flight_landing_date"] = props?.location_details?.drop_up_date;
    data["location_details"] = uuidObject?.uuid;
    data["two_way"] =props?.location_details?.two_way;
    data["price"] = uuidObject?.price;
    localStorage.setItem("bookingData", JSON.stringify(data));
    setLoadingOverlay(true);

    setTimeout(() => {
      setLoadingOverlay(false);
      navigate(`/booking-confirmation?uuid=${uuidObject?.uuid}`);
    }, 2000);
  };

  useEffect(() => {
    reset({
      passenger_first_name: bookingData
        ? bookingData?.passenger_first_name
        : isLogged
        ? user?.first_name
        : "",
      passenger_last_name: bookingData
        ? bookingData?.passenger_last_name
        : isLogged
        ? user?.last_name
        : "",
      passenger_email: bookingData
        ? bookingData?.passenger_email
        : isLogged
        ? user?.email
        : "",
      passenger_mobile_country_code: bookingData
        ? bookingData?.passenger_mobile_country_code
        : isLogged
        ? user?.country
        : "",
      passenger_mobile_number: bookingData
        ? bookingData?.passenger_mobile_number
        : isLogged
        ? user?.phone
        : "",

      flight_number: bookingData ? bookingData?.flight_number : "",
      return_flight_number: bookingData ? bookingData?.return_flight_number : "",
      
      booker_full_name: bookingData ? bookingData?.booker_full_name : "",
      booker_email: bookingData ? bookingData?.booker_email : "",
      rb_email: bookingData ? bookingData?.rb_email : "",
      booker_mobile_country_code: bookingData ? bookingData?.booker_mobile_country_code : "",
      booker_mobile_number: bookingData ? bookingData?.booker_mobile_number : "",
      booker_home_country_code: bookingData ? bookingData?.booker_home_country_code : "",
      booker_home_number: bookingData ? bookingData?.booker_home_number : "",
      passenger_home_country_code: bookingData ? bookingData?.passenger_home_country_code : "",
      passenger_home_number: bookingData ? bookingData?.passenger_home_number : "",
      
      
      coming_from: bookingData ? bookingData?.coming_from : "",
      is_passenger: bookingData ? bookingData?.is_passenger : "yes",
      agreement: bookingData ? bookingData?.agreement : "",
      payment_type: bookingData ? bookingData?.payment_type : "",
      hours: bookingData ? bookingData?.hours : "",
      return_hours: bookingData ? bookingData?.return_hours : "",
      minutes: bookingData ? bookingData?.minutes : "",
      return_minutes: bookingData ? bookingData?.return_minutes : "",
      re_email: bookingData ? bookingData?.re_email : "",

      waiting_time: bookingData ? bookingData?.waiting_time : "",
      return_waiting_time: bookingData ? bookingData?.return_waiting_time : "",
      is_passenger: bookingData ? bookingData?.is_passenger : "",
      passenger_capacity: bookingData ? bookingData?.passenger_capacity : "",
      check_in_luggage_capacity: bookingData
        ? bookingData?.check_in_luggage_capacity
        : "",
      hand_luggage_capacity: bookingData
        ? bookingData?.hand_luggage_capacity
        : "",
      first_child_seat_required: bookingData
        ? bookingData?.first_child_seat_required
        : "",
      second_child_seat_required: bookingData
        ? bookingData?.second_child_seat_required
        : "",
      special_requirements: bookingData
        ? bookingData?.special_requirements
        : "",
    });
  }, []);
  useEffect(() => {
    props?.getRequestToBooking(
      `vehicles/?book_vehicle=${uuidObject?.car_id}&uuid=${uuidObject?.uuid}`
    );
  }, []);
  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <section className="container clearfix">
        <div className="content3 booking-form-section">
          <div id="contentBook">
            {isLogged && (
              <div
                id="ctl00_ContentPlaceHolder1_divmembernameheader"
                className="memname"
              >
                <h4>
                  Hello{" "}
                  <span id="ctl00_ContentPlaceHolder1_lblMember"> {}</span>
                </h4>
              </div>
            )}
            <div id="book-h1">Booking Form:</div>
            <form onSubmit={handleSubmit(postRequestToBooking)}>
              <BookingForm
                register={register}
                errors={errors}
                location_details={props?.location_details}
                book_vehicle={props?.book_vehicle}
                uuidObject={uuidObject}
                pickUpDate={props?.location_details?.pick_up_date}
                is_passenger={bookingData?.is_passenger}
                isPayemnt={props?.isPayemnt}
                setIspAyment={props?.setIspAyment}
                getValues={getValues}
              />
            </form>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    location_details: state?.booking?.booking_form?.location_details,
    book_vehicle: state?.booking?.booking_form?.book_vehicle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRequestToBooking: (url) =>
      dispatch(actionCreators.getRequestToBookingDispatch(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
