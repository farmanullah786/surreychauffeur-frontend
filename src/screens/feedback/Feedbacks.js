import React, { useState } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Feedback = (props) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleReview = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <AppLayout>
      <div className="container-fluid">
        <div className="space"></div>
        <div className="col-md-12">
          <div className="head">
            <h2>Customer Review</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
          </div>
          <div className="space"></div>
        </div>
        <div className="review-list2">
          <div className="review-list-re">
            Average Rating:
            <span id="ctl00_ContentPlaceHolder1_lblRating">
              {props?.feedback?.average_rating?.toFixed(2)}
            </span>
            , Reviews:
            <span id="ctl00_ContentPlaceHolder1_lblReviews">
              {props?.feedback?.reviews}
            </span>
          </div>
          <Link
            to="/feedback-form"
            className="big-link"
            style={{ textAlign: "right" }}
          >
            Add Feedback
          </Link>
          <br />
        </div>
        <div className="review2-box">
          {props?.feedback?.feedback_list?.map((review, index) => (
            <div className="review2-text" key={index}>
              <div className="review2-text2">
                <div
                  className="review2-text3"
                  onClick={() => toggleReview(index)}
                >
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                  {review.message}
                  <i className="fa fa-quote-right" aria-hidden="true"></i>
                </div>
                <div className="review2-name">{review.name}</div>
                <div className="review2-name2">{review.location}</div>
              </div>
              {openIndex === index && (
                <div className="review-details">
                  {/* Additional details for the open review, if needed */}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="space"></div>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    feedback: state.feedback.feedbacks,
  };
};

export default connect(mapStateToProps)(Feedback);
