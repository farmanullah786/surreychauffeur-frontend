import React, { useEffect } from "react";
import AppLayout from "../components/applayout/AppLayout";

const FAQ = () => {
  useEffect(() => {
    const toggleElements = document.querySelectorAll(".toggle");

    toggleElements.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const innerElement = this.querySelector(".toggle-inner");
        innerElement.classList.toggle("show");
      });
    });
  }, []);
  return (
    <AppLayout>
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12">
          <div className="head">
            <h2>FAQ</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
          </div>
          <div className="space"></div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">Are you a licensed company?</span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>
                Yes. We are officially licensed by the public carriage to carry
                the public.
              </p>
            </div>
          </div>
          {/* END OF TOGGLE */}
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">
                  Do I have to be a member to use your service?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>No, anyone can use our service.</p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title  ">
              <h3>
                {" "}
                <span class="title-name">
                  Are your prices per car or per person?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>
                Our prices are per car please see vehicle capacity for further
                details.
              </p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title  ">
              <h3>
                {" "}
                <span class="title-name">
                  Where will I meet your driver at the airport?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>
                Our driver will meet you in the arrival area near the airport
                information with your name board.
              </p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">
                  What happens if I cannot find my driver?{" "}
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>
                Having ensured that you have correctly followed the Pink Berry
                Cars instructions on your confirmation, contact us on the
                contact number also supplied on your confirmation.
              </p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">
                  What if the flight is delayed or early?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>
                We will check the flight status on the day and meet you
                according.
              </p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">
                  We have childen travelling with us, can you provide
                  child/infant seats?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>
                Yes. Please tell us the ages of the children and we can provide
                up to two child/infant seats free of charge per transfer.
              </p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">Can I pay the driver cash?</span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>No, pre pay with the card</p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">Can I pay by credit card? </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>Yes, you may pay by card in advance.</p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">
                  Can I make a booking on the phone?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>Yes, you can make a booking on the phone.</p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">
                  I have completed a booking form, will I receive an e- mail
                  confirmation?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>
                Yes, we will confirm your booking within 24 hours of receipt. If
                your transfer is within 24 hours from the time of booking,
                please call us for quick confirmation.
              </p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">
                  How early do I need to book my car?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>
                The earlier the better. However, 12 hours would be recommended.
                If you are making a last minute booking, it is best to call us
                to confirm.
              </p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">Can I cancel my booking?</span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>
                Yes, you can cancel or postpone a booking. Please see Terms and
                Conditions.
              </p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">
                  If I have paid by credit card and cancel my booking and will I
                  get a refund?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>Yes, you can get a refund. Please Terms and Conditions</p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">
                  Is gratuity included in the price?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>No. It is at the passengers discretion.</p>
            </div>
          </div>
          <div class="toggle">
            <div class="toggle-title ">
              <h3>
                {" "}
                <span class="title-name">
                  How does your membership discount work?
                </span>{" "}
              </h3>
            </div>
            <div class="toggle-inner">
              <p>
                If you are our member and if you use our service on a regular
                basis, you can be eligible for a membership discount. This will
                be reviewed individually by our account managers.
              </p>
            </div>
          </div>

          <div
            class="col-md-12 more"
            style={{ marginBottom: "40px !important" }}
          >
            <a href="contact-us.html">
              More Questions&nbsp;<i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>

        <div className="space "></div>
      </div>
    </AppLayout>
  );
};

export default FAQ;
