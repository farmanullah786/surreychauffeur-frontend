import React from "react";

const BannerComponent = (props) => {
  return (
    <div>
      <div className="space"></div>
      <div className="container-fluid photos-slider2 no-padding">
        <div
          id="photos-slider2"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src={process.env.PUBLIC_URL + props.image} alt="side-1" />
              <div className="container photos-slider2-content">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slider-content">
                    <p className="highlight">
                      <span>£5 Off</span> On All Transfers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 1 */}
        <div className="container-fluid no-padding discount-banner-inner">
          <div className="section-padding"></div>
          {/* Container */}
          <div className="container">
            <p className="text-center discount-banner-text">
              Our prices are fixed and 35% cheaper than the metered taxis that
              you hire at the airports, seaports, stations, or on the streets!
            </p>
          </div>
          {/* Container/- */}
          <div className="section-padding"></div>
        </div>
        {/* Section 1/- */}
      </div>
    </div>
  );
};

export default BannerComponent;
