import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postRequestWithOutToken } from "../../helpers/methods";
import { useNavigate } from "react-router-dom";

const TransferInquiry = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const postRequestToTransferInquirey = async ({
    name,
    email,
    reconfirm_email,
    phone_number,
    num_passengers,
    date,
    requirements,
  }) => {
    if (!name && !email && !reconfirm_email && !phone_number && !requirements) {
      return;
    }
    props?.setLoadingOverlay(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("reconfirm_email", reconfirm_email);
    formData.append("phone_number", phone_number);
    formData.append("num_passengers", num_passengers);
    formData.append("date", date);
    formData.append("requirements", requirements);
    formData.append("transfer_type", props?.transfer_type);

    try {
      const response = await postRequestWithOutToken(
        "transfer-inquiry/",
        formData
      );
      if (response?.data?.status_code === 200) {
        setTimeout(() => {
          reset();
          props?.setLoadingOverlay(false);
          navigate("/transfer-inquiry");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        props?.setLoadingOverlay(false);
      }, 2000);
    }
  };
  return (
    <form onSubmit={handleSubmit(postRequestToTransferInquirey)}>
      <div className="row">
        <div className="form-group col-md-12 col-sm-12">
          <div className="col-md-4">
            <label htmlFor="name">
              Name<span className="requ">*</span> :
            </label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              id="ctl00_ContentPlaceHolder1_txtName"
              {...register("name", { required: true })}
            />
            <span
              id="ctl00_ContentPlaceHolder1_RequiredFieldValidator7"
              style={{ color: "Red", display: errors?.name ? "block" : "none" }}
            >
              *
            </span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="form-group col-md-12 col-sm-12">
          <div className="col-md-4">
            <label htmlFor="email">
              Email<span className="requ">*</span> :
            </label>
          </div>
          <div className="col-md-8">
            <input
              type="email"
              id="ctl00_ContentPlaceHolder1_txtEmail"
              {...register("email", { required: true })}
            />
            <span
              id="ctl00_ContentPlaceHolder1_RequiredFieldValidator6"
              style={{
                color: "Red",
                display: errors?.email ? "block" : "none",
              }}
            >
              *
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12 col-sm-12">
          <div className="col-md-4">
            <label htmlFor="reconfirmEmail">
              Reconfirm Email<span className="requ">*</span> :
            </label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              id="ctl00_ContentPlaceHolder1_txtReConfirmEmail"
              {...register("reconfirm_email", {
                required: true,
                validate: (value) => {
                  const { email } = getValues();
                  return (
                    email === value || "Email should be same"
                  );
                },
              })}
            />
            <span
              id="ctl00_ContentPlaceHolder1_RequiredFieldValidator5"
              style={{
                color: "Red",
                display: errors?.reconfirm_email ? "block" : "none",
              }}
            >
              *
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12 col-sm-12">
          <div className="col-md-4">
            <label htmlFor="phoneNumber">
              Phone Number<span className="requ">*</span> :
            </label>
          </div>
          <div className="col-md-8">
            <input
              type="number"
              id="ctl00_ContentPlaceHolder1_txtPhoneNumber"
              {...register("phone_number", { required: true })}
            />
            <span
              id="ctl00_ContentPlaceHolder1_RequiredFieldValidator5"
              style={{
                color: "Red",
                display: errors?.phone_number ? "block" : "none",
              }}
            >
              *
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12 col-sm-12">
          <div className="col-md-4">
            <span style={{ color: "white" }}>Number of Passengers:</span>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              id="ctl00_ContentPlaceHolder1_txtNumberofPassengers"
              {...register("num_passengers")}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12 col-sm-12">
          <div className="col-md-4">
            <label htmlFor="date">Date :</label>
          </div>
          <div className="col-md-8">
            {/* Date Picker - Replace this with your preferred date picker component */}
            <input
              type="date"
              id="ctl00_ContentPlaceHolder1_txtDate"
              {...register("date")}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12 col-sm-12">
          <div className="col-md-4">
            <label htmlFor="specialRequirements">
              Tell Us About Your Requirement
              <span className="requ">*</span>{" "}
            </label>
            <p>Pick up dates, from where to where and etc...</p>
          </div>
          <div className="col-md-8">
            <textarea
              rows="2"
              cols="20"
              id="ctl00_ContentPlaceHolder1_txtSpecial"
              {...register("requirements", { required: true })}
            />
            <span
              id="ctl00_ContentPlaceHolder1_RequiredFieldValidator5"
              style={{
                color: "Red",
                display: errors?.requirements ? "block" : "none",
              }}
            >
              *
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 btndiv">
          <button
            type="submit"
            style={{ width: "100%" }}
            id="ctl00_ContentPlaceHolder1_btnSubmit"
            className="btn"
          >
            SUBMIT
          </button>
          <br />
          <br />
          {/* <span
            id="ctl00_ContentPlaceHolder1_lblError"
            style={{ color: "Red" }}
          ></span> */}
        </div>
      </div>
    </form>
  );
};

export default TransferInquiry;
