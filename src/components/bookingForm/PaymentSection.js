import React from "react";
import { Link } from "react-router-dom";

const PaymentSection = (props) => {
  return (
    <div>
      <div id="payment">
        <div id="fare">
          <img
            src={process.env.PUBLIC_URL + "assets/images/cash.png"}
            alt="ExclusiveService"
          />
        </div>
        <div id="payment-h1">Payment Type:</div>
        <div className="cashlistcvr">
          <div className="card">
            <span
              className="clsRequiredCreditCard checkbox"
              groupname="RdoPayType"
            >
              <input
                type="radio"
                id="creditCard"
                value="creditCard"
                onChange={(e) => props?.setIspAyment(e?.target?.value)}
                {...props?.register("payment_type")}
              />
              <label htmlFor="creditCard">CREDIT OR DEBIT CARD</label>
            </span>
          </div>
          <div className="card">
            <span className="clsRequiredPaypal checkbox" groupname="RdoPayType">
              <input
                type="radio"
                id="paypal"
                value="paypal"
                onChange={(e) => props?.setIspAyment(e?.target?.value)}
                {...props?.register("payment_type")}
              />
              <label htmlFor="paypal">PAYPAL</label>
            </span>
          </div>
          <div className="cash">
            <span className="clsRequiredCash checkbox" groupname="RdoPayType">
              <input
                type="radio"
                id="cash"
                value="cash"
                onChange={(e) => props?.setIspAyment(e?.target?.value)}
                {...props?.register("payment_type")}
              />
              <label htmlFor="cash">CASH</label>
            </span>
          </div>
        </div>
      </div>
      {props?.isPayemnt && (
        <p
          style={{
            color: "red",
            display: "block",
            textAlign: "center",
            padding: "4px 0",
          }}
        >
          Please select one of the payment method
        </p>
      )}
      <div id="payment">
        <div id="back">
          <a
            id="ctl00_ContentPlaceHolder1_btnBack"
            className="button2 onlight"
            href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$btnBack','')"
          >
            Back
          </a>
        </div>
        <div
          id="accept"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="bookcheckbox">
            <input
              id="ctl00_ContentPlaceHolder1_chkTC"
              type="checkbox"
              className="form-control pick-up-location"
              {...props?.register("agreement", { required: true })}
            />
            <label htmlFor="ctl00_ContentPlaceHolder1_chkTC"></label>
          </span>
          <span style={{ color: "Black", fontSize: "17px" }}>I accept the</span>
          &nbsp;
          <Link
            to="/terms-condition"
            style={{ color: "Blue", fontSize: "17px" }}
          >
            terms and conditions
          </Link>
        </div>
        <div id="next">
          <input
            type="submit"
            value="Next"
            id="ctl00_ContentPlaceHolder1_btnBookNow"
            className="button1 onlight"
          />
        </div>
      </div>
      {props?.errors?.agreement && (
        <p
          style={{
            color: "red",
            display: "block",
            textAlign: "center",
            padding: "4px 0",
          }}
        >
          Please check terms and conditions
        </p>
      )}
    </div>
  );
};

export default PaymentSection;
