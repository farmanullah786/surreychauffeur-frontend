import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { Link } from "react-router-dom";

const GroupTransferComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reconfirmEmail, setReconfirmEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfPassengers, setNumberOfPassengers] = useState("");
  const [date, setDate] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");

  const handleSubmit = () => {
    // Validation logic here
    // ...
    // If validation passes, proceed with form submission
    // ...
  };

  return (
    <AppLayout>
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12">
          <div className="head">
            <h2>Group Transfer</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
            <p>
              <span style={{ color: "#000000" }}>
                For our group transfers, we offer a tailored experience. Tell us
                your&nbsp;
              </span>
              <font color="#000000">requirements...</font>
            </p>
          </div>
          <div className="space"></div>
          {/* Booking Form */}
          <div className="col-md-6 full-width">
            <div className="booking-form inner-booking-form">
              <div className="stm_rent_car_form">
                <div name="book-taxi" className="book-taxi-form">
                  <h3>Group Transfer Inquiry</h3>
                  <Link to="/faq" className="faq-btn">
                    FAQ
                  </Link>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="name">
                          Name<span className="requ">*</span> :
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtName"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <span
                          id="ctl00_ContentPlaceHolder1_RequiredFieldValidator1"
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
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span
                          id="ctl00_ContentPlaceHolder1_RequiredFieldValidator2"
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
                          Reconfirm Email<span className="requ">*</span> :
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtReconfirmEmail"
                          value={reconfirmEmail}
                          onChange={(e) => setReconfirmEmail(e.target.value)}
                        />
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
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="number">
                          Phone Number<span className="requ">*</span> :
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
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
                        <label htmlFor="number">Date :</label>
                      </div>
                      <div className="col-md-8">
                        <input
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
                        <label htmlFor="req">
                          Tell Us About Your Requirement
                          <span className="requ">*</span>{" "}
                        </label>
                        <p>Pick up dates, from where to where and etc...</p>
                      </div>
                      <div className="col-md-8">
                        <textarea
                          rows="2"
                          cols="20"
                          id="ctl00_ContentPlaceHolder1_txtSpecial"
                          value={specialRequirements}
                          onChange={(e) =>
                            setSpecialRequirements(e.target.value)
                          }
                        ></textarea>
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
                    <div className="col-md-12 btndiv">
                      <a
                        id="ctl00_ContentPlaceHolder1_btnSubmit"
                        className="btn"
                        href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$ContentPlaceHolder1$btnSubmit", "", true, "a", "", false, true))'
                        onClick={handleSubmit}
                      >
                        SUBMIT
                      </a>
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
          <div class="col-md-6 full-width ct-block group-block">
            <div class="sppb-column">
              <div class="sppb-column-addons">
                <div
                  id="sppb-addon-1496028281276"
                  class="sppb-hidden-md sppb-hidden-lg clearfix"
                >
                  <div class="sppb-empty-space  clearfix"></div>
                </div>
                <div class="col-md-12 no-padding">
                  <h2>GROUP TRANSFERS</h2>
                  <p class="MsoNormal" style={{textAalign:'justify'}}>
                    <span lang="EN-US">
                      If you need helpin organizing group transfers, then you’ve
                      come to the right place. Wespecialize in group transfers
                      of any size. From small groups with multipletransportation
                      needs to large groups requiring big vehicles like a mini
                      bus oreven a coach, we do it all. And we’re a lot more
                      flexible that this – You canorganize transportation
                      tailored specifically to your needs or just leave
                      theplanning to us.
                    </span>
                  </p>
                  <p></p>
                  <p class="MsoNormal" style={{textAalign:'justify'}}>
                    <span lang="EN-US">
                      You will have adedicated accounts manager/booking agent
                      who will take care of scheduling yourjourneys and ensuring
                      everything goes smoothly at the time of the transfers.You
                      will also have direct communication with our team of
                      controllers and liveupdates on driver/passenger statuses.
                      We even provide the option of having anon-site
                      representative at airports/hotels to coordinate with
                      passengers.
                      {/* <o:p /> */}
                    </span>
                  </p>
                </div>
                <div class="col-md-12 no-padding">
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-1.jpg"}
                      alt="gt-1"
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-2.jpg"}
                      alt="gt-2"
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-3.jpg"}
                      alt="gt-3"
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-3.jpg"}
                      alt="gt-3"
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-1.jpg"}
                      alt="gt-1"
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gt-2.jpg"}
                      alt="gt-2"
                      class="img-responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </AppLayout>
  );
};

export default GroupTransferComponent;
