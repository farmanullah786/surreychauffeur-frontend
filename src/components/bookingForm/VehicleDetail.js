import React from "react";

const VehicleDetail = (props) => {
  return (
    <div id="book-left">
      <div className="book-h3">Journey Details</div>
      <div className="book-cver">
        <div className="book-inner-h1">Pickup From</div>

        <div className="book-list">
          <div className="book-list2">
            <span id="ctl00_ContentPlaceHolder1_rptFrom_ctl00_lblC1">From</span>
            &nbsp;
          </div>
          <div className="book-list3">
            <textarea
              rows="3"
              cols="20"
              id="ctl00_ContentPlaceHolder1_rptFrom_ctl00_txtC1"
              disabled="disabled"
              value={props?.location_details?.label_pick_up_location}
              className="b-field clsRequired"
            ></textarea>
          </div>
        </div>
        <div className="book-list">
          <div className="book-list2">
            <span id="ctl00_ContentPlaceHolder1_rptFrom_ctl00_lblC3">
              <span style={{ color: "red" }}>*</span>Flight Number
            </span>
            &nbsp;
          </div>
          <div className="book-list3">
            <input
              type="text"
              maxLength="200"
              className="form-control  pick-up-location b-field clsRequired"
              {...props?.register("flight_number", { required: true })}
            />
            <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
            <span
              id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
              style={{
                color: "Red",
                display: props?.errors?.flight_number ? "block" : "none",
              }}
            >
              *
            </span>
          </div>
        </div>

        <div className="book-list">
          <div className="book-list2">
            <span id="ctl00_ContentPlaceHolder1_rptFrom_ctl01_lblC1">
              <span style={{ color: "red" }}>*</span>Coming From
            </span>
            &nbsp;
          </div>
          <div className="book-list3">
            <input
              type="text"
              maxLength="200"
              id="ctl00_ContentPlaceHolder1_rptFrom_ctl01_txtC1"
              className="form-control  pick-up-location b-field clsRequired"
              {...props?.register("coming_from", { required: true })}
            />
            <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
            <span
              id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
              style={{
                color: "Red",
                display: props?.errors?.coming_from ? "block" : "none",
              }}
            >
              *
            </span>
          </div>
        </div>
        <div className="book-list">
          <div className="book-list2">
            <span id="ctl00_ContentPlaceHolder1_rptFrom_ctl01_lblC3"></span>
            &nbsp;
          </div>
          <div className="book-list3"></div>
        </div>

        <div id="ctl00_ContentPlaceHolder1_UpdatePanel1">
          <div className="book-list">
            <table id="table3"></table>
          </div>
        </div>
        <div id="ctl00_ContentPlaceHolder1_Update1">
          <table id="table1"></table>
        </div>
      </div>
      <div className="book-cver">
        <div className="book-inner-h2">Via/Stopover points:</div>
        <div className="book-list-ul">None</div>
      </div>
      <div className="book-cver">
        <div className="book-inner-h1">Drop Off</div>

        <div className="book-list">
          <div className="book-list2">
            <span id="ctl00_ContentPlaceHolder1_rptTo_ctl00_lblC1">To</span>
            &nbsp;
          </div>
          <div className="book-list3">
            <textarea
              rows="3"
              cols="20"
              id="ctl00_ContentPlaceHolder1_rptTo_ctl00_txtC1"
              disabled="disabled"
              className="b-field clsRequired"
              value={props?.location_details?.label_drop_up_location}
            ></textarea>
          </div>
        </div>
        <div className="book-list">
          <div className="book-list2">
            <span id="ctl00_ContentPlaceHolder1_rptTo_ctl00_lblC3"></span>
            &nbsp;
          </div>
          <div className="book-list3"></div>
        </div>
      </div>
      <div className="book-cver">
        <div className="book-inner-h1">Vehicle</div>
        <div className="book-list">
          <div className="book-list2">Vehicle Type</div>
          <div className="book-list3">
            <input
              name="ctl00$ContentPlaceHolder1$txtVehicle"
              type="text"
              value={props?.book_vehicle?.name}
              maxLength="150"
              id="ctl00_ContentPlaceHolder1_txtVehicle"
              disabled="disabled"
              className="b-field"
            />
          </div>
        </div>
        <div className="book-list">
          <div className="book-list2">Fare</div>
          <div className="book-list3">
            <input
              type="text"
              id="ctl00_ContentPlaceHolder1_txtFare"
              disabled="disabled"
              value={'$ '+props?.uuidObject?.price}
              className="b-field"
              {...props?.register("price")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
