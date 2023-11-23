import React from "react";
import { Link } from "react-router-dom";

const CruisePortTransport = () => {
  return (
    <div
      className="container-fluid no-padding cruise-port-transport transport2"
      id="cruise"
    >
      <div className="section-padding"></div>
      {/* Container */}
      <div className="container text-center">
        <h3>Cruise Port Transport</h3>
        <p>
          <span style={{ color: "#000000" }}>
            Pink Berry Cars provide 24 hours cruise port and sea port transfers
            (car and driver) to and from anywhere in the United Kingdom.
          </span>
        </p>
        <h4>
          <span style={{ color: "#000000" }}>
            Where will I meet my driver at the cruise port?
          </span>
        </h4>
        <p>
          <span style={{ color: "#000000" }}>
            We offer meet and greet service on all cruise port pickups.
          </span>
        </p>
        <Link
          to="/cruise-port-transfer-info"
          title="Read More"
          className="read-more-btn2"
        >
          Read More
        </Link>
      </div>
      {/* Container/- */}
      <div className="section-padding"></div>
    </div>
  );
};

export default CruisePortTransport;
