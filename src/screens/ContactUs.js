import React from "react";
import AppLayout from "../components/applayout/AppLayout";

const ContactUs = () => {
  return (
    <AppLayout>
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12">
          <div className="head">
            <h2>Contact Us</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
          </div>
          <div className="space"></div>
          {/* Booking Form */}
          <div className="col-md-6 full-width">
            <div className="booking-form inner-booking-form">
              <div className="stm_rent_car_form">
                <div name="book-taxi" className="book-taxi-form">
                  <h3>DROP US A MAIL</h3>
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
                        />
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
                        />
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
                          name="ctl00$ContentPlaceHolder1$txtReconfirmEmail"
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtReconfirmEmail"
                        />
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
                          name="ctl00$ContentPlaceHolder1$txtPhoneNumber"
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtPhoneNumber"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="req">
                          Tell Us About Your Requirement
                          <span className="requ">*</span>
                        </label>
                      </div>
                      <div className="col-md-8">
                        <textarea
                          name="ctl00$ContentPlaceHolder1$txtReq"
                          rows="2"
                          cols="20"
                          id="ctl00_ContentPlaceHolder1_txtReq"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 btndiv">
                      <input
                        type="submit"
                        name="ctl00$ContentPlaceHolder1$btnsubmit"
                        value="SUBMIT"
                        id="ctl00_ContentPlaceHolder1_btnsubmit"
                        className="btn"
                      />
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
          <div className="col-md-6 full-width">
            <div className="sppb-column">
              <div className="sppb-column-addons">
                <div
                  id="sppb-addon-1496028281276"
                  className="sppb-hidden-md sppb-hidden-lg clearfix"
                >
                  <div className="sppb-empty-space  clearfix"></div>
                </div>
                <span style={{ fontWeight: "bold", fontSize: "14pt" }}>
                  Email
                </span>
                <br />
                <span style={{ fontSize: "12pt" }}>info@pinkberrycars.com</span>
                <br />
                <br />
                <br />
                <span style={{ fontWeight: "bold", fontSize: "14pt" }}>
                  Phone Number (UK)
                </span>
                <br />
                <span style={{ fontSize: "12pt" }}>
                  UK Callers: 0203 327 6606
                  <br />
                  International Callers: 44 203 327 6606
                </span>
                <br />
                <br />
                <br />
                <span style={{ fontWeight: "bold", fontSize: "14pt" }}>
                  Address (UK)
                </span>
                <br />
                <span style={{ fontSize: "12pt" }}>
                  Pink Berry Cars, 7 Back Lane
                  <br />
                  Romford, London
                  <br />
                  RM6 4BP
                  <br />
                  United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </AppLayout>
  );
};

export default ContactUs;