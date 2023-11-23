import React, { useEffect } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { Link } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import PickupLocationsTable from "../components/sections/PickupLocationsTable";
import DiscountBanner from "../components/shared/DiscountBanner";
const AirportTransportInfo = () => {
  useEffect(() => {
    document.querySelector("#ctl00_dvMainContainer")?.classList.add("arp");
  }, []);
  return (
    <AppLayout>
      <div class="container-fluid">
        <div class="space"></div>
        <div class="col-md-12 arp-t">
          <div className="col-md-6 col-sm-12 col-xs-12 right-side">
            <div className="head">
              <h2>UK Airport Transport Information</h2>
              <img
                src={process.env.PUBLIC_URL + "assets/images/seprator.png"}
                alt="divider1"
              />
              <p>
                Pink Berry Cars provide 24 hours airport transfers (car and
                driver) for all London airports to and from anywhere in the
                United Kingdom. Our aim is to offer the best reliable and safest
                transfers service to all our customers at a competitive price.
              </p>
            </div>
            <p className="un-p">Where will I meet my driver at the airport ?</p>
            <p>
              We offer meet and greet service on all airport and cruise port
              pickups. On your arrival, our drivers wait in the airport/seaport
              arrival hall with your name on the sign board.
            </p>
            <p className="un-p">What if my flight is delayed ?</p>
            <p>
              We will monitor your flight and our driver will meet you
              accordingly. There are no additional charges for flight delays.
            </p>
            <div className="point">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <p>01. London Heathrow Airport</p>
                <p>02. London Gatwick Airport</p>
                <p>03. London Stansted Airport</p>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <p>04. London Luton Airport</p>
                <p>05. LondonCity Airport</p>
                <p>06. Southend Airport</p>
                <p>
                  <br />
                </p>
                <h4 style={{ textAlign: "left" }}>
                  Our meet points at the airport
                </h4>
               <PickupLocationsTable/>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
      <DiscountBanner image="assets/images/banner-img5.jpg"/>
          </AppLayout>
  );
};

export default AirportTransportInfo;
