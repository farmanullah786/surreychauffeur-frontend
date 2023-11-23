import React from "react";
import { Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
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
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    {" "}
                    <div
                      id="ctl00_ContentPlaceHolder1_rptReview_ctl00_dvitemreview"
                      className="item active"
                    >
                      <span className="client-name">Great Service</span>
                      <p>
                        <i className="fa fa-quote-left"></i>I will use them
                        again
                        <i className="fa fa-quote-right"></i>
                      </p>
                      <span className="client-name">John AC</span>
                      <span className="client-designation">New York</span>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    {" "}
                    <div
                      id="ctl00_ContentPlaceHolder1_rptReview_ctl01_dvitemreview"
                      className="item"
                    >
                      <span className="client-name">Brilliant Service</span>
                      <p>
                        <i className="fa fa-quote-left"></i>I'll definitely use
                        Pink Berry Cars service again
                        <i className="fa fa-quote-right"></i>
                      </p>
                      <span className="client-name">Steve</span>
                      <span className="client-designation">
                        London, North Circular Road
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div
                      id="ctl00_ContentPlaceHolder1_rptReview_ctl02_dvitemreview"
                      className="item"
                    >
                      <span className="client-name">The Best</span>
                      <p>
                        <i className="fa fa-quote-left"></i>I have used
                        Pinkberry cars twice in the last 6 weeks. On both
                        occasions the level of service was first class.
                        Communication was brilliant. I cannot recommend them
                        enough. A big big thank you.
                        <i className="fa fa-quote-right"></i>
                      </p>
                      <span className="client-name">Paul Harland</span>
                      <span className="client-designation">London</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      id="ctl00_ContentPlaceHolder1_rptReview_ctl03_dvitemreview"
                      className="item"
                    >
                      <span className="client-name">Brilliant</span>
                      <p>
                        <i className="fa fa-quote-left"></i>We used Pink berry
                        cars twice. Always professional and helpful drivers.
                        Easy to book and they always on time. Highly recommend
                        <i className="fa fa-quote-right"></i>
                      </p>
                      <span className="client-name">Joanna Sheehan</span>
                      <span className="client-designation"></span>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl04_dvitemreview"
                  className="item"
                >
                  <span className="client-name">Excellent Service</span>
                  <p>
                    <i className="fa fa-quote-left"></i>I would just like to
                    pass our comments on for the pick up we had today.  Suresh
                    gave us a very pleasant welcome and was very helpful with
                    the luggage. He was very concerned to ensure that my wife
                    was able to get into the car easily. Suresh was a very
                    sociable driver whilst paying careful attention to the road.
                    The car itself was comfortable and well presented. We would
                    like our thanks passed on to Suresh and will be asking for
                    him to drive us when we next book.
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Jeff Morton</span>
                  <span className="client-designation">Farnborough</span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl05_dvitemreview"
                  className="item"
                >
                  <span className="client-name">
                    London Heathrow - Watford transfer and pickup
                  </span>
                  <p>
                    <i className="fa fa-quote-left"></i>First time I used
                    pinkberry. I was very impressed, both drivers were on time,
                    polite, professional and had very clean cars. Great value
                    for money. Excellent service .
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Angela Clift</span>
                  <span className="client-designation">Galway</span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl06_dvitemreview"
                  className="item"
                >
                  <span className="client-name">Great Service</span>
                  <p>
                    <i className="fa fa-quote-left"></i>Fantastic service , have
                    never used a private transfer before always had friends but
                    at great price and great service we will be using again and
                    also both trips my 2yrs old grandson was Supplied with a car
                    seat ??<i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Lorraine Fell</span>
                  <span className="client-designation">Langley</span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl07_dvitemreview"
                  className="item"
                >
                  <span className="client-name">Better than we expected.</span>
                  <p>
                    <i className="fa fa-quote-left"></i>We found Pinkberry
                    online and decided to take a chance using them to transport
                    us from Heathrow to Southampton after a transatlantic
                    flight. We were promptly met by our driver and after a short
                    walk to the vehicle, we were surprised to see a very large
                    van. Our driver was pleasant and informative and our ride
                    seemed to go very quickly. There were no surprises or
                    upcharges. We would highly recommend Pinkberry and certainly
                    use them again when the need arises.
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Marvin Wapnitsky</span>
                  <span className="client-designation">
                    Heathrow to Southampton
                  </span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl08_dvitemreview"
                  className="item"
                >
                  <span className="client-name">Dr</span>
                  <p>
                    <i className="fa fa-quote-left"></i>Amazing service from
                    Pinkberry. Driver was very professional, car beautifully
                    clean. We left our hats in the car and the prompt, caring
                    service to locate & post back to our home was superb. We
                    will definitely use Pinkberry again. Thank you.
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Sally John</span>
                  <span className="client-designation">Cardiff</span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl09_dvitemreview"
                  className="item"
                >
                  <span className="client-name">
                    Fantastic service, great price
                  </span>
                  <p>
                    <i className="fa fa-quote-left"></i>We hadn't used this
                    company before so we were worried. We didn't need to be.
                    Everything went smoothly, drivers both ways were helpful and
                    friendly. The cars were spotless. Drivers arrived on time.
                    Very relaxing. I would highly recommend them and will
                    definitely use this company again. Thank you!
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Marie Kelly</span>
                  <span className="client-designation">Mitcham</span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl10_dvitemreview"
                  className="item"
                >
                  <span className="client-name">
                    Amazing - well worth the money!
                  </span>
                  <p>
                    <i className="fa fa-quote-left"></i>My wife and I booked
                    your service for a 5am pick up on June 7. Our Russell Square
                    hotel to London Gatwick. It was such an amazing experience.
                    The driver arrived EARLY at 450am, helped us put the luggage
                    in the trunk and we started on our 70 minute journey. It was
                    smooth, efficient, stress free and we will not hesitate to
                    book again. The driver was kind and polite and talked but
                    not too much. He was safe and when we arrived told us how to
                    get to departures level. Many thanks for an excellent end to
                    our wonderful return to England after a 5 year absence.
                    Ramsay A, Fredericton, New Brunswick, CANADA
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">RAMSAY ANDERSON</span>
                  <span className="client-designation">
                    Central London to Gatwick
                  </span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl11_dvitemreview"
                  className="item"
                >
                  <span className="client-name">Mr</span>
                  <p>
                    <i className="fa fa-quote-left"></i>Excellent service,
                    always punctual and smooth. Had return flight home cancelled
                    at last minute and new flight not for 3 days. Called
                    Pinkberry and they sorted it immediately. Pinkberry
                    everytime for me.
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Michael Edge</span>
                  <span className="client-designation">Walkington</span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl12_dvitemreview"
                  className="item"
                >
                  <span className="client-name"></span>
                  <p>
                    <i className="fa fa-quote-left"></i>On the way to our
                    pickup, driver got stuck in traffic. They have communicated
                    well and kept us updated. We managed reach our destination
                    onetime. Driver was apologetic and we nice gentle man. I
                    will use them again.<i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Sam Ross</span>
                  <span className="client-designation">London</span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl13_dvitemreview"
                  className="item"
                >
                  <span className="client-name">Terrific</span>
                  <p>
                    <i className="fa fa-quote-left"></i>Simply had to say what a
                    terrific service from pinkberry! A last minute late pick up
                    from the north of England and long transfer to LHR was
                    handled cost effectively and beautifully. We were met and
                    looked after and ate deeply appreciative. Will use again and
                    definitely recommend. Nigel - IOM
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Nigel Wood</span>
                  <span className="client-designation">Isle of Man</span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl14_dvitemreview"
                  className="item"
                >
                  <span className="client-name">Awesome service</span>
                  <p>
                    <i className="fa fa-quote-left"></i>Perfect service from
                    getting quick quotes, booking, confirming and lastly the
                    pick up and delivery! Best company for hassle free service!!
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Deborah Reber</span>
                  <span className="client-designation">Heathrow</span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl15_dvitemreview"
                  className="item"
                >
                  <span className="client-name"></span>
                  <p>
                    <i className="fa fa-quote-left"></i>. It would be nice to
                    have some water bottles in your cars. Specially for airports
                    arriving customers and some tissues.
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Mohammed Alkhatib</span>
                  <span className="client-designation">London</span>
                </div>

                <div
                  id="ctl00_ContentPlaceHolder1_rptReview_ctl16_dvitemreview"
                  className="item"
                >
                  <span className="client-name"></span>
                  <p>
                    <i className="fa fa-quote-left"></i>First time with
                    Pinkberry. Very friendly drivers, helped me in my hotel
                    problem, really cared that I was able to get the room. I
                    also liked communication via whatsupp, I was all the time
                    aware where driver was waiting for me and also informing
                    being slightly late due to road close. I will definetly use
                    this same company again!
                    <i className="fa fa-quote-right"></i>
                  </p>
                  <span className="client-name">Jouni Pitkaranta</span>
                  <span className="client-designation">Finland</span>
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
          <div className="rating-content">
            <p>Punctuality</p>
            <div id="bar1" className="barfiller">
              <div className="tipWrap">
                <span className="tip"></span>
              </div>
              <span className="fill" data-percentage="99"></span>
            </div>
          </div>

          <div className="rating-content">
            <p>Comfort</p>
            <div id="bar2" className="barfiller">
              <div className="tipWrap">
                <span className="tip"></span>
              </div>
              <span className="fill" data-percentage="95"></span>
            </div>
          </div>

          <div className="rating-content">
            <p>Service</p>
            <div id="bar3" className="barfiller">
              <div className="tipWrap">
                <span className="tip"></span>
              </div>
              <span className="fill" data-percentage="99"></span>
            </div>
          </div>

          <div className="rating-content">
            <p>Value for Money</p>
            <div id="bar4" className="barfiller">
              <div className="tipWrap">
                <span className="tip"></span>
              </div>
              <span className="fill" data-percentage="94"></span>
            </div>
          </div>

          <div className="rating-content">
            <p>Vehicle Condition</p>
            <div id="bar5" className="barfiller">
              <div className="tipWrap">
                <span className="tip"></span>
              </div>
              <span className="fill" data-percentage="99"></span>
            </div>
          </div>

          <div className="section-padding"></div>
        </div>
      </div>
      {/* Container/- */}
    </div>
  );
};

export default Testimonials;
