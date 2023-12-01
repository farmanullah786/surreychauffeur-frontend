import React from "react";

const RatingComponent = ({ id,title, leftPosition, percentage }) => {
  return (
    <div className="rating-content">
      <p>{title}</p>
      <div id={id} className="barfiller">
        <div className="tipWrap" style={{ display: "inline" }}>
          <span
            className="tip"
            style={{
              left: leftPosition,
              transition: "left 3s ease-in-out 0s",
            }}
          >
            {percentage}%
          </span>
        </div>
        <span className="fill" data-percentage={percentage}></span>
      </div>
    </div>
  );
};

export default RatingComponent;
