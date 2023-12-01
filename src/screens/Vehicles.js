import React from "react";
import AppLayout from "../components/applayout/AppLayout";
import { connect } from "react-redux";

const Vehicles = (props) => {
  return (
    <AppLayout>
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12 ov">
          <div className="head">
            <h2>Our Vehicles</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
          </div>
          <div className="space"></div>
          <div className="row single_cars">
            {props?.single_cars?.map((vehicle,index) => (
              <div
                className="col-md-4 col-sm-6 col-xs-12"
                key={index}
              >
                <div className="car-list">
                  <img
                    src={process.env.REACT_APP_BASE_URL + vehicle?.image}
                    alt={vehicle?.name}
                  />
                  <div className="car-details">
                    <h2>{vehicle.name}</h2>
                    <p>{vehicle.passenger_capacity} Passengers</p>
                    <p>{vehicle.check_in_luggage_capacity} Check In-Luggage</p>
                    <p>{vehicle.hand_luggage_capacity} Hand Luggage</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-12 ov">
          <br />
          <div className="head">
            <h2>Multiple Vehicles</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
          </div>
          <div className="space"></div>
          {props?.multiple_cars?.map((vehicle,index) => (
            <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
              <div className="car-list">
                <img
                  src={process.env.REACT_APP_BASE_URL + vehicle?.image}
                  alt={vehicle?.name}
                />
                <div className="car-details">
                  <h2>{vehicle?.name}</h2>
                  <p>{vehicle?.passenger_capacity} Passengers</p>
                  <p>{vehicle?.check_in_luggage_capacity} Check In-Luggage</p>
                  <p>{vehicle?.hand_luggage_capacity} Hand Luggage</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space"></div>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    single_cars: state?.vehicles?.vehicles?.single_cars,
    multiple_cars: state?.vehicles?.vehicles?.multiple_cars,
  };
};

export default connect(mapStateToProps)(Vehicles);
