import React, { useState } from "react";
import AppLayout from "./applayout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoadingOverlay from "./LoadingOverlay";
import { postRequest } from "../helpers/methods";
import BackButton from "./BackButton";
const BillingForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const postRequestToBill = async ({
    billing_postcode,
    billing_address,
    billing_city,
    billing_country,
  }) => {
    console.log({
      billing_postcode,
      billing_address,
      billing_city,
      billing_country,
    });
    setWrongEmailOrPassword(false);
    setLoadingOverlay(true);

    if (
      !billing_postcode ||
      !billing_address ||
      !billing_city ||
      !billing_country
    ) {
      setWrongEmailOrPassword(true);
      setTimeout(() => {
        setLoadingOverlay(false);
      }, 2000);
      return;
    }

    const formData = new FormData();
    formData.append("billing_postcode", billing_postcode);
    formData.append("billing_address", billing_address);
    formData.append("billing_city", billing_city);
    formData.append("billing_country", billing_country);

    try {
      const response = await postRequest("billing-info/", formData);
      if (response?.status === 201) {
        setTimeout(() => {
          reset();
          setIsSubmittedSuccessfully(true);
          window.location.href =
            "https://live.sagepay.com/gateway/service/tokencarddetails";
          setLoadingOverlay(false);
        }, 2000);
      }
      // Handle response status and other logic here
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        setLoadingOverlay(false);
      }, 2000);
    }
  };
  // Add your form submission logic here
  // You can use the state variables for the form data

  return (
    <AppLayout>
      {loadingOverlay && <LoadingOverlay />}
      <section className="main_Wrapper">
        <div className="container">
          <div className="space"></div>
          <div className="col-md-12">
            <div id="ctl00_ContentPlaceHolder1_dvLabel">
              <h3>Save your card detail to pay for the future bookings</h3>
            </div>

            <span
              id="ctl00_ContentPlaceHolder1_lblerror"
              style={{ color: "red" }}
            ></span>

            <form onSubmit={handleSubmit(postRequestToBill)}>
              <div
                id="ctl00_ContentPlaceHolder1_tbl"
                className="paymentbox"
                style={{ width: "100%" }}
              >
                <div className="paymentbox-listc2" id="dvBillingPostcode">
                  <div className="paymentbox-list1">
                    Billing Postcode/Zip code
                    <span style={{ color: "red" }}>*</span>
                    <br />
                    If your country is not having a postcode system, type in 000
                  </div>
                  <div className="paymentbox-list2">
                    <input
                      type="text"
                      {...register("billing_postcode", {
                        required: true,
                        maxLength: 10,
                      })}
                      id="ctl00_ContentPlaceHolder1_txtBillingPostcode"
                      className="insubfield"
                    />
                    <span
                      id="ctl00_ContentPlaceHolder1_RequiredFieldValidator1"
                      style={{
                        color: "red",
                        visibility: errors?.billing_postcode
                          ? "visible"
                          : "hidden",
                      }}
                    >
                      *
                    </span>
                    10 character max
                  </div>
                </div>

                <div className="paymentbox-listc1">
                  <div className="paymentbox-list1">
                    Billing Address Line 1
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="paymentbox-list2">
                    <input
                      type="text"
                      maxLength="100"
                      id="ctl00_ContentPlaceHolder1_txtBillingAddress"
                      className="insubfield"
                      {...register("billing_address", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    <span
                      id="ctl00_ContentPlaceHolder1_RequiredFieldValidator2"
                      style={{
                        color: "red",
                        visibility: errors?.billing_address
                          ? "visible"
                          : "hidden",
                      }}
                    >
                      *
                    </span>
                    100 character max
                  </div>
                </div>
                <div className="paymentbox-listc2">
                  <div className="paymentbox-list1">
                    Billing City<span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="paymentbox-list2">
                    <input
                      type="text"
                      maxLength="100"
                      id="ctl00_ContentPlaceHolder1_txtBillingAddress"
                      className="insubfield"
                      {...register("billing_city", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    <span
                      id="ctl00_ContentPlaceHolder1_RequiredFieldValidator2"
                      style={{
                        color: "red",
                        visibility: errors?.billing_city ? "visible" : "hidden",
                      }}
                    >
                      *
                    </span>
                    100 character max
                  </div>
                </div>

                <div class="paymentbox-listc1">
                  <div class="paymentbox-list1">
                    Billing Country<span style={{ color: "Red" }}>*</span>
                    <br />
                    Select from the list
                  </div>
                  <div class="paymentbox-list2">
                    <select
                      id="ctl00_ContentPlaceHolder1_ddlBillingCountry"
                      class="insubfield clsddlBillingCountry"
                      {...register("billing_country", { required: true })}
                    >
                      <option value="af">Afghanistan</option>
                      <option value="al">Albania</option>
                      <option value="dz">Algeria</option>
                      <option value="as">American Samoa</option>
                      <option value="ad">Andorra</option>
                      <option value="ao">Angola</option>
                      <option value="ai">Anguilla</option>
                      <option value="aq">Antarctica</option>
                      <option value="ag">Antigua and Barbuda</option>
                      <option value="ar">Argentina</option>
                      <option value="am">Armenia</option>
                      <option value="aw">Aruba</option>
                      <option value="au">Australia</option>
                      <option value="at">Austria</option>
                      <option value="az">Azerbaijan</option>
                      <option value="bs">Bahamas</option>
                      <option value="bh">Bahrain</option>
                      <option value="bd">Bangladesh</option>
                      <option value="bb">Barbados</option>
                      <option value="by">Belarus</option>
                      <option value="be">Belgium</option>
                      <option value="bz">Belize</option>
                      <option value="bj">Benin</option>
                      <option value="bm">Bermuda</option>
                      <option value="bt">Bhutan</option>
                      <option value="bo">Bolivia</option>
                      <option value="ba">Bosnia-Herzegovina</option>
                      <option value="bw">Botswana</option>
                      <option value="br">Brazil</option>
                      <option value="bn">Brunei Darussalam</option>
                      <option value="bg">Bulgaria</option>
                      <option value="bf">Burkina Faso</option>
                      <option value="bi">Burundi</option>
                      <option value="kh">Cambodia</option>
                      <option value="cm">Cameroon</option>
                      <option value="ca">Canada</option>
                      <option value="cv">Cape Verde</option>
                      <option value="ky">Cayman Islands</option>
                      <option value="cf">Central African Republic</option>
                      <option value="td">Chad</option>
                      <option value="cl">Chile</option>
                      <option value="cn">China</option>
                      <option value="cx">Christmas Island</option>
                      <option value="cc">Cocos (Keeling) Islands</option>
                      <option value="co">Colombia</option>
                      <option value="km">Comoros</option>
                      <option value="cg">Congo</option>
                      <option value="cd">Congo, Dem. Republic</option>
                      <option value="ck">Cook Islands</option>
                      <option value="cr">Costa Rica</option>
                      <option value="hr">Croatia</option>
                      <option value="cu">Cuba</option>
                      <option value="cy">Cyprus</option>
                      <option value="cz">Czech Rep.</option>
                      <option value="dk">Denmark</option>
                      <option value="dj">Djibouti</option>
                      <option value="dm">Dominica</option>
                      <option value="do">Dominican Republic</option>
                      <option value="ec">Ecuador</option>
                      <option value="eg">Egypt</option>
                      <option value="sv">El Salvador</option>
                      <option value="gq">Equatorial Guinea</option>
                      <option value="er">Eritrea</option>
                      <option value="ee">Estonia</option>
                      <option value="et">Ethiopia</option>
                      <option value="fk">Falkland Islands (Malvinas)</option>
                      <option value="fo">Faroe Islands</option>
                      <option value="fj">Fiji</option>
                      <option value="fi">Finland</option>
                      <option value="fr">France</option>
                      <option value="gf">French Guiana</option>
                      <option value="ga">Gabon</option>
                      <option value="gm">Gambia</option>
                      <option value="ge">Georgia</option>
                      <option value="de">Germany</option>
                      <option value="gh">Ghana</option>
                      <option value="gi">Gibraltar</option>
                      <option value="gb">Great Britain</option>
                      <option value="gr">Greece</option>
                      <option value="gl">Greenland</option>
                      <option value="gd">Grenada</option>
                      <option value="gp">Guadeloupe (French)</option>
                      <option value="gu">Guam (USA)</option>
                      <option value="gt">Guatemala</option>
                      <option value="gn">Guinea</option>
                      <option value="gw">Guinea Bissau</option>
                      <option value="gy">Guyana</option>
                      <option value="ht">Haiti</option>
                      <option value="hn">Honduras</option>
                      <option value="hk">Hong Kong</option>
                      <option value="hu">Hungary</option>
                      <option value="is">Iceland</option>
                      <option value="in">India</option>
                      <option value="id">Indonesia</option>
                      <option value="ir">Iran</option>
                      <option value="iq">Iraq</option>
                      <option value="ie">Ireland</option>
                      <option value="il">Israel</option>
                      <option value="it">Italy</option>
                      <option value="ci">Ivory Coast</option>
                      <option value="jm">Jamaica</option>
                      <option value="jp">Japan</option>
                      <option value="jo">Jordan</option>
                      <option value="kz">Kazakhstan</option>
                      <option value="ke">Kenya</option>
                      <option value="ki">Kiribati</option>
                      <option value="kp">Korea-North</option>
                      <option value="kr">Korea-South</option>
                      <option value="kw">Kuwait</option>
                      <option value="kg">Kyrgyzstan</option>
                      <option value="la">Laos</option>
                      <option value="lv">Latvia</option>
                      <option value="lb">Lebanon</option>
                      <option value="ls">Lesotho</option>
                      <option value="lr">Liberia</option>
                      <option value="ly">Libya</option>
                      <option value="li">Liechtenstein</option>
                      <option value="lt">Lithuania</option>
                      <option value="lu">Luxembourg</option>
                      <option value="mo">Macau</option>
                      <option value="mk">Macedonia</option>
                      <option value="mg">Madagascar</option>
                      <option value="mw">Malawi</option>
                      <option value="my">Malaysia</option>
                      <option value="mv">Maldives</option>
                      <option value="ml">Mali</option>
                      <option value="mt">Malta</option>
                      <option value="mh">Marshall Islands</option>
                      <option value="mq">Martinique (French)</option>
                      <option value="mr">Mauritania</option>
                      <option value="mu">Mauritius</option>
                      <option value="yt">Mayotte</option>
                      <option value="mx">Mexico</option>
                      <option value="fm">Micronesia</option>
                      <option value="md">Moldova</option>
                      <option value="mc">Monaco</option>
                      <option value="mn">Mongolia</option>
                      <option value="me">Montenegro</option>
                      <option value="ms">Montserrat</option>
                      <option value="ma">Morocco</option>
                      <option value="mz">Mozambique</option>
                      <option value="mm">Myanmar</option>
                      <option value="na">Namibia</option>
                      <option value="nr">Nauru</option>
                      <option value="np">Nepal</option>
                      <option value="nl">Netherlands</option>
                      <option value="an">Netherlands Antilles</option>
                      <option value="nc">New Caledonia (French)</option>
                      <option value="nz">New Zealand</option>
                      <option value="ni">Nicaragua</option>
                      <option value="ne">Niger</option>
                      <option value="ng">Nigeria</option>
                      <option value="nu">Niue</option>
                      <option value="nf">Norfolk Island</option>
                      <option value="mp">Northern Mariana Islands</option>
                      <option value="no">Norway</option>
                      <option value="om">Oman Muscat</option>
                      <option value="pk">Pakistan</option>
                      <option value="pw">Palau</option>
                      <option value="pa">Panama</option>
                      <option value="pg">Papua New Guinea</option>
                      <option value="py">Paraguay</option>
                      <option value="pe">Peru</option>
                      <option value="ph">Philippines</option>
                      <option value="pl">Poland</option>
                      <option value="pf">Polynesia (French)</option>
                      <option value="pt">Portugal</option>
                      <option value="pr">Puerto Rico</option>
                      <option value="qa">Qatar</option>
                      <option value="re">Reunion (French)</option>
                      <option value="ro">Romania</option>
                      <option value="ru">Russia</option>
                      <option value="rw">Rwanda</option>
                      <option value="sh">Saint Helena</option>
                      <option value="kn">Saint Kitts and Nevis Anguilla</option>
                      <option value="lc">Saint Lucia</option>
                      <option value="pm">Saint Pierre and Miquelon</option>
                      <option value="vc">Saint Vincent and Grenadines</option>
                      <option value="ws">Samoa</option>
                      <option value="sm">San Marino</option>
                      <option value="st">Sao Tome and Principe</option>
                      <option value="sa">Saudi Arabia</option>
                      <option value="sn">Senegal</option>
                      <option value="rs">Serbia</option>
                      <option value="sc">Seychelles</option>
                      <option value="sl">Sierra Leone</option>
                      <option value="sg">Singapore</option>
                      <option value="sk">Slovakia</option>
                      <option value="si">Slovenia</option>
                      <option value="sb">Solomon Islands</option>
                      <option value="so">Somalia</option>
                      <option value="za">South Africa</option>
                      <option value="es">Spain</option>
                      <option value="lk">Sri Lanka</option>
                      <option value="sd">Sudan</option>
                      <option value="sr">Suriname</option>
                      <option value="sz">Swaziland</option>
                      <option value="se">Sweden</option>
                      <option value="ch">Switzerland</option>
                      <option value="sy">Syria</option>
                      <option value="tw">Taiwan</option>
                      <option value="tj">Tajikistan</option>
                      <option value="tz">Tanzania</option>
                      <option value="th">Thailand</option>
                      <option value="tg">Togo</option>
                      <option value="tk">Tokelau</option>
                      <option value="to">Tonga</option>
                      <option value="tt">Trinidad and Tobago</option>
                      <option value="tn">Tunisia</option>
                      <option value="tr">Turkey</option>
                      <option value="tm">Turkmenistan</option>
                      <option value="tc">Turks and Caicos Islands</option>
                      <option value="tv">Tuvalu</option>
                      <option value="GB">United Kingdom</option>
                      <option value="us">USA</option>
                      <option value="ug">Uganda</option>
                      <option value="ua">Ukraine</option>
                      <option value="ae">United Arab Emirates</option>
                      <option value="uy">Uruguay</option>
                      <option value="uz">Uzbekistan</option>
                      <option value="vu">Vanuatu</option>
                      <option value="va">Vatican</option>
                      <option value="ve">Venezuela</option>
                      <option value="vn">Vietnam</option>
                      <option value="vg">Virgin Islands (British)</option>
                      <option value="vi">Virgin Islands (USA)</option>
                      <option value="wf">Wallis and Futuna Islands</option>
                      <option value="ye">Yemen</option>
                      <option value="zm">Zambia</option>
                      <option value="zw">Zimbabwe</option>
                    </select>
                    <span
                      id="ctl00_ContentPlaceHolder1_RequiredFieldValidator10"
                      style={{
                        color: "red",
                        display: errors?.billing_country ? "block" : "none",
                      }}
                    >
                      *
                    </span>
                  </div>
                </div>

                {/* ... other form elements ... */}

                <div className="paymentbox-listc1">
                  <div className="paymentbox-list1"></div>
                  <div className="paymentbox-list2">
                    <input
                      type="submit"
                      name="ctl00$ContentPlaceHolder1$btnaddcard"
                      value="Next"
                      id="ctl00_ContentPlaceHolder1_btnaddcard"
                      className="pinkButton clsbtnaddcard"
                    />
                  </div>
                </div>

                <div className="wraper">
                  <div className="b_iframe">
                    <iframe
                      id="ctl00_ContentPlaceHolder1_iframe1"
                      height="500"
                      scrolling="yes"
                      style={{ display: "none" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </form>
            <BackButton/>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default BillingForm;
