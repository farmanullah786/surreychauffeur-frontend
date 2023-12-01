import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode as jwt_decode } from "jwt-decode";

const CarDetails = (props) => {
  const isLogged = localStorage.getItem("authToken") ?? null;
  const navigate = useNavigate();
  const [uuidObject, setUuidObject] = useState({
    price: props?.location_details?.one_way
      ? parseFloat(props?.location_vehicle?.price_per_km).toFixed(2)
      : props?.location_details?.two_way
      ? parseFloat(props?.location_vehicle?.price_per_km * 2 + 8).toFixed(2)
      : 0,
    car_id: props?.location_vehicle?.id,
    uuid: props?.uuid,
  });

  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="car2-list">
        <div className="car2-details-img">
          <img
            src={
              process.env.REACT_APP_BASE_URL + props?.location_vehicle?.image
            }
            alt="rs"
            className="img-responsive"
            style={{ height: "120px" }} // Set your desired height in pixels
          />
        </div>
        <div className="car2-details">
          <div className="car2-details-h2">
            <h2>
              <span id="ctl00_ContentPlaceHolder1_rpt_ctl00_lblVehicleName">
                {props?.location_vehicle?.name}
              </span>
              <br />
              <span className="car2-details-h2set">
                <span id="ctl00_ContentPlaceHolder1_rpt_ctl00_lblAlternateVehicleName"></span>
              </span>
            </h2>
          </div>
          <div
            id="ctl00_ContentPlaceHolder1_rpt_ctl00_dvdescription"
            className="car2-details-txt"
          >
            <span
              id="ctl00_ContentPlaceHolder1_rpt_ctl00_Label1"
              style={{
                fontWeight: "bold",
                paddingLeft: "2px",
                paddingRight: "2px",
              }}
            >
              {props?.location_vehicle?.name}
            </span>
            can accommodate
            <span
              id="ctl00_ContentPlaceHolder1_rpt_ctl00_lblPassenger"
              style={{
                fontWeight: "bold",
                paddingLeft: "2px",
                paddingRight: "2px",
              }}
            >
              {props?.location_vehicle?.passenger_capacity}
            </span>
            passengers,
            <span
              id="ctl00_ContentPlaceHolder1_rpt_ctl00_lblLuggage"
              style={{
                fontWeight: "bold",
                paddingLeft: "2px",
                paddingRight: "2px",
              }}
            >
              {props?.location_vehicle?.check_in_luggage_capacity}
            </span>
            medium bags and
            <span
              id="ctl00_ContentPlaceHolder1_rpt_ctl00_lblHandLuggage"
              style={{
                fontWeight: "bold",
                paddingLeft: "2px",
                paddingRight: "2px",
              }}
            >
              {props?.location_vehicle?.hand_luggage_capacity}
            </span>
            hand luggage.
          </div>

          <p>
            <span
              id="ctl00_ContentPlaceHolder1_rpt_ctl00_Label2"
              style={{
                fontWeight: "bold",
                paddingLeft: "1px",
                paddingRight: "1px",
              }}
            >
              {props?.location_vehicle?.passenger_capacity}
            </span>
            Passengers &nbsp; <i className="fa fa-user" aria-hidden="true"></i>
          </p>
          <p>
            <span
              id="ctl00_ContentPlaceHolder1_rpt_ctl00_Label3"
              style={{
                fontWeight: "bold",
                paddingLeft: "1px",
                paddingRight: "1px",
              }}
            >
              {props?.location_vehicle?.check_in_luggage_capacity}
            </span>
            Check In-Luggage &nbsp;{" "}
            <i className="fa fa-suitcase" aria-hidden="true"></i>
          </p>
          <p>
            <span
              id="ctl00_ContentPlaceHolder1_rpt_ctl00_Label4"
              style={{
                fontWeight: "bold",
                paddingLeft: "1px",
                paddingRight: "1px",
              }}
            >
              {props?.location_vehicle?.hand_luggage_capacity}
            </span>
            Hand Luggage &nbsp;{" "}
            <i className="fa fa-briefcase" aria-hidden="true"></i>
          </p>

          {props?.location_details?.one_way && (
            <div id="ctl00_ContentPlaceHolder1_rpt_ctl00_pnlOneWay">
              <div className="car2-details-bult"></div>
              <div className="car2-details-price">
                <div className="car2-details-price1">
                  <input
                    id="ctl00_ContentPlaceHolder1_rpt_ctl00_rdoOneWay"
                    type="radio"
                    value="rdoOneWay"
                    checked="checked"
                    //   onClick={() => SetUniqueRadioButton("rpt.*RadioButton", this)}
                  />
                  One Way:
                </div>
                <div className="car2-details-price2">
                  <span className="clsOneWay">
                    £&nbsp;&nbsp;
                    <span id="ctl00_ContentPlaceHolder1_rpt_ctl00_lblOneWay">
                      {parseFloat(
                        props?.location_vehicle?.price_per_km
                      ).toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )}
          {props?.location_details?.two_way && (
            <div id="ctl00_ContentPlaceHolder1_rpt_ctl00_pnlTwoWay">
              <div className="car2-details-pricelist">
                <div className="car2-details-pricelist1">
                  1<sup>st</sup> Ride:{" "}
                  <span>
                    £
                    <span id="ctl00_ContentPlaceHolder1_rpt_ctl00_lblTwoWayFirstJourney">
                      {parseFloat(
                        props?.location_vehicle?.price_per_km
                      ).toFixed(2)}
                    </span>
                  </span>
                </div>
                <div className="line"></div>
                <div className="car2-details-pricelist2">
                  2<sup>nd</sup> Ride:{" "}
                  <span>
                    £
                    <span id="ctl00_ContentPlaceHolder1_rpt_ctl00_lblTwoWaySecondJourney">
                      {parseFloat(
                        props?.location_vehicle?.price_per_km + 8
                      ).toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>
              <div className="car2-details-price">
                <div className="car2-details-price1">
                  <input
                    id="ctl00_ContentPlaceHolder1_rpt_ctl00_rdoReturn"
                    type="radio"
                    value="rdoReturn"
                    checked="checked"
                    // onClick={() => SetUniqueRadioButton("rpt.*RadioButton", this)}
                  />
                  Total
                </div>
                <div className="car2-details-price2">
                  <span className="clsOneWay">
                    £&nbsp;&nbsp;
                    <span id="ctl00_ContentPlaceHolder1_rpt_ctl00_lblTwoWay">
                      {parseFloat(
                        props?.location_vehicle?.price_per_km * 2 + 8
                      ).toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="reserve-btn">
            <input
              type="submit"
              value="Reserve"
              id="ctl00_ContentPlaceHolder1_rpt_ctl00_btnBookNow"
              className="btnbooknow"
              style={{ cursor: "pointer" }}
              onClick={() => {
                localStorage.setItem("uuidObject", JSON.stringify(uuidObject));
                props?.setLoadingOverlay(true);
                setTimeout(() => {
                  isLogged
                    ? navigate(`/booking-form?uuid=${props?.uuid}`)
                    : navigate(`/booking-type-selection?uuid=${props?.uuid}`);
                }, 2000);
              }}
            />
          </div>
          <center>
            <span
              style={{
                textAlign: "right",
                fontSize: "medium",
                color: "#3b0249",
              }}
            >
              <br />
            </span>
          </center>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
