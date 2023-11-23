import React, { useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postRequestWithOutToken } from "../helpers/methods";
import LoadingOverlay from "../components/shared/LoadingOverlay";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  const [text, setText] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const sendRequest = async ({
    email,
    re_email,
    password,
    password2,
    first_name,
    last_name,
    country,
    phone,
  }) => {
    setWrongEmailOrPassword(false);
    if (email !== re_email) {
      setText("Email and confirm email did't match.");
      setWrongEmailOrPassword(true);
      return;
    }
    if (password !== password2) {
      setText("Password and re-confirm password did't match.");
      setWrongEmailOrPassword(true);
      return;
    }
    setLoadingOverlay(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", password2);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("country", country);
    formData.append("phone", phone);

    try {
      const response = await postRequestWithOutToken("register/", formData);
      if (response?.status === 201) {
        setTimeout(() => {
          reset();
          setIsSubmittedSuccessfully(true);
          setLoadingOverlay(false);
        }, 2000);
      }
    } catch (error) {
      setTimeout(() => {
        setLoadingOverlay(false);
      }, 2000);
      if (error?.response?.status === 409) {
        setText("This email address is already in use.");
        setWrongEmailOrPassword(true);
      }
      if (error?.response?.status === 400) {
        setText("All form data is required.");
        setWrongEmailOrPassword(true);
      }
    }
  };
  return (
    <AppLayout>
     
     
        <div>
        {loadingOverlay &&
        <LoadingOverlay />}
          <div className="space"></div>
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div
                  id="ctl00_ContentPlaceHolder1_Table1"
                  className="largewidth"
                >
                  <h3 className="formheader">Member Sign Up</h3>
                  {isSubmittedSuccessfully && (
                    <div
                      className="text-center sign-line"
                      onClick={() => {
                        setIsSubmittedSuccessfully(false);
                      }}
                    >
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        You have been registered. Now you can login to your
                        account and make bookings.
                      </span>
                    </div>
                  )}
                  <form onSubmit={handleSubmit(sendRequest)}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="text-left form-group has-feedback">
                          <h3>Login Details</h3>
                        </div>
                        <div className="text-left form-group has-feedback">
                          <input
                            name="ctl00$ContentPlaceHolder1$txtmemberemailaddress"
                            type="text"
                            id="ctl00_ContentPlaceHolder1_txtmemberemailaddress"
                            className="form-control"
                            placeholder="Email Address"
                            // autoComplete="off"
                            {...register("email", { required: true })}
                          />
                          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
                          <span
                            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator4"
                            style={{
                              color: "Red",
                              display: errors?.email ? "block" : "none",
                            }}
                          >
                            *
                          </span>
                        </div>

                        <div className="text-left form-group has-feedback">
                          <input
                            name="ctl00$ContentPlaceHolder1$txtreconfirmemailaddress"
                            type="text"
                            id="ctl00_ContentPlaceHolder1_txtreconfirmemailaddress"
                            className="form-control"
                            placeholder="Re-confirm Email Address"
                            autoComplete="off"
                            {...register("re_email", { required: true })}
                          />
                          <i className="glyphicon glyphicon-envelope form-control-feedback glyphiconalign"></i>
                          <span
                            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator5"
                            style={{
                              color: "Red",
                              display: errors?.re_emeail ? "block" : "none",
                            }}
                          >
                            *
                          </span>
                        </div>

                        <div className="text-left form-group has-feedback">
                          <input
                            name="ctl00$ContentPlaceHolder1$txtpassword"
                            id="ctl00_ContentPlaceHolder1_txtpassword"
                            className="form-control"
                            placeholder="Password"
                            autoComplete="off"
                            type={showPassword ? "text" : "password"}
                            {...register("password", { required: true })}
                          />
                          <i className="glyphicon glyphicon-lock form-control-feedback glyphiconalign"></i>
                          <span
                            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator6"
                            style={{
                              color: "Red",
                              display: errors?.password ? "block" : "none",
                            }}
                          >
                            *
                          </span>
                        </div>

                        <div className="text-left form-group has-feedback">
                          <input
                            name="ctl00$ContentPlaceHolder1$txtreconfirmpassword"
                            id="ctl00_ContentPlaceHolder1_txtreconfirmpassword"
                            className="form-control js-pass"
                            placeholder="Re-confirm Password"
                            autoComplete="off"
                            type={showPassword ? "text" : "password"}
                            {...register("password2", { required: true })}
                          />
                          <i className="glyphicon glyphicon-lock form-control-feedback glyphiconalign"></i>
                          <span
                            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator7"
                            style={{
                              color: "Red",
                              display: errors?.password2 ? "block" : "none",
                            }}
                          >
                            *
                          </span>
                        </div>

                        <div className="text-left form-group has-feedback">
                          <div className="sign-check">
                            <input
                              id="ctl00_ContentPlaceHolder1_chkShowPassword1"
                              type="checkbox"
                              name="ctl00$ContentPlaceHolder1$chkShowPassword1"
                              onClick={() => {
                                setShowPassword(showPassword ? false : true);
                              }}
                            />
                            <span>Show Password</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="text-left form-group has-feedback">
                          <h3>Personal Details</h3>
                        </div>
                        <div className="text-left form-group has-feedback">
                          <p>
                            This information will auto-fill on to the booking
                            form when each time you make a reservation.
                          </p>
                        </div>
                        <div className="text-left form-group has-feedback">
                          <input
                            name="ctl00$ContentPlaceHolder1$txtFirstName"
                            type="text"
                            id="ctl00_ContentPlaceHolder1_txtFirstName"
                            className="form-control"
                            placeholder="First Name"
                            autoComplete="off"
                            {...register("first_name", { required: true })}
                          />
                          <i className="glyphicon glyphicon-user form-control-feedback glyphiconalign"></i>
                          <span
                            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator8"
                            style={{
                              color: "Red",
                              display: errors?.first_name ? "block" : "none",
                            }}
                          >
                            *
                          </span>
                        </div>
                        <div className="text-left form-group has-feedback">
                          <input
                            name="ctl00$ContentPlaceHolder1$txtLastName"
                            type="text"
                            id="ctl00_ContentPlaceHolder1_txtLastName"
                            className="form-control"
                            placeholder="Last Name"
                            autoComplete="off"
                            {...register("last_name", { required: true })}
                          />
                          <i className="glyphicon glyphicon-user form-control-feedback glyphiconalign"></i>
                          <span
                            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator9"
                            style={{
                              color: "Red",
                              display: errors?.last_name ? "block" : "none",
                            }}
                          >
                            *
                          </span>
                        </div>
                        <div className="text-left form-group has-feedback">
                          <select
                            name="ctl00$ContentPlaceHolder1$ddlmobilecodes"
                            id="ctl00_ContentPlaceHolder1_ddlmobilecodes"
                            className="form-control clsmobilecodes"
                            {...register("country", { required: true })}
                          >
                            <option value="93">Afghanistan 93</option>
                            <option value="355">Albania 355</option>
                            <option value="213">Algeria 213</option>
                            <option value="684">American Samoa 684</option>
                            <option value="376">Andorra 376</option>
                            <option value="244">Angola 244</option>
                            <option value="1-264">Anguilla 1-264</option>
                            <option value="672">Antarctica 672</option>
                            <option value="1-268">
                              Antigua and Barbuda 1-268
                            </option>
                            <option value="54">Argentina 54</option>
                            <option value="374">Armenia 374</option>
                            <option value="297">Aruba 297</option>
                            <option value="61">Australia 61</option>
                            <option value="43">Austria 43</option>
                            <option value="994">Azerbaijan 994</option>
                            <option value="1-242">Bahamas 1-242</option>
                            <option value="973">Bahrain 973</option>
                            <option value="880">Bangladesh 880</option>
                            <option value="1-246">Barbados 1-246</option>
                            <option value="375">Belarus 375</option>
                            <option value="32">Belgium 32</option>
                            <option value="501">Belize 501</option>
                            <option value="229">Benin 229</option>
                            <option value="1-441">Bermuda 1-441</option>
                            <option value="975">Bhutan 975</option>
                            <option value="591">Bolivia 591</option>
                            <option value="387">Bosnia-Herzegovina 387</option>
                            <option value="267">Botswana 267</option>
                            <option value="55">Brazil 55</option>
                            <option value="673">Brunei Darussalam 673</option>
                            <option value="359">Bulgaria 359</option>
                            <option value="226">Burkina Faso 226</option>
                            <option value="257">Burundi 257</option>
                            <option value="855">Cambodia 855</option>
                            <option value="237">Cameroon 237</option>
                            <option value="1">Canada 1</option>
                            <option value="238">Cape Verde 238</option>
                            <option value="1-345">Cayman Islands 1-345</option>
                            <option value="236">
                              Central African Republic 236
                            </option>
                            <option value="235">Chad 235</option>
                            <option value="56">Chile 56</option>
                            <option value="86">China 86</option>
                            <option value="61">Christmas Island 61</option>
                            <option value="61">
                              Cocos (Keeling) Islands 61
                            </option>
                            <option value="57">Colombia 57</option>
                            <option value="269">Comoros 269</option>
                            <option value="242">Congo 242</option>
                            <option value="243">
                              Congo, Dem. Republic 243
                            </option>
                            <option value="682">Cook Islands 682</option>
                            <option value="506">Costa Rica 506</option>
                            <option value="385">Croatia 385</option>
                            <option value="53">Cuba 53</option>
                            <option value="357">Cyprus 357</option>
                            <option value="420">Czech Rep. 420</option>
                            <option value="45">Denmark 45</option>
                            <option value="253">Djibouti 253</option>
                            <option value="1-767">Dominica 1-767</option>
                            <option value="809">Dominican Republic 809</option>
                            <option value="593">Ecuador 593</option>
                            <option value="20">Egypt 20</option>
                            <option value="503">El Salvador 503</option>
                            <option value="240">Equatorial Guinea 240</option>
                            <option value="291">Eritrea 291</option>
                            <option value="372">Estonia 372</option>
                            <option value="251">Ethiopia 251</option>
                            <option value="500">
                              Falkland Islands (Malvinas) 500
                            </option>
                            <option value="298">Faroe Islands 298</option>
                            <option value="679">Fiji 679</option>
                            <option value="358">Finland 358</option>
                            <option value="33">France 33</option>
                            <option value="594">French Guiana 594</option>
                            <option value="241">Gabon 241</option>
                            <option value="220">Gambia 220</option>
                            <option value="995">Georgia 995</option>
                            <option value="49">Germany 49</option>
                            <option value="233">Ghana 233</option>
                            <option value="350">Gibraltar 350</option>
                            <option selected="selected" value="44">
                              Great Britain 44
                            </option>
                            <option value="30">Greece 30</option>
                            <option value="299">Greenland 299</option>
                            <option value="1-473">Grenada 1-473</option>
                            <option value="590">Guadeloupe (French) 590</option>
                            <option value="1-671">Guam (USA) 1-671</option>
                            <option value="502">Guatemala 502</option>
                            <option value="224">Guinea 224</option>
                            <option value="245">Guinea Bissau 245</option>
                            <option value="592">Guyana 592</option>
                            <option value="509">Haiti 509</option>
                            <option value="504">Honduras 504</option>
                            <option value="852">Hong Kong 852</option>
                            <option value="36">Hungary 36</option>
                            <option value="354">Iceland 354</option>
                            <option value="91">India 91</option>
                            <option value="62">Indonesia 62</option>
                            <option value="98">Iran 98</option>
                            <option value="964">Iraq 964</option>
                            <option value="353">Ireland 353</option>
                            <option value="972">Israel 972</option>
                            <option value="39">Italy 39</option>
                            <option value="225">Ivory Coast 225</option>
                            <option value="1-876">Jamaica 1-876</option>
                            <option value="81">Japan 81</option>
                            <option value="962">Jordan 962</option>
                            <option value="7">Kazakhstan 7</option>
                            <option value="254">Kenya 254</option>
                            <option value="686">Kiribati 686</option>
                            <option value="850">Korea-North 850</option>
                            <option value="82">Korea-South 82</option>
                            <option value="965">Kuwait 965</option>
                            <option value="996">Kyrgyzstan 996</option>
                            <option value="856">Laos 856</option>
                            <option value="371">Latvia 371</option>
                            <option value="961">Lebanon 961</option>
                            <option value="266">Lesotho 266</option>
                            <option value="231">Liberia 231</option>
                            <option value="218">Libya 218</option>
                            <option value="423">Liechtenstein 423</option>
                            <option value="370">Lithuania 370</option>
                            <option value="352">Luxembourg 352</option>
                            <option value="853">Macau 853</option>
                            <option value="389">Macedonia 389</option>
                            <option value="261">Madagascar 261</option>
                            <option value="265">Malawi 265</option>
                            <option value="60">Malaysia 60</option>
                            <option value="960">Maldives 960</option>
                            <option value="223">Mali 223</option>
                            <option value="356">Malta 356</option>
                            <option value="692">Marshall Islands 692</option>
                            <option value="596">Martinique (French) 596</option>
                            <option value="222">Mauritania 222</option>
                            <option value="230">Mauritius 230</option>
                            <option value="269">Mayotte 269</option>
                            <option value="52">Mexico 52</option>
                            <option value="691">Micronesia 691</option>
                            <option value="373">Moldova 373</option>
                            <option value="377">Monaco 377</option>
                            <option value="976">Mongolia 976</option>
                            <option value="382">Montenegro 382</option>
                            <option value="1-664">Montserrat 1-664</option>
                            <option value="212">Morocco 212</option>
                            <option value="258">Mozambique 258</option>
                            <option value="95">Myanmar 95</option>
                            <option value="264">Namibia 264</option>
                            <option value="674">Nauru 674</option>
                            <option value="977">Nepal 977</option>
                            <option value="31">Netherlands 31</option>
                            <option value="599">
                              Netherlands Antilles 599
                            </option>
                            <option value="687">
                              New Caledonia (French) 687
                            </option>
                            <option value="64">New Zealand 64</option>
                            <option value="505">Nicaragua 505</option>
                            <option value="227">Niger 227</option>
                            <option value="234">Nigeria 234</option>
                            <option value="683">Niue 683</option>
                            <option value="672">Norfolk Island 672</option>
                            <option value="670">
                              Northern Mariana Islands 670
                            </option>
                            <option value="47">Norway 47</option>
                            <option value="968">Oman Muscat 968</option>
                            <option value="92">Pakistan 92</option>
                            <option value="680">Palau 680</option>
                            <option value="507">Panama 507</option>
                            <option value="675">Papua New Guinea 675</option>
                            <option value="595">Paraguay 595</option>
                            <option value="51">Peru 51</option>
                            <option value="63">Philippines 63</option>
                            <option value="48">Poland 48</option>
                            <option value="689">Polynesia (French) 689</option>
                            <option value="351">Portugal 351</option>
                            <option value="1-787">Puerto Rico 1-787</option>
                            <option value="974">Qatar 974</option>
                            <option value="262">Reunion (French) 262</option>
                            <option value="40">Romania 40</option>
                            <option value="7">Russia 7</option>
                            <option value="250">Rwanda 250</option>
                            <option value="290">Saint Helena 290</option>
                            <option value="1-869">
                              Saint Kitts and Nevis Anguilla 1-869
                            </option>
                            <option value="1-758">Saint Lucia 1-758</option>
                            <option value="508">
                              Saint Pierre and Miquelon 508
                            </option>
                            <option value="1-784">
                              Saint Vincent and Grenadines 1-784
                            </option>
                            <option value="684">Samoa 684</option>
                            <option value="378">San Marino 378</option>
                            <option value="239">
                              Sao Tome and Principe 239
                            </option>
                            <option value="966">Saudi Arabia 966</option>
                            <option value="221">Senegal 221</option>
                            <option value="381">Serbia 381</option>
                            <option value="248">Seychelles 248</option>
                            <option value="232">Sierra Leone 232</option>
                            <option value="65">Singapore 65</option>
                            <option value="421">Slovakia 421</option>
                            <option value="386">Slovenia 386</option>
                            <option value="677">Solomon Islands 677</option>
                            <option value="252">Somalia 252</option>
                            <option value="27">South Africa 27</option>
                            <option value="34">Spain 34</option>
                            <option value="94">Sri Lanka 94</option>
                            <option value="249">Sudan 249</option>
                            <option value="597">Suriname 597</option>
                            <option value="268">Swaziland 268</option>
                            <option value="46">Sweden 46</option>
                            <option value="41">Switzerland 41</option>
                            <option value="963">Syria 963</option>
                            <option value="886">Taiwan 886</option>
                            <option value="992">Tajikistan 992</option>
                            <option value="255">Tanzania 255</option>
                            <option value="66">Thailand 66</option>
                            <option value="228">Togo 228</option>
                            <option value="690">Tokelau 690</option>
                            <option value="676">Tonga 676</option>
                            <option value="1-868">
                              Trinidad and Tobago 1-868
                            </option>
                            <option value="216">Tunisia 216</option>
                            <option value="90">Turkey 90</option>
                            <option value="993">Turkmenistan 993</option>
                            <option value="1-649">
                              Turks and Caicos Islands 1-649
                            </option>
                            <option value="688">Tuvalu 688</option>
                            <option value="44">United Kingdom 44</option>
                            <option value="1">USA 1</option>
                            <option value="256">Uganda 256</option>
                            <option value="380">Ukraine 380</option>
                            <option value="971">
                              United Arab Emirates 971
                            </option>
                            <option value="598">Uruguay 598</option>
                            <option value="998">Uzbekistan 998</option>
                            <option value="678">Vanuatu 678</option>
                            <option value="39">Vatican 39</option>
                            <option value="58">Venezuela 58</option>
                            <option value="84">Vietnam 84</option>
                            <option value="1-284">
                              Virgin Islands (British) 1-284
                            </option>
                            <option value="1-340">
                              Virgin Islands (USA) 1-340
                            </option>
                            <option value="681">
                              Wallis and Futuna Islands 681
                            </option>
                            <option value="967">Yemen 967</option>
                            <option value="260">Zambia 260</option>
                            <option value="263">Zimbabwe 263</option>
                          </select>
                          <i className="glyphicon glyphicon-chevron-down"></i>
                          <span
                            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator10"
                            style={{
                              color: "Red",
                              display: errors?.country ? "block" : "none",
                            }}
                          >
                            *
                          </span>
                        </div>
                        <div className="text-left form-group has-feedback">
                          <input
                            name="ctl00$ContentPlaceHolder1$txtmobilenumber"
                            type="text"
                            id="ctl00_ContentPlaceHolder1_txtmobilenumber"
                            className="form-control"
                            placeholder="Mobile Number"
                            autoComplete="off"
                            {...register("phone", {
                              required: true,
                              pattern: {
                                value: /^[0-9]+$/,
                              },
                            })}
                          />
                          <i className="glyphicon glyphicon-phone form-control-feedback glyphiconalign"></i>
                          <span
                            id="ctl00_ContentPlaceHolder1_RequiredFieldValidator10"
                            style={{
                              color: "Red",
                              display: errors?.phone ? "block" : "none",
                            }}
                          >
                            *
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="signbtncvr">
                      <input
                        type="submit"
                        id="ctl00_ContentPlaceHolder1_lnkSignup"
                        className="signupbtn3 clssignup sign-up-button"
                        value="Sign Up"
                      />

                      <br />
                      <br />
                      <br />
                      <span
                        id="ctl00_ContentPlaceHolder1_lblerror"
                        style={{ color: "Red" }}
                      ></span>
                    </div>
                  </form>
                  <hr />
                  <div className="text-center sign-line">
                    <span style={{ fontWeight: "bold" }}>
                      OR sign-in with one click
                    </span>
                  </div>
                  <div id="socialmedias" className="social-iconset">
                    <span>
                      <input
                        type="image"
                        name="ctl00$ContentPlaceHolder1$btnfacebooklogin"
                        id="ctl00_ContentPlaceHolder1_btnfacebooklogin"
                        Text="Login with Facebook"
                        src={
                          process.env.PUBLIC_URL + "assets/images/fb_login.png"
                        }
                        style={{ borderWidth: 0 }}
                      />
                    </span>
                    <span>
                      <input
                        type="image"
                        name="ctl00$ContentPlaceHolder1$imgGoogle"
                        id="ctl00_ContentPlaceHolder1_imgGoogle"
                        className="img-responsive app_ico"
                        src={
                          process.env.PUBLIC_URL + "assets/images/google.png"
                        }
                        style={{
                          borderWidth: 0,
                          width: "105px",
                          height: "24px",
                          marginBottom: "0px",
                          marginLeft: "10px",
                        }}
                      />
                    </span>
                  </div>
                  {wrongEmailOrPassword && (
                    <div
                      className="w3-panel text-center sign-line"
                      id="AlreadyMemberRegisteredMsg"
                      style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <p style={{ marginBottom: "0px", color: "red" }}>
                        {text}
                        <input
                          type="button"
                          id="alreadyregistered"
                          // onClick={() => AlreadyMemberRegisteredClose()}
                          style={{
                            marginLeft: "7px",
                            display: "none",
                            padding: "4px 14px",
                            backgroundColor: "#e41a7e",
                            fontSize: "13px",
                            color: "white",
                            border: "none",
                          }}
                          value="Close"
                          align="center"
                        />
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="space"></div>
        </div>
    </AppLayout>
  );
};

export default SignUpForm;
