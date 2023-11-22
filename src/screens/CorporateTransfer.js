import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";

const CorporateTransferComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reconfirmEmail, setReconfirmEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfPassengers, setNumberOfPassengers] = useState("");
  const [date, setDate] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");

  const handleSubmit = () => {
    // Add your form submission logic here
    // You can access the form data using the state variables (name, email, etc.)
    console.log("Form submitted:", {
      name,
      email,
      reconfirmEmail,
      phoneNumber,
      numberOfPassengers,
      date,
      specialRequirements,
    });
  };

  return (
    <AppLayout>
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12">
          <div className="head">
            <h2>Corporate Transfer</h2>
            <span style={{ color: "#000000" }}>
              For our corporate clients, we offer a tailored experience. Tell us
              your&nbsp;
            </span>
            <font color="#000000">
              <span style={{ fontSize: "13.3333px" }}>requirements...</span>
            </font>
          </div>
          <div className="space"></div>
          {/* Booking Form */}
          <div className="col-md-6 full-width">
            <div className="booking-form inner-booking-form">
              <div className="stm_rent_car_form">
                <div name="book-taxi" className="book-taxi-form">
                  <h3>Corporate Transfer Inquiry</h3>
                  <a href="faq.html" className="faq-btn">
                    FAQ
                  </a>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="name">
                          Name<span className="requ">*</span> :
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          name="ctl00$ContentPlaceHolder1$txtName"
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtName"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <span
                          id="ctl00_ContentPlaceHolder1_RequiredFieldValidator7"
                          style={{ color: "Red", display: "none" }}
                        >
                          *
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="email">
                          Email<span className="requ">*</span> :
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          name="ctl00$ContentPlaceHolder1$txtEmail"
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span
                          id="ctl00_ContentPlaceHolder1_RequiredFieldValidator6"
                          style={{ color: "Red", display: "none" }}
                        >
                          *
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="reconfirmEmail">
                          Reconfirm Email<span className="requ">*</span> :
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          name="ctl00$ContentPlaceHolder1$txtReConfirmEmail"
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtReConfirmEmail"
                          value={reconfirmEmail}
                          onChange={(e) => setReconfirmEmail(e.target.value)}
                        />
                        <span
                          id="ctl00_ContentPlaceHolder1_RequiredFieldValidator5"
                          style={{ color: "Red", display: "none" }}
                        >
                          *
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="phoneNumber">
                          Phone Number<span className="requ">*</span> :
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          name="ctl00$ContentPlaceHolder1$txtPhoneNumber"
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtPhoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <span
                          id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
                          style={{ color: "Red", display: "none" }}
                        >
                          *
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <span style={{ color: "white" }}>
                          Number of Passengers:
                        </span>
                      </div>
                      <div className="col-md-8">
                        <input
                          name="ctl00$ContentPlaceHolder1$txtNumberofPassengers"
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtNumberofPassengers"
                          value={numberOfPassengers}
                          onChange={(e) =>
                            setNumberOfPassengers(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="date">Date :</label>
                      </div>
                      <div className="col-md-8">
                        {/* Date Picker - Replace this with your preferred date picker component */}
                        <input
                          name="ctl00$ContentPlaceHolder1$txtDate"
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtDate"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="specialRequirements">
                          Tell Us About Your Requirement
                          <span className="requ">*</span>{" "}
                        </label>
                        <p>Pick up dates, from where to where and etc...</p>
                      </div>
                      <div className="col-md-8">
                        <textarea
                          name="ctl00$ContentPlaceHolder1$txtSpecial"
                          rows="2"
                          cols="20"
                          id="ctl00_ContentPlaceHolder1_txtSpecial"
                          value={specialRequirements}
                          onChange={(e) =>
                            setSpecialRequirements(e.target.value)
                          }
                        ></textarea>
                        <span
                          id="ctl00_ContentPlaceHolder1_RequiredFieldValidator3"
                          style={{ color: "Red", display: "none" }}
                        >
                          *
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 btndiv">
                      <a
                        id="ctl00_ContentPlaceHolder1_btnSubmit"
                        className="btn"
                        href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$ContentPlaceHolder1$btnSubmit", "", true, "submit", "", false, true))'
                        onClick={handleSubmit}
                      >
                        SUBMIT
                      </a>
                      <br />
                      <br />
                      <span
                        id="ctl00_ContentPlaceHolder1_lblError"
                        style={{ color: "Red" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Booking Form /- */}
          <div className="col-md-6 full-width ct-block corporate-block">
            <div className="sppb-column">
              <div className="sppb-column-addons">
                <div
                  id="sppb-addon-1496028281276"
                  className="sppb-hidden-md sppb-hidden-lg clearfix"
                >
                  <div className="sppb-empty-space  clearfix"></div>
                </div>
                <div className="col-md-12 no-padding">
                  <h2>FOR YOUR BUSINESS TRAVEL REQUIREMENTS.</h2>
                  <p></p>
                  <p className="MsoNormal" style={{ textAlign: "justify" }}>
                    <span lang="EN-US">
                      If you need help in organizing group transfers, then
                      you’ve come to the right place. We specialize in group
                      transfers of any size. From small groups with multiple
                      transportation needs to large groups requiring big
                      vehicles like a mini bus or even a coach, we do it all.
                      And we’re a lot more flexible that this – You can organize
                      transportation tailored specifically to your needs or just
                      leave the planning to us.
                    </span>
                  </p>
                  <p className="MsoNormal" style={{ textAlign: "justify" }}>
                    <span lang="EN-US">
                      You will have a dedicated accounts manager/booking agent
                      who will take care of scheduling your journeys and
                      ensuring everything goes smoothly at the time of the
                      transfers. You will also have direct communication with
                      our team of controllers and live updates on
                      driver/passenger statuses. We even provide the option of
                      having an on-site representative at airports/hotels to
                      coordinate with passengers.
                      {/* <o:p /> */}
                    </span>
                  </p>
                  <br />
                  <p></p>
                </div>
                <div className="col-md-12 no-padding">
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-1.jpg"}
                      alt="ct-1"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-2.jpg"}
                      alt="ct-2"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-3.jpg"}
                      alt="ct-3"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-3.jpg"}
                      alt="ct-3"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-1.jpg"}
                      alt="ct-1"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/ct-2.jpg"}
                      alt="ct-2"
                      className="img-responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space"></div>
      </div>
    </AppLayout>
  );
};

export default CorporateTransferComponent;
