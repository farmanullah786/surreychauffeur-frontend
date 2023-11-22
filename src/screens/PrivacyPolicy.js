import React from "react";
import AppLayout from "../components/applayout/AppLayout";

const PrivacyPolicy = () => {
  return (
    <AppLayout>
      <div className="container-fluid" style={{marginBottom:"50px"}}>
        <div className="space"></div>
        <div className="col-md-12">
          <div className="head">
            <h2>Privacy Policy Information</h2>{" "}
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              orci nisi, eleifend eu rhoncus eget, ultrices a magna.
              Pellentesque ut consectetur ante, nec malesuada elit. Maecenas
              cursus sagittis mattis. Quisque vehicula purus pretium, efficitur
              ligula efficitur, faucibus tellus. Aenean faucibus aliquam sem,
              sit amet elementum nisl bibendum quis. Praesent eu auctor lectus.
              Donec id urna a sem suscipit rutrum et ut leo.
            </p>
          </div>
          <div className="space"></div>
          <div className="pp">
            <h2>Card payment Payment</h2>
            <p>
              Card payment are processed by SagePay and PayPal. Please click the
              link below for more information.
            </p>
            <a
              href="http://www.sagepay.co.uk/policies/security-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.sagepay.co.uk/policies/security-policy
            </a>
            <h2>How do you protect my information?</h2>
            <p>
              We only use your information in order to fulfill our obligations
              to you and for administration purposes.
            </p>
            <p>
              We will only disclose sufficient information to our drivers and
              sub-contractors in order that they can provide the service
              requested.
            </p>
            <p>
              We will never sell or disclose your information to a 3rd party
              except where required by law.
            </p>
            <p>
              We use a top-of-the-range security certificate from Thawte to
              protect your credit card and personal details.
            </p>
            <p>
              Our staff only have access to the information required to do their
              job.
            </p>
            <h2>What type of information do you collect?</h2>
            <p>
              Any information that you submit into a form may be collected and
              stored by the web or database server to improve our operations and
              provide the best possible service.
            </p>
            <p>
              In common with most websites, we automatically collect certain
              information about your computer to analyze how our customers use
              our website. This information includes your IP address and details
              of your web browser.
            </p>
            <p>
              Email and communications with the site are archived until no
              longer required.
            </p>
            <h2>Do you use cookies?</h2>
            <p>
              Yes. Cookies are required to provide interactive functionality
              such as logging in and preparing quotes.
            </p>
            <h2>What information do you send me?</h2>
            <p>
              Emails generated in the course of your use of our website such as
              booking confirmations.
            </p>
            <p>Emails keeping you informed on the progress of your booking.</p>
            <p>
              If you have any questions or concerns regarding how we use your
              information, please contact our control center on 0208 1234 971
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicy;
