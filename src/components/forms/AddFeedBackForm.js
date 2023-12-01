import React from "react";
import { useForm } from "react-hook-form";

const AddFeedBackForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const feedBackRequest = async ({
    name,
    booking_order_no,
    email,
    location,
    rating,
    title,
    message,
  }) => {
    if (
      !name &&
      !booking_order_no &&
      !email &&
      !location &&
      !title &&
      !message
    ) {
      return;
    }
    props?.setLoadingOverlay(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("booking_order_no", booking_order_no);
    formData.append("email", email);
    formData.append("location", location);
    formData.append("rating", rating);
    formData.append("title", title);
    formData.append("message", message);

    props.postRequestToFeedBack(
      "feedbacks/",
      formData,
      reset,
      props?.setLoadingOverlay
    );
  };
  return (
    <form onSubmit={handleSubmit(feedBackRequest)}>
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
  );
};

export default AddFeedBackForm;
