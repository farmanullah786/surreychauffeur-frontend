import React, { useEffect, useState } from "react";
import AirportSelect, { airportOptions } from "./shared/AirportSelect";
import CruisePortSelect, { cruisePortOptions } from "./shared/CruisePortSelect";
import TubeStationSelect, {
  tubeStationOptions,
} from "./shared/TubeStationSelect";

const DynamicLocationSelector = (props) => {
  const [selectedOption, setSelectedOption] = useState("<--SELECT-->");
  const [selectedValue, setSelectedValue] = useState("");
  const [airport, setAirport] = useState(false);
  const [postCode, setPostCode] = useState(false);
  const [address, setAddress] = useState(false);
  const [cruisePort, setCruisePort] = useState(false);
  const [stations, setStations] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  const changeState = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setSelectedValue(selectedValue);

    // Define a mapping of selected values to types
    const typeMapping = {
      138: "airport",
      139: "post_code",
      140: "address",
      142: "cruise_port",
      143: "stations",
      // Add other mappings as needed
    };

    // Reset all states
    setAirport(false);
    setPostCode(false);
    setAddress(false);
    setCruisePort(false);
    setStations(false);

    // Update the selected state based on the value
    if (typeMapping[selectedValue]) {
      const selectedType = typeMapping[selectedValue];
      switch (selectedType) {
        case "airport":
          setAirport(true);
          break;
        case "post_code":
          setPostCode(true);
          break;
        case "address":
          setAddress(true);
          break;
        case "cruise_port":
          setCruisePort(true);
          break;
        case "stations":
          setStations(true);
          break;
        // Add other cases as needed
        default:
          // Handle other cases if needed
          break;
      }

      // Update the type of location in the parent component
      if (props?.className === "pick-up-location") {
        props?.setTypeOfPickUpLocation(selectedType);
      } else {
        props?.setTypeOfDropUpLocation(selectedType);
      }
    }
  };

  const handleDynamicChange = (e) => {
    const selectedValue = e.target.value;
    let selectedOption;
    if (airport) {
      selectedOption = airportOptions.find(
        (option) => option.value === selectedValue
      );
    }
    if (cruisePort) {
      selectedOption = cruisePortOptions.find(
        (option) => option.value === selectedValue
      );
    }
    if (stations) {

      selectedOption = tubeStationOptions.find(
        (option) => option.value === selectedValue
      );
    }
    if (props?.className === "pick-up-location") {
      props?.setPickUpLocation(selectedValue);
      props?.setIdentifierPickUpLocation(selectedOption?.identifier)
      props?.setLabelPickUpLocation(selectedOption?.label)
    } else if (props?.className === "drop-up-location") {
      props?.setDropUpLocation(selectedValue);
      props?.setIdentifierDropUpLocation(selectedOption?.identifier)
      props?.setLabelDropUpLocation(selectedOption?.label)
    }
  };

  const shouldShowLabel =
    airport || postCode || address || cruisePort || stations;

  useEffect(() => {
    if (props?.is_form_submitted) {
      setSelectedOption("<--SELECT-->");
      setSelectedValue("");
      setAirport(false);
      setPostCode(false);
      setAddress(false);
      setCruisePort(false);
      setStations(false);
    }
  }, [props?.is_form_submitted]);
  return (
    <div className="row">
      <div className={`form-group col-md-4 col-sm-4 ${props.className}`}>
        <label htmlFor="transport_type">
          {props.className === "pick-up-location"
            ? "Pick-Up Location"
            : "Drop-Up Location"}
        </label>
        <select
          id="ctl00_ContentPlaceHolder1_Booking_ddlFrom"
          className={`form-control ${props.className}`}
          onChange={changeState}
        >
          <option value="<--SELECT-->">&lt;--SELECT--&gt;</option>
          <option value="138">Airport</option>
          {/* <option value="139">Postcode</option> */}
          {/* <option value="140">Address</option> */}
          <option value="142">Sea port/Cruise port</option>
          <option value="143">Stations</option>
        </select>
      </div>

      {shouldShowLabel && (
        <div className={`form-group col-md-8 col-sm-8 ${props.className}`}>
          <label htmlFor="transport_type2">Select / Enter</label>
          {selectedOption === "138" && (
            <select
              id="ctl00_ContentPlaceHolder1_Booking_ddlFromLoc"
              className={`form-control ${props.className}`}
              onChange={handleDynamicChange}
            >
              <option value="">Select Airport</option>
              <AirportSelect />
            </select>
          )}
          {/* {selectedOption === "139" && (
            <input
              type="text"
              id="ctl00_ContentPlaceHolder1_Booking_txtFrom"
              className={`form-control ${props.className}`}
              placeholder="Enter Postcode"
              onChange={handleDynamicChange}
            />
          )} */}
          {/* {selectedOption === "140" && (
            <input
              type="text"
              id="ctl00_ContentPlaceHolder1_Booking_txtFrom"
              className={`form-control ${props.className}`}
              placeholder="Enter Address"
              onChange={handleDynamicChange}
            />
          )} */}
          {selectedOption === "142" && (
            <select
              id="ctl00_ContentPlaceHolder1_Booking_ddlFromSeaport"
              className={`form-control ${props.className}`}
              onChange={handleDynamicChange}
            >
              <option value="">Select Seaport</option>
              <CruisePortSelect />
            </select>
          )}
          {selectedOption === "143" && (
            <select
              id="ctl00_ContentPlaceHolder1_Booking_ddlFromStation"
              className={`form-control ${props.className}`}
              onChange={handleDynamicChange}
            >
              <option value="">Select Tube Station</option>
              <TubeStationSelect />
            </select>
          )}
        </div>
      )}
      <div className={`col-md-12 col-sm-12 ${props.className}`}>
        <p className="gs1">
          eg: Heathrow Airport or W1K 2BH or Paddington or Southampton
        </p>
      </div>
    </div>
  );
};

export default DynamicLocationSelector;
