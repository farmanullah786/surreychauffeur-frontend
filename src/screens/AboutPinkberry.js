import React from "react";
import AppLayout from "../components/applayout/AppLayout";

const AboutPinkberry = () => {
  return (
    <AppLayout>
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12 abt">
          <div className="head">
            <h2>
              About <span>pinkberry</span>
            </h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />

            <div className="pp">
              <p>
                Taxi transfers to &amp; from any part of the United Kingdom. We
                provide services 24 hours, 7 days a week. Our prices are fixed
                and 35% cheaper than the metered taxis that you hire at the
                airports, seaports, stations, or on the streets!
              </p>
              <p>
                We are specialized in providing private hire transfers{" "}
                <strong>(car service with the driver)</strong>, services for to
                and from all{" "}
                <strong>
                  London Airports, UK Cruise Ports, Train/Tube Stations
                </strong>
                , to and from anywhere in the
                <strong>UK.</strong>
              </p>
              <p>
                We also offer services to other venues such as corporate events,
                day trips, and sightseeing in Central London, Cambridge, Oxford,
                Bath, Bristol Stonehenge, Windsor Castle, Salisbury, and other
                cities in and out of London.{" "}
              </p>
              <h2>Meet and Greet Service/ Meeting Point</h2>
              <p>
                We offer meet and greet service on all airport and cruise port
                pickups. On your arrival, our drivers wait in the
                airport/seaport arrival hall with your name on the signboard.
              </p>
              <h2>Flight Delays- No Extra Charge</h2>
              <p>
                As we monitor the flight's status in advance, there are no
                additional charges for flight delays.
              </p>
              <p>
                Booking your airport transportation online could not be easier
                with our secure online booking and payment system (please see on
                the left). However, we are always available on the phone to
                assist you with any queries or bookings on{" "}
                <strong>0203 327 6606</strong> or{" "}
                <strong>44 203 327 6606</strong>
              </p>
              <p>
                <br />
                <b>Registered as Pink Berry Cars ltd</b>
              </p>
            </div>

            <div className="space"></div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </AppLayout>
  );
};

export default AboutPinkberry;
