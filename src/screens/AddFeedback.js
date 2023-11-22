import React from "react";
import AppLayout from "../components/applayout/AppLayout";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";

const AddFeedback = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const feedBack = async ({
    name,
    booking_order_no,
    email,
    location,
    rating,
    title,
    message,
  }) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("booking_order_no", booking_order_no);
    formData.append("email", email);
    formData.append("location", location);
    formData.append("rating", rating);
    formData.append("title", title);
    formData.append("message", message);

    props.postRequestToFeedBack("feedback/", formData, reset);
  };

  return (
    <AppLayout>
      <div className="container">
        <div className="space"></div>
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="head">
            <h2>Add Feedback</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/divider1.png"}
              alt="divider1"
            />
          </div>
          <div className="ad-feedback">
            <form onSubmit={handleSubmit(feedBack)}>
              <div className="row">
                <span
                  id="ctl00_ContentPlaceHolder1_lblError"
                  style={{ color: "Red", fontWeight: "bold" }}
                ></span>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right">
                    Name:<span>*</span>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                    <input
                      name="txtName"
                      type="text"
                      id="ctl00_ContentPlaceHolder1_txtName"
                      className="testfield"
                      {...register("name")}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right">
                    Booking/Order No:
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                    <input
                      name="txtBooking"
                      type="text"
                      id="ctl00_ContentPlaceHolder1_txtBooking"
                      className="testfield"
                      {...register("booking_order_no")}
                      placeholder="Booking Order Number"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right">
                    Email:
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                    <input
                      name="txtEmail"
                      type="email"
                      id="ctl00_ContentPlaceHolder1_txtEmail"
                      className="testfield"
                      {...register("email")}
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right">
                  Location:
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                  <input
                    name="txtLocation"
                    type="text"
                    id="ctl00_ContentPlaceHolder1_txtLocation"
                    className="testfield"
                    {...register("location")}
                    placeholder="Location"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right">
                  Rating:
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                  <select
                    name="ddlRating"
                    id="ctl00_ContentPlaceHolder1_ddlRating"
                    className="testfield2"
                    {...register("rating")}
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right">
                  Title:
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                  <input
                    name="txtTitle"
                    type="text"
                    id="ctl00_ContentPlaceHolder1_txtTitle"
                    className="testfield"
                    {...register("title")}
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right">
                  Message:<span>*</span>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                  <textarea
                    name="txtMessage"
                    rows="2"
                    cols="20"
                    id="ctl00_ContentPlaceHolder1_txtMessage"
                    className="testfield"
                    {...register("message")}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right ad-hiden">
                  &nbsp;
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                  <input
                    type="submit"
                    name="ctl00$ContentPlaceHolder1$btnPost"
                    value="Post >>"
                    className="postbtn"
                  />
                </div>
              </div>
            </form>

            <div
              className="screnloading"
              id="loadingDiv"
              style={{ display: "none" }}
            >
              <img
                id="ctl00_ContentPlaceHolder1_imgUpdateProgress"
                title="Loading ..."
                className="screnloading2"
                src={process.env.PUBLIC_URL + "assets/images/loading_2.gif"}
                style={{ borderWidth: 0 }}
                alt="loading"
              />
              <div id="txt" className="screnloadingtxt loadtext"></div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postRequestToFeedBack: (url, data, reset) =>
      dispatch(actionCreators.postRequestToFeedbackDispatch(url, data, reset)),
  };
};

export default connect(null, mapDispatchToProps)(AddFeedback);
