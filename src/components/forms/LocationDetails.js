import React, { useState } from "react";
import DynamicLocationSelector from "../DynamicLocationSelector";
import { postRequestWithOutToken } from "../../helpers/methods";
import { useNavigate } from "react-router-dom";

const LocationDetails = (props) => {
  const navigate = useNavigate();
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [identifierPickUpLocation, setIdentifierPickUpLocation] = useState("");
  const [typeOfpickUpLocation, setTypeOfPickUpLocation] = useState("");
  const [labelPickUpLocation, setLabelPickUpLocation] = useState("");
  const [dropUpLocation, setDropUpLocation] = useState("");
  const [identifierDropUpLocation, setIdentifierDropUpLocation] = useState("");
  const [typeOfdropUpLocation, setTypeOfDropUpLocation] = useState("");
  const [labelDropUpLocation, setLabelDropUpLocation] = useState("");
  const [pickUpdate, setPickUpDate] = useState("");
  const [dropUpDate, setDropUpDate] = useState("");
  const [oneWay, setOneWay] = useState(false);
  const [twoWay, setTwoWay] = useState(false);
  const [vias, setVias] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const addViaTextbox = () => {
    setVias([...vias, ""]);
  };

  const removeViaTextbox = (index) => {
    const updatedTextboxes = [...vias];
    updatedTextboxes.splice(index, 1);
    setVias(updatedTextboxes);
  };

  const handleDate = (e, type_data) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    if (selectedDate >= currentDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      if (type_data == "drop") {
        setDropUpDate(formattedDate);
      }
      if (type_data == "pick") {
        setPickUpDate(formattedDate);
      }
    }
  };
  const postRequestToBooking = async (e) => {
    e.preventDefault();

    const showAlert = (message) => {
      alert(message);
      return true; // You can customize the return value based on your needs
    };

    // Validation checks
    if (
      !typeOfpickUpLocation &&
      showAlert("Please select from Pickup Location.")
    )
      return;
    if (!pickUpLocation && showAlert("Please select from Pick Up.")) return;
    if (
      !typeOfdropUpLocation &&
      showAlert("Please select from Drop Off Location.")
    )
      return;
    if (!dropUpLocation && showAlert("Please select from Destination.")) return;
    if (
      !oneWay &&
      !twoWay &&
      showAlert("Please select the journey type. One way or Return Way")
    )
      return;
    if (oneWay && !pickUpdate && showAlert("Pickup Date cannot be empty."))
      return;
    if (
      twoWay &&
      (!pickUpdate || !dropUpDate) &&
      showAlert("Pickup Pick and Drop Up Date cannot be empty.")
    )
      return;

    // Additional check for your specific condition
    if (
      !pickUpLocation &&
      !dropUpLocation &&
      !pickUpdate &&
      (!oneWay || !twoWay)
    )
      return;

    // Form data setup
    const formData = new FormData();
    formData.append("pick_up_location", pickUpLocation);
    formData.append("identifier_pick_up_location", identifierPickUpLocation);
    formData.append("label_pick_up_location", labelPickUpLocation);
    formData.append("type_of_pick_up_location", typeOfpickUpLocation);
    formData.append("drop_up_location", dropUpLocation);
    formData.append("identifier_drop_up_location", identifierDropUpLocation);
    formData.append("label_drop_up_location", labelDropUpLocation);
    formData.append("type_of_drop_up_location", typeOfdropUpLocation);
    formData.append("pick_up_date", pickUpdate);
    formData.append("drop_up_date", dropUpDate);
    formData.append("one_way", oneWay);
    formData.append("two_way", twoWay);
    formData.append("vias", vias ? JSON.stringify(vias) : []);
    props?.setLoadingOverlay(true);

    try {
      // API request
      const response = await postRequestWithOutToken(
        "location-details/",
        formData
      );
      console.log(response, "response");
      // Handle success if needed
      if (response?.data?.status_code === 200) {
        setTimeout(() => {
          props?.setLoadingOverlay(false);
          setIsFormSubmitted(true);
          navigate(`/result?uuid=${response?.data?.data["id"]}`);
          resetForm();
        }, 1000);
      }
    } catch (error) {
      setTimeout(() => {
        props?.setLoadingOverlay(false);
      }, 2000);
    }
  };

  const resetForm = () => {
    setPickUpLocation("");
    setIdentifierPickUpLocation("");
    setTypeOfPickUpLocation("");
    setLabelPickUpLocation("");
    setDropUpLocation("");
    setIdentifierDropUpLocation("");
    setTypeOfDropUpLocation("");
    setLabelDropUpLocation("");
    setPickUpDate("");
    setDropUpDate("");
    setOneWay(false);
    setTwoWay(false);
    setVias([]);
  };
  return (
    <div id="ctl00_ContentPlaceHolder1_Booking_Update1">
      {/* Booking Form  */}
      <div className="booking-form">
        <div className="container full-width">
          <div className="col-md-6 full-width">
            <div className="stm_rent_car_form">
              <div name="book-taxi" className="book-taxi-form">
                <h3>Instant Quote & Booking</h3>
                <a href="faq.aspx" className="faq-btn">
                  FAQ
                </a>
                <form method="post" onSubmit={postRequestToBooking}>
                  <DynamicLocationSelector
                    className={"pick-up-location"}
                    setPickUpLocation={setPickUpLocation}
                    setTypeOfPickUpLocation={setTypeOfPickUpLocation}
                    setIdentifierPickUpLocation={setIdentifierPickUpLocation}
                    setLabelPickUpLocation={setLabelPickUpLocation}
                    is_form_submitted={isFormSubmitted}
                  />

                  <div className="row">
                    <div id="TextBoxContainer">
                      {vias.map((text, index) => (
                        <div
                          key={index}
                          className="clsAddVia"
                          style={{ marginBottom: "-10px" }}
                        >
                          <div
                            className="col-md-12"
                            style={{ marginBottom: "10px" }}
                          >
                            <input
                              name="DynamicTextBox"
                              type="text"
                              value={text}
                              className="form-control adviafld pick-up-location"
                              onChange={(e) => {
                                const updatedTextboxes = [...vias];
                                updatedTextboxes[index] = e.target.value;
                                setVias(updatedTextboxes);
                              }}
                            />
                            <button
                              type="button"
                              className="DeleteButton crossbtn"
                              onClick={() => removeViaTextbox(index)}
                            ></button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div></div>
                  </div>

                  <DynamicLocationSelector
                    className={"drop-up-location"}
                    setDropUpLocation={setDropUpLocation}
                    setTypeOfDropUpLocation={setTypeOfDropUpLocation}
                    setIdentifierDropUpLocation={setIdentifierDropUpLocation}
                    setLabelDropUpLocation={setLabelDropUpLocation}
                    is_form_submitted={isFormSubmitted}
                  />

                  <div className="row">
                    <div className="form-group col-md-12 frmcheckbox">
                      <input
                        id="ctl00_ContentPlaceHolder1_Booking_rbtnoneway"
                        type="checkbox"
                        checked={oneWay}
                        onChange={() => {
                          setOneWay(!oneWay);
                          setTwoWay(false);
                        }}
                      />
                      <label htmlFor="ctl00_ContentPlaceHolder1_Booking_rbtnoneway">
                        One Way
                      </label>
                      <input
                        id="ctl00_ContentPlaceHolder1_Booking_rbtntwoway"
                        type="checkbox"
                        checked={twoWay}
                        onChange={() => {
                          setOneWay(false);
                          setTwoWay(!twoWay);
                        }}
                      />
                      <label htmlFor="ctl00_ContentPlaceHolder1_Booking_rbtntwoway">
                        Return Way
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    {(oneWay || twoWay) && (
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <label htmlFor="datepicker-l">Pickup Date :</label>
                        <div id="datepicker-outer-l" className="input-group">
                          <input
                            type="date"
                            id="ctl00_ContentPlaceHolder1_Booking_txtPickupDate"
                            className="form-control date_picker hasDatepicker pick-up-location"
                            placeholder="DD/MM/YYYY"
                            min={getCurrentDate()}
                            onChange={(e) => handleDate(e, "pick")}
                          />
                        </div>
                      </div>
                    )}

                    {twoWay && (
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <label htmlFor="datepicker-r">Return Date :</label>
                        <div id="datepicker-outer-r" className="input-group">
                          <input
                            type="date"
                            id="ctl00_ContentPlaceHolder1_Booking_txtReturnDate"
                            className="form-control date_picker hasDatepicker drop-up-location"
                            placeholder="DD/MM/YYYY"
                            min={getCurrentDate()}
                            onChange={(e) => handleDate(e, "drop")}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      {oneWay && (
                        <div id="ctl00_ContentPlaceHolder1_Booking_dvAddViaButton">
                          <input
                            type="button"
                            id="ctl00_ContentPlaceHolder1_Booking_btnAddVia"
                            value="Add Via"
                            className="viabtn"
                            onClick={addViaTextbox}
                          />
                        </div>
                      )}
                      <input
                        type="submit"
                        value="Get Quote"
                        id="ctl00_ContentPlaceHolder1_Booking_btnSubmit"
                        className="btn"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Form  */}
    </div>
  );
};

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
export default LocationDetails;
