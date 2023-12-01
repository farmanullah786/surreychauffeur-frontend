import React from "react";
import VehicleDetail from "../bookingForm/VehicleDetail";
import PassengerDetails from "../bookingForm/PassengerDetails";
import PaymentSection from "../bookingForm/PaymentSection";


const Booking = (props) => {
  return (
  
      <div id="book">
        <VehicleDetail
          location_details={props?.location_details}
          register={props?.register}
          errors={props?.errors}
          uuidObject={props?.uuidObject}
          book_vehicle = {props?.book_vehicle}
        />
        <PassengerDetails
          pickUpDate={props?.location_details?.pick_up_date}
          dropUpDate={props?.location_details?.drop_up_date}
          errors={props?.errors}
          register={props?.register}
          is_passenger={props?.is_passenger}
          getValues={props?.getValues}
          reset={props?.reset}
        />
        <PaymentSection
          register={props?.register}
          errors={props?.errors}
          isPayemnt={props?.isPayemnt}
          setIspAyment={props?.setIspAyment}
        />
      </div>
  );
};

export default Booking;
