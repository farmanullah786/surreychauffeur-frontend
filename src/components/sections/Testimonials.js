import React from "react";
import { Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../shared/style.css";
import RatingComponent from "../RatingComponent";
import { connect } from "react-redux";

const Testimonials = (props) => {
  return (
    <div className="container-fluid no-padding section-6">
      {/* Container */}
      <div className="container">
        <div className="col-md-6 testimonial-sec">
          <div className="section-padding"></div>
          <div className="section-header">
            <h3>
              What <span className="pink-text">People Say</span>
            </h3>
          </div>
          <div
            id="testimonial-slider"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              {/* Paste your testimonials HTML here */}

              <div className="carousel-inner" role="listbox">
                <Swiper
                  modules={[Autoplay, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  effect="fade"
                  speed={1000}
                  autoplay={{ delay: 3000 }} // Set the delay between slides
                  loop={true}
                >
                  {props?.feedbacks?.map((review, index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <div
                        id="ctl00_ContentPlaceHolder1_rptReview_ctl00_dvitemreview"
                        className="item active"
                      >
                        <span className="client-name">{review?.title}</span>
                        <p>
                          <i className="fa fa-quote-left"></i>
                          {review?.message}
                          <i className="fa fa-quote-right"></i>
                        </p>
                        <span className="client-name">{review?.name}</span>
                        <span className="client-designation">
                          {review?.location}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl06_dvitemreview"
                  className="item"
                >
                  <span className="client-name"></span>
                  <p>
                    <i className="fa fa-quote-left"></i>
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name"></span>
                  <span className="client-designation"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-padding"></div>
        </div>

        <div className="col-md-6 feedback">
          <div className="section-padding"></div>
          <div className="section-header">
            <h3>
              Average <span className="pink-text">Feedback Ratings</span>
            </h3>
          </div>

          {/* Feedback ratings */}
          <RatingComponent
            id="bar1"
            title="Punctuality"
            leftPosition="526.13px"
            percentage={99}
          />
          <RatingComponent
            id="bar2"
            title="Comfort"
            leftPosition="503.983px"
            percentage={95}
          />
          <RatingComponent
            id="bar3"
            title="Service"
            leftPosition="526.13px"
            percentage={99}
          />
          <RatingComponent
            id="bar4"
            title="Value for Money"
            leftPosition="498.447px"
            percentage={94}
          />
          <RatingComponent
            id="bar5"
            title="Vehicle Condition"
            leftPosition="526.13px"
            percentage={99}
          />

          <div className="section-padding"></div>
        </div>
      </div>
      {/* Container/- */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    feedbacks: state.feedback.feedbacks?.feedback_list,
  };
};

export default connect(mapStateToProps)(Testimonials);
