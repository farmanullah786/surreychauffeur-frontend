import React from "react";
import { Link } from "react-router-dom";

const StationTransportSection = () => {
  return (
    <div
      className="container-fluid no-padding station-transport transport"
      id="station"
    >
      <div className="section-padding"></div>
      {/* Container */}
      <div className="container text-center">
        <h3>Station Transport</h3>
        <p>
          We provide 24/7 dedicated transportation services to &amp; from
          train/tube station such as:
        </p>
        <Link
          to="/station-transfort-info"
          title="Read More"
          className="read-more-btn"
        >
          Read More
        </Link>
      </div>
      {/* Container/- */}
      <div className="section-padding"></div>
    </div>
  );
};

export default StationTransportSection;
