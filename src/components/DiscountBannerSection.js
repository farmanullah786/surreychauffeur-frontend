import React from 'react';

const DiscountBannerSection = () => {
  return (
    <div className="container-fluid no-padding discount-banner">
      <div className="section-padding"></div>
      {/* Container */}
      <div className="container">
        <p className="text-center discount-banner-text">
          Our prices are fixed and 35% cheaper than the metered taxis that you hire at the airports, seaports, stations, or on the streets!
        </p>
      </div>
      {/* Container/- */}
      <div className="section-padding"></div>
    </div>
  );
};

export default DiscountBannerSection;
