import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { putRequestWithOutToken } from "../helpers/methods";

const PayPalButton = (props) => {
  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  };
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: props?.price, // Replace with your desired amount
          },
        },
      ],
    });
  };

  const updateBookingStatus = async (uuid, status) => {
    const formData = new FormData();
    formData.append("status", status);

    try {
      const response = await putRequestWithOutToken(
        `booking/${uuid}`,
        formData
      );
      if (response?.data?.status == 200 && status == "Paid") {
        props?.setLoadingOverlay(true);
        setTimeout(() => {
          props?.setLoadingOverlay(false);
        }, 3000);
        window.location.href = `http://localhost:3000/booking-success-message?uuid=${uuid}`;
      }
    } catch (error) {
      console.error(`Failed to update booking status: ${error}`);
    }
  };

  const onApprove = async (data, actions) => {
    try {
      const response = await actions.order.capture();
      if (response?.status === "COMPLETED") {
        await updateBookingStatus(props?.uuid, "Paid");
      }
    } catch (error) {
      console.error(`Error on payment approval: ${error}`);
    }
  };

  const onCancel = async () => {
    await updateBookingStatus(props?.uuid, "Cancelled");
    // Additional actions on payment cancellation
  };
  const styleOptions = {
    layout: "horizontal", // or "vertical"
    color: "blue", // "gold", "blue", "silver", "black"
    shape: "rect", // "rect" or "pill"
    label: "paypal", // "paypal", "checkout", "pay", "buynow", or "installment"
    tagline: false, // true or false
    height: 40, // maximum height of the button
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <div>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onCancel={onCancel}
          id="paypal-buttons"
          style={styleOptions}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
