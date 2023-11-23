import React from "react";

const LoadingOverlay = () => {
  return (
    <div
      id="ctl00_UpdateProgress1"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust alpha for darkness
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999,
      }}
    >
      <div>
        <img
          alt=""
          style={{ position: "relative", top: "10%" }}
          src={process.env.PUBLIC_URL + "assets/images/loading_2.gif"}
        />
      </div>
    </div>
  );
};

export default LoadingOverlay;
