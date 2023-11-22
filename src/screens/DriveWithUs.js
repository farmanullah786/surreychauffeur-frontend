import React from "react";
import AppLayout from "../components/applayout/AppLayout";

const DriveWithUs = () => {
  return (
    <AppLayout>
      <div className="container-fluid" style={{marginBottom:'40px'}}>
        <div className="space"></div>
        <div className="col-md-12">
          <div className="head">
            <h2>Drive With Us</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
            <p>
              Airport transfers and long-distance jobs, we are not a local
              minicab. We have plenty of work for you...
            </p>
          </div>
          <div className="space"></div>
          {/* Booking Form */}
          <div className="col-md-6 full-width">
            <div className="booking-form inner-booking-form">
              <div className="stm_rent_car_form">
                <div name="book-taxi" className="book-taxi-form">
                  <h3>Drive With Us Inquiry</h3>
                  <a href="faq.html" className="faq-btn">
                    FAQ
                  </a>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="name">
                          Name<span className="requ">*</span>:
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtName"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="email">
                          Email<span className="requ">*</span>:
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtEmail"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="email">
                          Reconfirm Email<span className="requ">*</span>:
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtReconfirmEmail"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="number">
                          Phone Number<span className="requ">*</span>:
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtPhoneNumber"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="name">
                          When Can You Start<span className="requ">*</span>:
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtWhencanyoustart"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12 chkbox">
                      <div className="col-md-4">
                        <label htmlFor="pco">
                          Have PCO Licence<span className="requ">*</span>:
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          id="ctl00_ContentPlaceHolder1_rbtnhavepcolicenceyes"
                          type="radio"
                          name="ctl00$ContentPlaceHolder1$a"
                          value="rbtnhavepcolicenceyes"
                          checked="checked"
                          required
                        />
                        <label>Yes</label>
                        <input
                          id="ctl00_ContentPlaceHolder1_rbtnhavepcolicenceno"
                          type="radio"
                          name="ctl00$ContentPlaceHolder1$a"
                          value="rbtnhavepcolicenceno"
                          required
                        />
                        <label>No</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="name">
                          Your Vehicle Make & Model
                          <span className="requ">*</span>:
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtYourVehicleMakeandModel"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label htmlFor="req">Any Additional Comments*</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtAnyAdditionalComments"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-sm-12">
                      <div className="col-md-4">
                        <label>
                          Security Code:<span className="requ">*</span>
                        </label>
                      </div>
                      <div className="col-md-8">
                        <img
                          src={
                            process.env.PUBLIC_URL + "assets/images/CImage.jpg"
                          }
                          width="300"
                        />
                        <br />
                        <br />
                        <input
                          type="text"
                          id="ctl00_ContentPlaceHolder1_txtCode"
                          required
                        />
                        <br />
                        <br />
                        <span
                          id="ctl00_ContentPlaceHolder1_lblsecurityerror"
                          style={{ color: "Red", fontWeight: "bold" }}
                        ></span>
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
                        style={{paddingBottom:"22px"}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Booking Form /- */}
          <div className="col-md-6 full-width ct-block">
            <h2>Drive with us.</h2>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
              <span lang="EN-US">
                With the traffic in London being what it is, you must be fed-up
                with having to wait around for small 10 - 20 pounds jobs, some
                taking even an hour to complete. We’ll, it’s a good thing you’ve
                bumped into us. Unlike most taxi companies in London, Pink Berry
                Cars is not your local mini cab firm. No - we’re much more. Our
                specialty lies in airport transfers, catering all major airports
                across London, and in long-distance journeys to and from the
                capital.
              </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
              <span lang="EN-US">
                What’s more, we pre-allocate jobs a day in advance to start you
                off with and our team of controllers plan out the rest of your
                day. You know exactly where you are picking the passenger up
                from and where they are being dropped off. You’ll be working
                with a very professional and friendly team at our head office.
              </span>
            </p>
            <p></p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
              <span lang="EN-US">
                Drivers from all across the UK are welcome. You will need a PCO
                License to work with us.
                {/* <o:p /> */}
              </span>
            </p>
          </div>
        </div>
        <div className="space"></div>
      </div>
    </AppLayout>
  );
};

export default DriveWithUs;
