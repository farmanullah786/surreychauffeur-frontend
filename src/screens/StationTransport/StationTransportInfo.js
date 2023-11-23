import React, { useEffect } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import BookingForm from "../../components/BookingForm";
import DiscountBanner from "../../components/shared/DiscountBanner";

const StationTransportInfo = () => {
  useEffect(() => {
    document.querySelector("#ctl00_dvMainContainer")?.classList.add("arp");
  }, []);
  return (
    <AppLayout>
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12 arp-t">
          <div className="col-md-6 col-sm-12 col-xs-12 right-side">
            <div className="head">
              <h2>UK Station Transport Information</h2>
              <img
                src={process.env.PUBLIC_URL + "assets/images/seprator.png"}
                alt="divider1"
              />
              <p>
                We provide 24/7 dedicated transportation services to &amp; from
                train/tube station such as:
              </p>
            </div>
            <div className="point col-md-12">
              <div className="col-md-4 col-md-offset-3">
                <p>01. Euston Station</p>
                <p>02. St Pancras Station</p>
                <p>03. Kings Cross Station</p>
                <p>04. Paddington Station</p>
              </div>
              <div className="col-md-5">
                <p>05. Victoria Station</p>
                <p>06. Waterloo Station</p>
                <p>07. Liverpool Street Station</p>
              </div>
            </div>
            <p>
              Booking your airport transportation online could not be easier
              with our secure online booking and payment system.
              <br />
              However, we are always available on the phone to assist you with
              any queries or bookings on <br />
              0203 327 6606 or 44 203 327 6606.
            </p>
          </div>
          <BookingForm />
        </div>
      </div>
      <DiscountBanner image="assets/images/banner-img4.jpg" />
    </AppLayout>
  );
};

export default StationTransportInfo;
