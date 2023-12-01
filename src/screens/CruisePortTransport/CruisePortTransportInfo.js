import React, { useEffect, useState } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import DiscountBanner from "../../components/shared/DiscountBanner";
import LocationDetails from "../../components/forms/LocationDetails";
import LoadingOverlay from "../../components/shared/LoadingOverlay";

const CruisePortTransportInfo = () => {
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  useEffect(() => {
    document.querySelector("#ctl00_dvMainContainer")?.classList.add("arp");
  }, []);
  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <div class="container-fluid">
        <div class="space"></div>
        <div class="col-md-12 arp-t">
          <div class="col-md-6 col-sm-12 col-xs-12 right-side">
            <div class="head">
              <h2>Cruise Port Transport Information</h2>{" "}
              <img
                src={process.env.PUBLIC_URL + "assets/images/seprator.png"}
                alt="divider1"
              />
              <p>
                Pink Berry Cars provide 24 hours cruise port and sea port
                transfers (car and driver) to and from anywhere in the United
                Kingdom..
              </p>
            </div>
            <p class="un-p">Where will I meet my driver at the cruise port ?</p>
            <p>
              We offer meet and greet service on all cruise port pickups. On
              your arrival, our drivers wait in the airport/seaport arrival hall
              with your name on the sign board.
            </p>
            <div class="point">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <p>01. Southampton Port</p>
                <p>02. Harwich Port</p>
                <p>03. Hover Port</p>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <p>04. Portsmouth Port</p>
                <p>05. Newhaven Port</p>
                <p>06. Ramsgate Port</p>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <p>07. Weymouth Port</p>
                <p>08. Plymouth Port</p>
                <p>09. Poole Harbour</p>
              </div>
            </div>
          </div>

          {/* add */}
          <div class="col-md-6 col-sm-12 col-xs-12 left-side">
            <div class="booking-form-inner">
              <div class="stm_rent_car_form">
              <LocationDetails setLoadingOverlay={setLoadingOverlay}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DiscountBanner image="assets/images/banner-img3.jpg" />
    </AppLayout>
  );
};

export default CruisePortTransportInfo;
