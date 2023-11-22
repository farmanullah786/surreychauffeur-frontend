import React from "react";
import { Link } from "react-router-dom";

const AirportTransportSection = () => {
  return (
    <div
      className="container-fluid no-padding airport-transport transport"
      id="airport-transfer"
    >
      <div className="section-padding"></div>
      {/* Container */}
      <div className="container text-center">
        <h3>Airport Transport</h3>
        <p>
          Pink Berry Cars provide 24 hours airport transfers (car and driver)
          for all London airports to and from anywhere in the United Kingdom.
          Our aim is to offer the best reliable and safest transfers service to
          all our customers at a competitive price.
        </p>
        <h4>Where will I meet my driver at the airport?</h4>
        <p>
          We offer meet and greet service on all airport and cruise port
          pickups. On your arrival, our drivers wait in the airport/seaport
          arrival hall with your name on the sign board.
        </p>
        <h4>What if my flight is delayed?</h4>
        <p>
          We will monitor your flight and our driver will meet you accordingly.
          There are no additional charges for flight delays.
          <br />
        </p>
        <p></p>
        <Link
          to="/airport-transfer-detail"
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

export default AirportTransportSection;
