import React from "react";
import AppLayout from "../components/applayout/AppLayout";

const Vehicles = () => {
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
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="car-list">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "assets/images/vehicle-toyota-hybrid-2016.png"
                }
                alt="Saloon Car"
              />
              <div className="car-details">
                <h2>Saloon Car</h2>
                <p>4 Passengers</p>
                <p>2 Check In-Luggage</p>
                <p>2 Hand Luggage</p>
              </div>
            </div>
          </div>
          {/* Add similar blocks for other vehicle types */}
          {/* ... */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="car-list">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "assets/images/Upload/pinkberrycars/four-8seater.png"
                }
                alt="32 PASSENGERS"
              />
              <div className="car-details">
                <h2>32 PASSENGERS</h2>
                <p>32 Passengers</p>
                <p>32 Check In-Luggage</p>
                <p>32 Hand Luggage</p>
              </div>
            </div>
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
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="car-list">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "assets/images/Upload/pinkberrycars/estate-mpvplus.png"
                }
              />
              <div class="car-details">
                <h2>9 PASSENGERS</h2>
                <p>9 Passengers</p>
                <p>9 Check In-Luggage</p>
                <p>9 Hand Luggage</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="car-list">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "assets/images/Upload/pinkberrycars/mpv-mpvplus.png"
                }
              />
              <div class="car-details">
                <h2>10 PASSENGERS</h2>
                <p>10 Passengers</p>
                <p>10 Check In-Luggage</p>
                <p>10 Hand Luggage</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space"></div>
      </div>
    </AppLayout>
  );
};

export default Vehicles;
