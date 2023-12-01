import React from "react";
import { Link, useNavigate } from "react-router-dom";
const BookingListTableRow = (props) => {
  const navigate = useNavigate()
  return (
    <tr className="table100-head">
      <td style={{ width: "10%" }}>
        {" "}
        {props?.booking_list?.booked_on}
      </td>
      <td style={{ width: "10%" }}>{props?.booking_list?.reference_number}</td>
      <td style={{ width: "10%" }}>
        {props?.booking_list?.passenger?.passenger_first_name +
          " " +
          props?.booking_list?.passenger?.passenger_last_name}
      </td>
      <td style={{ width: "10%" }}>
        <span id="ctl00_ContentPlaceHolder1_grd_ctl02_lblPickup">
          {props?.booking_list?.location_details?.pick_up_date}{" "}
        </span>
      </td>
      <td style={{ width: "15%" }}>
        {props?.booking_list?.location_details?.label_pick_up_location}
      </td>
      <td style={{ width: "15%" }}>
        {props?.booking_list?.location_details?.label_drop_up_location}
      </td>
      <td style={{ width: "10%" }}> {props?.booking_list?.status}</td>
      <td style={{ width: "10%" }}>
        <Link
          id="ctl00_ContentPlaceHolder1_grd_ctl02_lnk"
          style={{ color: "Black", textDecoration: "underline" }}
          onClick={() => {
            props?.setLoadingOverlay(true);
            setTimeout(() => {
              navigate(`/booking-detail?booking_id=${props?.booking_list?.id}`);
            }, 2000);
          }}
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default BookingListTableRow;
