import React from "react";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  const titleStyle = {
    fontStyle: "inherit",
    fontVariant: "inherit",
    fontWeight: "inherit",
    fontStretch: "inherit",
    lineHeight: "inherit",
    fontFamily: "inherit",
    boxSizing: "border-box",
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "14pt",
    backgroundColor: "#ffff00",
  };

  return (
    <div class="container-fluid no-padding about-us" id="about">
      <div class="col-md-6">
        <div class="content-holder">
          <h3>
            About <span class="pink-text">Pinkberry Cars</span>
          </h3>
          <p>
            <div class="home-content">
              <h2 class="item-title" itemprop="name">
                <p
                  style={{
                    margin: "0px",
                    textAlign: "left",
                  }}
                >
                  <font
                    style={{
                      color: "#009900",
                      boxSizing: "border-box",
                      fontFamily: "helvetica, arial, sans-serif",
                      fontSize: "27px",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        ...titleStyle,

                        color: "#ff0000",
                      }}
                    >
                      COVID19&nbsp;
                    </span>
                  </font>
                  <font
                    style={{
                      color: "#009900",
                      boxSizing: "border-box",
                      fontFamily: "helvetica, arial, sans-serif",
                      fontSize: "27px",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        ...titleStyle,
                      }}
                    >
                      - We are providing our services as usual to help our
                      customers moving, but&nbsp;
                    </span>
                  </font>
                  <font
                    style={{
                      color: "#009900",
                      boxSizing: "border-box",
                      fontFamily: "helvetica, arial, sans-serif",
                      fontSize: "27px",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        ...titleStyle,

                        fontSize: "18.6667px",
                      }}
                    >
                      with precautionary&nbsp;measures.&nbsp;
                    </span>
                  </font>
                  <font
                    style={{
                      color: "#009900",
                      boxSizing: "border-box",
                      fontFamily: "helvetica, arial, sans-serif",
                      fontSize: "27px",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    <a
                      href="https://drive.google.com/file/d/1wuyYEc375unDKqOcq3U35XzkJJl4J8hl/view?usp=sharing"
                      target="_blank"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        padding: "0px",
                        border: "0px",
                        font: "inherit",
                        textDecoration: "none",

                        color: "#ffffff",
                        outline: "0px",
                      }}
                    >
                      <span
                        style={{
                          ...titleStyle,
                          fontStyle: "italic",

                          color: "#0000ff",
                        }}
                      >
                        More details
                      </span>
                      <span
                        style={{
                          ...titleStyle,
                          fontStyle: "italic",
                          fontSize: "18.6667px",
                          color: "#0000ff",
                        }}
                      >
                        &gt;&gt;
                      </span>
                      <span
                        style={{
                          ...titleStyle,
                          fontStyle: "italic",
                          color: "#0000ff",
                        }}
                      >
                        &nbsp;
                      </span>
                    </a>
                  </font>
                </p>
              </h2>
              <font
                style={{
                  color: "#000000",
                  fontFamily: "poppins, sans-serif",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    letterSpacing: "1px",
                  }}
                >
                  We are specialised in providing private hire transfers (car
                  with the driver), services for to and from all London
                  Airports, UK Cruise Ports, Train/Tube Stations, to and from
                  anywhere in the UK. We operate&nbsp; 24 hours 7 days a week.
                  Transfers can be booked securely&nbsp;via this website or by
                  calling us.
                </span>
              </font>
              <br />
            </div>
          </p>
          <p class="hide-content">
            We are specialised in providing private hire transfers (car service
            with the driver), services for to and from all London Airports, UK
            Cruise Ports, Train/Tube Stations, to and from anywhere in the UK.
          </p>
          <Link to="/about-pink-berry" class="read-more-btn2" >
            Read More
          </Link>
        </div>
      </div>
      <div class="col-md-6 no-padding">
        <div class="video-wrapper">
          <video
            src={
              process.env.PUBLIC_URL +
              "assets/images/video/Pink%20berry%20cars.mp4"
            }
            id="myVideo"
            controls="controls"
            controlsList="nodownload"
            poster={process.env.PUBLIC_URL + "assets/images/poster.jpg"}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
