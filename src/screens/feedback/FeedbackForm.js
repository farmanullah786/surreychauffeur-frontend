import React, { useState } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import AddFeedBackForm from "../../components/forms/AddFeedBackForm";
import LoadingOverlay from "../../components/shared/LoadingOverlay";

const FeedbackForm = (props) => {
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
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
            <AddFeedBackForm
              postRequestToFeedBack={props?.postRequestToFeedBack}
              setLoadingOverlay={setLoadingOverlay}
            />
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
    postRequestToFeedBack: (url, data, reset, setLoadingOverlay) =>
      dispatch(
        actionCreators.postRequestToFeedbackDispatch(
          url,
          data,
          reset,
          setLoadingOverlay
        )
      ),
  };
};

export default connect(null, mapDispatchToProps)(FeedbackForm);
