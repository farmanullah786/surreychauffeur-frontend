import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import BookingListTableRow from "../components/BookingListTableRow";
import { connect } from "react-redux";
import LoadingOverlay from "../components/shared/LoadingOverlay";

const BookingList = (props) => {
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}

      <section className="">
        <div className="container-fluid">
          <div className="space"></div>
          <div className="col-md-12">
            <div className="container">
              <ul className="clearfix" style={{ listStyle: "none" }}>
                <li style={{ width: "100%" }}>
                  <h1>Bookings List</h1>
                  <div className="bookinglist">
                    <div>
                      <table
                        cellSpacing="0"
                        rules="all"
                        border="1"
                        id="ctl00_ContentPlaceHolder1_grd"
                        style={{
                          borderCollapse: "collapse",
                          textAlign: "center",
                        }}
                      >
                        <tbody>
                          <tr className="booking-list">
                            <th scope="col">Booked on</th>
                            <th scope="col">ID</th>
                            <th scope="col">Passenger Name</th>
                            <th scope="col">
                              <span id="ctl00_ContentPlaceHolder1_grd_ctl01_lblPickupDate">
                                Pick Up Date
                              </span>
                            </th>
                            <th scope="col">From Location</th>
                            <th scope="col">To Location</th>
                            <th scope="col">Status</th>
                            <th scope="col">View Detail</th>
                          </tr>
                          {props?.booking_lists?.map((booking_list,index) => (
                            <BookingListTableRow booking_list={booking_list}  setLoadingOverlay={setLoadingOverlay} key={index}/>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="ctl00_ContentPlaceHolder1_divContent"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space"></div>
      </section>
    </AppLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    booking_lists: state?.bookingList?.booking_list,
  };
};

export default connect(mapStateToProps)(BookingList);
