import React, { useEffect, useState } from "react";
import AppLayout from "../applayout/AppLayout";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { useForm } from "react-hook-form";
import LoadingOverlay from "../shared/LoadingOverlay";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import CountrySelect from "../shared/CountrySelect";

const Profile = (props) => {
  const isLogged = localStorage.getItem("authToken") ?? null;
  const user = isLogged && jwt_decode(isLogged);
  const [isFormSubmittedSuccesful, setIsFormSubmittedSuccesful] =
    useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      first_name: props.state?.first_name || "",
      last_name: props.state?.last_name || "",
      country: props.state?.country || "",
      phone: props.state?.phone || "",
    },
  });

  const sendRequest = async ({ first_name, last_name, country, phone }) => {
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("country", country);
    formData.append("phone", phone);

    setLoadingOverlay(true);

    props?.putRequestToUserProfile(
      `update-profile/${user?.user_id}`,
      formData,
      setLoadingOverlay,
      setIsFormSubmittedSuccesful
    );
  };

  useEffect(() => {
    reset({
      first_name: props.state?.first_name,
      last_name: props.state?.last_name,
      country: props.state?.country,
      phone: props.state?.phone,
    });
  }, []);
  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="choose-option2">
              <h1>Personal Details</h1>
              <p>
                This information is to be filled automatically when you make a
                new reservation.
              </p>
              <form onSubmit={handleSubmit(sendRequest)}>
                <div
                  id="ctl00_ContentPlaceHolder1_tbl"
                  width="100%"
                  style={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  <div className="paymentbox-listc1">
                    <div className="paymentbox-list1">First Name : </div>
                    <div className="paymentbox-list2">
                      <input
                        type="text"
                        id="ctl00_ContentPlaceHolder1_txtFirstName"
                        className="insubfield"
                        {...register("first_name")}
                      />
                    </div>
                  </div>
                  <div className="paymentbox-listc2">
                    <div className="paymentbox-list1">Last Name : </div>
                    <div className="paymentbox-list2">
                      <input
                        type="text"
                        id="ctl00_ContentPlaceHolder1_txtLastName"
                        className="insubfield"
                        {...register("last_name")}
                      />
                    </div>
                  </div>
                  <div className="paymentbox-listc1">
                    <div className="paymentbox-list1">Country : </div>
                    <div className="paymentbox-list2">
                      <select
                        id="ctl00_ContentPlaceHolder1_ddlmobilecodes"
                        className="insubfield"
                        {...register("country")}
                      >
                        
                      <CountrySelect/>
                        
                        
                      </select>
                      <br />
                    </div>
                  </div>
                  <div className="paymentbox-listc2">
                    <div className="paymentbox-list1">Mobile Number : </div>
                    <div className="paymentbox-list2">
                      <input
                        type="text"
                        id="ctl00_ContentPlaceHolder1_txtmobilenumber"
                        className="insubfield"
                        {...register("phone")}
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="submit"
                      name="ctl00$ContentPlaceHolder1$btnsubmit"
                      value="Save"
                      id="ctl00_ContentPlaceHolder1_btnsubmit"
                      className="pinkButton"
                    />
                    <br />
                    {isFormSubmittedSuccesful && (
                      <span
                        id="ctl00_ContentPlaceHolder1_lblerror"
                        style={{ color: "Green", marginTop: "30px!important" }}
                      >
                        Updated Record Successfully.
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.user.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    putRequestToUserProfile: (
      url,
      formData,
      setLoadingOverlay,
      setIsFormSubmittedSuccesful
    ) =>
      dispatch(
        actionCreators.putRequestToUserProfileDispatch(
          url,
          formData,
          setLoadingOverlay,
          setIsFormSubmittedSuccesful
        )
      ),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
