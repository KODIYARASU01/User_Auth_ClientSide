import React, { useState } from "react";
import "./Admin.scss";
import logo from "/src/assets/LOGO.png";
import profile from "/src/assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidate } from "/src/helper/user.js";
import { useAuthStore } from "/src/store/store.js";
import { updateUser } from "/src/helper/helper.js";
import useFetch from "/src/hooks/fetch.hook.js";
import convertToBase from "/src/helper/profileConvert.js";
import avator from "/src/assets/profile.png";
import company from "/src/assets/aristostech.jpg";
import { motion as m } from "framer-motion";

import upload from "/src/assets/upload (2).gif";
import pic1 from "/src/assets/gallery/1.png";
import pic2 from "/src/assets/gallery/2.png";
import pic3 from "/src/assets/gallery/3.png";
import pic4 from "/src/assets/gallery/4.png";
// import logo from "/src/assets/LOGO.png";
import tick from "/src/assets/icons8-tick.gif";
// import profile from "/src/assets/aristostech.jpg";
import website_dev from "/src/assets/website_dev.jpeg";
import phone from "/src/assets/phone.gif";
import card from "/src/assets/1.png";

let animation_profile = {
  hide: { x: 400, opacity: 0, transition: { duration: 1 } },
  show: { x: 0, opacity: 1, transition: { duration: 1, type: "spring" } },
};
//Array of values:
let Our_Special = [
  "Complete client satisfaction.",
  "Ethical business policies.",
  "Live In Touch With Our Customers.",
  "Transparent dealings.",
  "Wide connectivity.",
  "We listen,We understand, We provide Solution.",
  "A great experience with Happy clients.",
];

//Gallery array:

let gallerys = [pic1, pic2, pic3, pic4];
const Admin = () => {
  //Profile
  let [state, setState] = useState(0);
  let [profile, setProfile] = useState();
  let [companyName, setCompanyName] = useState();
  let [authorName, setAuthorName] = useState();

  //Social Media
  let [mobile, setMobile] = useState();
  let [whatsup, setWhatsup] = useState();
  let [location, setLocation] = useState();
  let [mail, setMail] = useState();
  //Address
  let [address, setAddess] = useState();
  let [email, setEmail] = useState();
  let [websiteLink, setWebsiteLink] = useState();
  let [phoneNumber, setPhoneNumber] = useState();

  //Show & Hide Profile:
  let [show, setShow] = useState(true);
  let [homeFormShow, setHomeFormShow] = useState(false);
  let [aboutFormShow, setAboutFormShow] = useState(false);
  let [servicesFormShow, setServicesFormShow] = useState(false);
  let [paymentFormShow, setPaymentFormShow] = useState(false);
  let [galleryFormShow, setGalleryFormShow] = useState(false);
  let navigate = useNavigate();
  //Image store state :

  const { username } = useAuthStore((store) => store.auth);
  let [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`);
  //Formik for form validation:
  let formik = useFormik({
    initialValues: {
      firstName: apiData?.firstName || "",
      lastName: apiData?.lastName || "",
      email: apiData?.email || "",
      mobile: apiData?.mobile || "",
      address: apiData?.address || "",
    },
    validateOnBlur: false,
    validateOnChange: false,

    enableReinitialize: true,
    validate: profileValidate,
    onSubmit: async (values) => {
      values = await Object.assign(values, {
        profile: profile || apiData?.profile || "",
      });
      let updatePromise = updateUser(values);

      toast.promise(updatePromise, {
        loading: "Updating...",
        success: <b>Update Successfully...!</b>,
        error: <b>Could not Update!</b>,
      });
    },
  });

  //Formik does not support file upload so we could create handler :
  const onUpload = async (e) => {
    let base64 = await convertToBase(e.target.files[0]);

    setProfile(base64);
  };

  // logout handler function
  function userLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  if (isLoading) {
    return <h1 className="text-2xl font-bold">isLoading</h1>;
  }
  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;
  }

  return (
    <>
      <m.div className="admin_container">
        <Toaster position="top-right" reverseOrder={false}></Toaster>
        <m.div className="admin_nav">
          <div className="left">
            <img src={logo} alt="logo" />
            <h4>Digital Card</h4>
          </div>

          <m.div className="right">
            <h4 className="user_name">
              Hello , {apiData?.firstName || apiData?.username}
            </h4>
            <m.img
              onClick={() => setShow(!show)}
              src={apiData?.profile || profile || avator}
              alt="avatar"
              id="profile_image"
              whileOnClick={animation_profile}
            />
          </m.div>
        </m.div>
        {!show ? (
          <m.div
            className="register_box"
            variants={animation_profile}
            initial="hide"
            animate="show"
          >
            <m.div className="back_btn">
              <Link to="/">
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/nolan/64/back.png"
                  alt="back"
                />
              </Link>
            </m.div>
            <div className="box_title">
              <h1>Profile</h1>
              <p className="text-center text-sm">
                You can update your details!
              </p>
            </div>

            <form action="" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center p-4">
                <div className="form_group">
                  <label htmlFor="profile">
                    <img
                      src={apiData?.profile || profile || avator}
                      alt="avatar"
                      id="profile_image"
                    />
                  </label>
                  <input
                    onChange={onUpload}
                    type="file"
                    id="profile"
                    name="profile"
                  />
                </div>
                <label htmlFor=""></label>
              </div>
              <div className="row_1">
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="firstName"
                    id="firstName"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
                  />
                  <img
                    className="icon"
                    width="64"
                    height="64"
                    src="https://img.icons8.com/nolan/64/user.png"
                    alt="user"
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="lastName"
                    id="lastName"
                    name="lastName"
                    {...formik.getFieldProps("lastName")}
                  />
                  <img
                    className="icon"
                    width="64"
                    height="64"
                    src="https://img.icons8.com/cotton/64/name--v2.png"
                    alt="name--v2"
                  />
                </div>
              </div>
              <div className="row_1">
                <div className="form_group">
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    id="mobile"
                    name="mobile"
                    {...formik.getFieldProps("mobile")}
                  />
                  <img
                    className="icon"
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/callback.png"
                    alt="callback"
                  />
                </div>
                <div className="form_group">
                  <input
                    type="email"
                    placeholder="Eg : abc@gmail.com"
                    id="email"
                    name="Email"
                    {...formik.getFieldProps("email")}
                  />
                  <img
                    className="icon"
                    width="64"
                    height="64"
                    src="https://img.icons8.com/nolan/64/new-post.png"
                    alt="new-post"
                  />
                </div>
              </div>

              <div className="form_group">
                <input
                  type="text"
                  placeholder="Address"
                  id="address"
                  name="address"
                  {...formik.getFieldProps("address")}
                />
                <img
                  className="icon"
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/order-delivered.png"
                  alt="order-delivered"
                />
              </div>

              <button className="start_btn" type="submit">
                Update
              </button>
            </form>

            <div className="register_session">
              <p>
                Come back later ?{" "}
                <button onClick={userLogout} style={{ color: "red" }}>
                  Log Out
                </button>
              </p>
            </div>

            <div className="showcase">
              <p>Explore Our Site & Contact Us</p>

              <div className="actions">
                <Link to="/">
                  <img src={company} alt="company" />
                </Link>
                <Link to="/">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/whatsapp--v1.png"
                    alt="whatsapp--v1"
                  />
                </Link>
                <Link to="/">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/instagram-new--v1.png"
                    alt="instagram-new--v1"
                  />
                </Link>
              </div>
            </div>
          </m.div>
        ) : (
          ""
        )}
        ;
        <div className="container_box">
          <div className="box_left">
            <div className="box_left_title">
              <h4>Create Your Digital Card</h4>
            </div>
            <div className="box_left_home_form_session">
              <div
                className="form_title"
                onClick={() => {
                  setHomeFormShow(!homeFormShow),
                  setGalleryFormShow(false),
                    setAboutFormShow(false),
                    setServicesFormShow(false),
                    setPaymentFormShow(false);
                }}
              >
                <h5>Home Form Session</h5>
                {homeFormShow ? (
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/arcade/64/down-squared.png"
                    alt="down-squared"
                  />
                ) : (
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/arcade/64/right-squared.png"
                    alt="right-squared"
                  />
                )}
              </div>

              <div
                className="home_form"
                id={homeFormShow ? "homeFormShow" : "homeFormHide"}
              >
                <form>
                  <div className="profile_heading">Add Profile</div>
                  <div className="form_group">
                    <label htmlFor="file" className="upload">
                      <img src={upload} alt="upload" />
                    </label>
                    <input
                      onChange={onUpload}
                      type="file"
                      id="file"
                      name="file"
                    />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="company">
                      Company Name
                    </label>
                    <input type="text" id="company" name="company" />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="name">
                      Propertier Name
                    </label>
                    <input type="text" id="name" name="name" />
                  </div>
                  <div className="social_media_heading">Add Social Media</div>
                  <div className="social_media_input">
                    <div className="form_group">
                      <label className="label" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder="Eg : 8825457794"
                      />
                    </div>

                    <div className="form_group">
                      <label className="label" htmlFor="whatsup">
                        Whatup Number
                      </label>
                      <input
                        type="number"
                        id="whatsup"
                        name="whatsup"
                        placeholder="Eg : 8825457794"
                      />
                    </div>
                    <div className="form_group">
                      <label className="label" htmlFor="direction">
                        Company Location link
                      </label>
                      <input
                        type="text"
                        id="direction"
                        name="direction"
                        placeholder="Eg : http ://company location link"
                      />
                    </div>
                    <div className="form_group">
                      <label className="label" htmlFor="company_mail">
                        Company Mail Address
                      </label>
                      <input
                        type="email"
                        id="company_mail"
                        name="company_mail"
                        placeholder="Eg : abc@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="company_address_heading">
                    Add Company Address
                  </div>

                  <div className="form_group">
                    <label className="label" htmlFor="company_loction">
                      Company Location
                    </label>
                    <input
                      type="text"
                      id="company_loction"
                      name="company_loction"
                    />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="company_email">
                      Company Email ID
                    </label>
                    <input
                      type="email"
                      id="company_email"
                      name="company_email"
                    />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="company_website">
                      Company Website Link
                    </label>
                    <input
                      type="text"
                      id="company_website"
                      name="company_website"
                    />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="company_number">
                      Company Phone Number
                    </label>
                    <input
                      type="tel"
                      id="company_number"
                      name="company_number"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="box_left_about_form_session">
              <div
                className="form_title"
                onClick={() => {
                  setAboutFormShow(!aboutFormShow),
                  setGalleryFormShow(false),
                    setHomeFormShow(false),
                    setServicesFormShow(false),
                    setPaymentFormShow(false);
                }}
              >
                <h5>About Form Session</h5>
                {aboutFormShow ? (
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/arcade/64/down-squared.png"
                    alt="down-squared"
                  />
                ) : (
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/arcade/64/right-squared.png"
                    alt="right-squared"
                  />
                )}
              </div>

              <div
                className="home_form"
                id={aboutFormShow ? "aboutFormShow" : "aboutFormHide"}
              >
                <form>
                  <div className="profile_heading">About Us</div>
                  <div className="form_group">
                    <label className="label" htmlFor="company">
                      Company Name
                    </label>
                    <input type="text" id="company" name="company" />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="category">
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      placeholder="Eg:Hardware Store"
                    />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="year">
                      Year Of Estimated
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      placeholder="Eg:2024"
                    />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="bussiness">
                      Nature Of Bussiness
                    </label>
                    <input
                      type="text"
                      id="bussiness"
                      name="bussiness"
                      placeholder="Eg:Pipes,cement Sheets,steel,etc.."
                    />
                  </div>
                  <div className="company_address_heading">
                    Our Specialities
                  </div>

                  <div className="our_specialities">
                    <div className="form_group">
                      <input
                        className="input"
                        type="text"
                        name="list1"
                        id="list1"
                        placeholder="eg:Complete client satisfaction."
                      />
                    </div>
                    <div className="form_group">
                      <input
                        className="input"
                        type="text"
                        name="list2"
                        id="list2"
                        placeholder="eg:Ethical business policies.."
                      />
                    </div>
                    <div className="form_group">
                      <input
                        className="input"
                        type="text"
                        name="list3"
                        id="list3"
                        placeholder="eg:Live In Touch With Our Customers.."
                      />
                    </div>
                    <div className="form_group">
                      <input
                        className="input"
                        type="text"
                        name="list4"
                        id="list4"
                        placeholder="eg:Transparent dealings."
                      />
                    </div>
                    <div className="form_group">
                      <input
                        className="input"
                        type="text"
                        name="list5"
                        id="list5"
                        placeholder="eg:We listen,We understand, We provide Solution."
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="box_left_service_form_session">
              <div
                className="form_title"
                onClick={() => {
                  setServicesFormShow(!servicesFormShow),
                  setGalleryFormShow(false),
                    setHomeFormShow(false),
                    setAboutFormShow(false),
                    setPaymentFormShow(false);
                }}
              >
                <h5>Product & Services Session</h5>
                {servicesFormShow ? (
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/arcade/64/down-squared.png"
                    alt="down-squared"
                  />
                ) : (
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/arcade/64/right-squared.png"
                    alt="right-squared"
                  />
                )}
              </div>

              <div
                className="home_form"
                id={servicesFormShow ? "serviceFormShow" : "serviceFormHide"}
              >
                <form>
                  <div className="profile_heading">Our Services</div>
                  <div className="form_group">
                    <label className="label" htmlFor="service">
                      Service Heading
                    </label>
                    <input type="text" id="service" name="service" />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="message">
                      Tell Something about this services
                    </label>
                    <textarea
                      name="msg"
                      id="msg"
                      cols="30"
                      rows="4"
                      placeholder="Tell something !"
                    ></textarea>
                  </div>
                  <div className="form_group">
                    <label htmlFor="pic">Upload Service Picture</label>
                    <label htmlFor="file" className="upload">
                      <img src={upload} alt="upload" />
                    </label>
                    <input
                      // onChange={onUpload}
                      type="file"
                      id="pic"
                      name="pic"
                    />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="price">
                      Price for this Services
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Eg: 3000"
                    />
                  </div>
                  <div className="form_group">
                    <label className="label" htmlFor="enquiry">
                      For Get More Detail
                    </label>
                    <input
                      type="number"
                      id="enquiry"
                      name="enquiry"
                      placeholder="Eg: 8825457794"
                    />
                  </div>

                  <div className="form_submit">
                    <button type="submit">Update</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="box_left_payment_form_session">
              <div
                className="form_title"
                onClick={() => {
                  setPaymentFormShow(!paymentFormShow),
                  setGalleryFormShow(false),
                    setHomeFormShow(false),
                    setAboutFormShow(false),
                    setServicesFormShow(false);
                }}
              >
                <h5>Payment Form Session</h5>
                {paymentFormShow ? (
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/arcade/64/down-squared.png"
                    alt="down-squared"
                  />
                ) : (
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/arcade/64/right-squared.png"
                    alt="right-squared"
                  />
                )}
              </div>

              <div
                className="payment_form"
                id={paymentFormShow ? "paymentFormShow" : "paymentFormHide"}
              >
                <form>
                  <div className="profile_heading">Add Payment Details</div>
                  <div className="social_media_input">
                    <div className="form_group">
                      <label className="label" htmlFor="phonepay">
                        Phone Pay Number
                      </label>
                      <input
                        type="number"
                        id="phonepay"
                        name="phonepay"
                        placeholder="Eg : +91 8825457794"
                      />
                    </div>

                    <div className="form_group">
                      <label className="label" htmlFor="gpay">
                        Google Pay Number
                      </label>
                      <input
                        type="number"
                        id="gpay"
                        name="gpay"
                        placeholder="Eg : +91 8825457794"
                      />
                    </div>
                  </div>
                  <div className="profile_heading">Add Bank Details</div>
                  <div className="social_media_input">
                    <div className="form_group">
                      <label className="label" htmlFor="bankName">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        id="bankName"
                        name="bankName"
                        placeholder="Eg : State Bank Of India"
                      />
                    </div>

                    <div className="form_group">
                      <label className="label" htmlFor="ifsc">
                        IFSC Code
                      </label>
                      <input type="text" id="ifsc" name="ifsc" />
                    </div>
                    <div className="form_group">
                      <label className="label" htmlFor="customerName">
                        Customer Name
                      </label>
                      <input
                        type="text"
                        id="customerName"
                        name="customerName"
                      />
                    </div>
                    <div className="form_group">
                      <label className="label" htmlFor="accountNumber">
                        Account Number
                      </label>
                      <input
                        type="number"
                        id="accountNumber"
                        name="accountNumber"
                      />
                    </div>
                    <div className="form_group">
                    <label className="label" htmlFor="accountType">
                      Account Type
                    </label>
                    <input
                      type="text"
                      id="accountType"
                      name="accountType"
                      placeholder="Eg : Savings , Current"
                    />
                  </div>
            
                  </div>
                  <div className="form_submit">
                  <button type="submit">Update</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="box_left_gallery_form_session">
            <div
              className="form_title"
              onClick={() => {
                setGalleryFormShow(!galleryFormShow)
                setServicesFormShow(false),
                  setHomeFormShow(false),
                  setAboutFormShow(false),
                  setPaymentFormShow(false);
              }}
            >
              <h5>Gallery Form Session</h5>
              {galleryFormShow ? (
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/arcade/64/down-squared.png"
                  alt="down-squared"
                />
              ) : (
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/arcade/64/right-squared.png"
                  alt="right-squared"
                />
              )}
            </div>

            <div
              className="home_form"
              id={galleryFormShow ? "galleryFormShow" : "galleryFormHide"}
            >
              <form>
                <div className="profile_heading">Create Your Gallery</div>
                <div className="form_group">
                  <label htmlFor="pic">Choose Your Picture</label>
                  <label htmlFor="file" className="upload">
                    <img src={upload} alt="upload" />
                  </label>
                  <input
                    // onChange={onUpload}
                    type="file"
                    id="pic"
                    name="pic"
                  />
                </div>
                <div className="form_submit">
                  <button type="submit">Upload</button>
                </div>
              </form>
            </div>
          </div>
          </div>

          <div className="box_right">
            <div className="box_right_title">
              <h4>Live Preview Session</h4>
            </div>

            <div className="digital_card">
              <div className="card_title">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAMAAAAynjhNAAABPlBMVEVHcEz////N2LByfJNmcHeFkatndI7k5umqtL/X4LuRl5zu7++Bvkqlzn6RxGTg4eNUYpGizGWcw2vT46FIVHutuacqMlAsOmLX3zbf4ePm6ZVbYmpudXysr7KKw1VBToU2RoE6SoGkp6vY2NxndZuLo346R3Tv7+/C0bemwWtNVWjT09a+wMR9hIuYnKLCxcm2uLuXm6D19fWbykGLj5Xp6uo4UHHd42NMUV5KZFnb4Evu9GN8vz99wkEuPoB7u0ErPHwqOXLt7e8kOGnd4OPBxcgtO3ez0jKYnKJ9hYx2vDjG2ywjNWGlqq5WYHEmNnmlzDmOxz4lMlYYHzUjLUmztrqExECZyjkdLmfO0dQYKlvY3x1ud32IjpZ+wTojM27m6Orz9PTS09dWbFDb5CO2u76vxTB9jk88XFdShFQ+mpiFAAAAPHRSTlMAAzYx/kt8DRoi/pPwdb/5orqTQrdD7f74jU9wT73V0e/f49dmfOPVYKuZrcmxrdvf4tb23+f5ra/dz4rKPpwOAAABy0lEQVQokXXSaVeqQBjA8XFB0KueXNPS6lSnfbtbd0kcSFNCE0spwoJuknW//xdonmFEMfv7xsPPeQYGEaLxmaVMFH1S9Feh1Rx1U8G5ulQYtFrNZvfuenfOhGBhMGYrnuBnNPB34Iz5VlRXdmZGO87AccYsWjjp2+FsNBwOX0ctxqKoxhOBCe92aK9dlyskNZ7x+DD8AIUj6e+U4QdY9XY4uoQecuTxU1bFXU4cp91nOHqEftDvuZWKRR1jrP4JwaVyTFFiylc2KxFXGYvDPFnPlxVofXwrQhqrjHt7hA+uII/JKSZVwhV80+/zhHVdf9FPpo8igbF1+2b2eyXE719Ax76TTFr4zbjp95YR2r9/Jp8NH6f+G0bb5S91yMfcqSbXgEuEz6HtCQoLmtRwWSD8D/rmvd/ImlZ1ufcbza7mVrVqlXGeLEZFyj/duVkZlLKZp4dafILqHMxt2JLksm1kBbqiSO+8vhjZ3DLkBmN7i2O7Fe+h57Zp1mTGWiPiPccOPbWLxXaNsaQtCFNvQH8hTVha5dB0ZXhjesekrK1tBnyKgjGScglsy9NzWTn4sz122oadDX1AUvQwTOrszUVENuNDy6WPYxF6B4JahHYc/5r1AAAAAElFTkSuQmCC"
                  alt="brand"
                />
                <h4 className="text-bold">Let's Build Your Brand..</h4>
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/external-flat-geotatah/64/external-brand-customer-engagement-flat-flat-geotatah-2.png"
                  alt="external-brand-customer-engagement-flat-flat-geotatah-2"
                />
              </div>
              <div className="card_box">
                {/* //Home page */}
                <div className="home">
                  <div className="views">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/visible.png"
                      alt="visible"
                    />
                    <p>
                      Views : <span>{state}</span>
                    </p>
                  </div>
                  <div className="profile_pic">
                    <img src={profile} alt=" Profile" />
                  </div>
                  <div className="company_name">
                    <h4>AristosTech India Pvt Ltd</h4>
                  </div>
                  <div className="owner_name">
                    <p>
                      K.Jayakumar <span>(Propertier)</span>
                    </p>
                  </div>
                  <div className="be_touch">
                    <p>Let's talk and visit us :</p>

                    <div className="actions">
                      <a href="tel:+91 8825457794">
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/arcade/64/call-male.png"
                          alt="call-male"
                        />
                        <p>Call</p>
                      </a>
                      <Link to="/">
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/color/48/whatsapp--v1.png"
                          alt="whatsapp--v1"
                        />
                        <p>WhatsUp</p>
                      </Link>
                      <Link to="/">
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/arcade/64/south-direction.png"
                          alt="south-direction"
                        />
                        <p>Direction</p>
                      </Link>

                      <Link to="/">
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/arcade/64/new-post--v2.png"
                          alt="new-post--v2"
                        />
                        <p>Mail</p>
                      </Link>
                    </div>
                  </div>
                  <div className="address_details">
                    <div className="street">
                      <img
                        width="94"
                        height="94"
                        src="https://img.icons8.com/3d-fluency/94/location.png"
                        alt="location"
                      />
                      <p>
                        ARISTOS TECH ANKUR PLAZA Shop No - 43, First floor,
                        No-113,(Old 52), G. N CHETTY ROAD, T. Nagar,
                        CHENNAI-600017
                      </p>
                    </div>
                    <div className="mail">
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/filled-message.png"
                        alt="filled-message"
                      />
                      <p>support@aristostech.in</p>
                    </div>
                    <div className="site">
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/domain.png"
                        alt="domain"
                      />
                      <p>https://aristostech.in</p>
                    </div>
                    <div className="contact">
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/contact-card.png"
                        alt="contact-card"
                      />
                      <p>(+91)93444 82370</p>
                    </div>
                  </div>
                </div>
                {/* About page */}
                <div className="about">
                  <div className="about_title">
                    <h4>About Us</h4>
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/flat-round/64/info.png"
                      alt="info"
                    />
                  </div>
                  <div className="about_content">
                    <div className="company_name">
                      <h6>Company Name </h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>AristosTech India Pvt Ltd</p>
                    </div>
                    <div className="category">
                      <h6>Category </h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>Information Technology</p>
                    </div>
                    <div className="year">
                      <h6>Year of Est </h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>2021</p>
                    </div>
                    <div className="bussiness">
                      <h6>Nature of Business</h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>
                        Web Dev Project,FullStack Dev Project,E-commerse
                        Website,Wordpress Website etc...
                      </p>
                    </div>
                  </div>
                  <div className="our_specialities">
                    <div className="specialities_title">
                      <h4>Our Specialities</h4>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-fundraiser-event-management-flaticons-lineal-color-flat-icons-3.png"
                        alt="external-fundraiser-event-management-flaticons-lineal-color-flat-icons-3"
                      />
                    </div>
                    <div className="content">
                      <ul>
                        {Our_Special.map((list, index) => {
                          return (
                            <div className="list" key={index}>
                              <img src={tick} alt="tick" />
                              <li>{list}</li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Product page */}
                <div className="product_services">
                  <div className="product_title">
                    <h4>Product & Services</h4>
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/external-flat-geotatah/64/external-brand-customer-engagement-flat-flat-geotatah-2.png"
                      alt="external-brand-customer-engagement-flat-flat-geotatah-2"
                    />
                  </div>
                  <div className="service_1">
                    <div className="service_title">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/offices/30/e-learning.png"
                        alt="e-learning"
                      />
                      <h4>Web Design & Development</h4>
                    </div>
                    <div className="service1_content">
                      <p>
                        We help you build an intercative & mobile responsive
                        webiste for your business. it helps to get more visitors
                        and it promotes your business 24/7.
                      </p>
                    </div>
                    <div className="service1_image">
                      <img src={website_dev} alt="website image" />
                    </div>
                    <div className="service1_actions">
                      <p className="price">Price : ₹ 8000</p>

                      <a href="to:+91 8825457794">
                        <img src={phone} alt="phone" />
                        <p>Enquiry</p>
                      </a>
                    </div>
                  </div>
                  <div className="service_2">
                    <div className="service2_title">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/offices/30/e-learning.png"
                        alt="e-learning"
                      />
                      <h4>Digital Visiting Card</h4>
                    </div>
                    <div className="service2_content">
                      <p>
                        Our digital visiting card helpes to share your business
                        products and details with your customers and business
                        friends.
                      </p>
                    </div>
                    <div className="service2_image">
                      <img src={card} alt="card" />
                    </div>
                    <div className="service2_actions">
                      <p className="price">Price : ₹ 1000</p>

                      <a href="to:+91 8825457794">
                        <img src={phone} alt="phone" />
                        <p>Enquiry</p>
                      </a>
                    </div>
                  </div>
                </div>
                {/* payment page */}
                <div className="payment">
                  <div className="payment_title">
                    <h4>Payment</h4>
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/office/16/money-bag-euro.png"
                      alt="money-bag-euro"
                    />
                  </div>

                  <div className="container_1">
                    <div className="row_1">
                      <h6>Phone Pay Number</h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>+91 8825457794</p>
                    </div>
                    <div className="row_2">
                      <h6>Google Pay Number</h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>+91 8825457794</p>
                    </div>
                  </div>

                  <div className="container_2">
                    <div className="container2_title">
                      <h5>Account Details</h5>
                    </div>
                    <div className="row_1">
                      <h6>Bank Name</h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>State Bank Of India</p>
                    </div>
                    <div className="row_2">
                      <h6>IFSC Code</h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>SBIN0007585</p>
                    </div>
                    <div className="row_3">
                      <h6>Customer Name</h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>Kodiyarasu C</p>
                    </div>
                    <div className="row_4">
                      <h6>Account Number</h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>37117701604</p>
                    </div>
                    <div className="row_5">
                      <h6>Account Type</h6>
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                        alt="experimental-arrow-pieces"
                      />
                      <p>Saving</p>
                    </div>
                  </div>
                </div>
                {/* Gallery page */}

                <div className="gallery">
                  <div className="gallery_title">
                    <h4>Gallery</h4>
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/office/16/ios-photos.png"
                      alt="ios-photos"
                    />
                  </div>

                  <div className="gallery_container">
                    {gallerys.map((pick, index) => {
                      return <img key={index} src={pick} alt="gallery pick" />;
                    })}
                  </div>
                </div>
                {/* //Feedback page*/}

                <div className="feedback">
                  <div className="feedback_title">
                    <h4>Feedback</h4>
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/office/16/popular-topic.png"
                      alt="popular-topic"
                    />
                  </div>
                  <div className="feedback_container">
                    <div className="feedback_heading">
                      <h5>Give Feedback Something About Us </h5>
                    </div>
                    <form action="">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Enter Full Name"
                          name="name"
                          id="name"
                        />
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/nolan/64/user.png"
                          alt="user"
                        />
                      </div>
                      <div className="form_group">
                        <textarea
                          name="msg"
                          id="msg"
                          cols="30"
                          rows="4"
                          placeholder="Tell something about us !"
                        ></textarea>
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/fluency/48/edit-text-file.png"
                          alt="edit-text-file"
                        />
                      </div>
                      <div className="form_actions">
                        <button type="submit">Send Feedback</button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* //Enquiry page */}

                <div className="enquiry">
                  <div className="enquiry_title">
                    <h4>Enquiry Form</h4>
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/nolan/64/questions.png"
                      alt="questions"
                    />
                  </div>
                  <div className="equiry_container">
                    <div className="enquiry_heading">
                      <h5> Be in Touch </h5>
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/group-background-selected.png"
                        alt="group-background-selected"
                      />
                    </div>
                    <form action="">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Enter Full Name"
                          name="name"
                          id="name"
                        />
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/nolan/64/user.png"
                          alt="user"
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          name="email"
                          id="email"
                        />
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/nolan/64/new-post.png"
                          alt="new-post"
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="tel"
                          placeholder="Enter your mobile Number"
                          name="tel"
                          id="tel"
                        />
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/nolan/64/phone-disconnected.png"
                          alt="phone-disconnected"
                        />
                      </div>
                      <div className="form_group">
                        <textarea
                          name="msg"
                          id="msg"
                          cols="30"
                          rows="4"
                          placeholder="Tell something about us !"
                        ></textarea>
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/fluency/48/edit-text-file.png"
                          alt="edit-text-file"
                        />
                      </div>
                      <div className="form_actions">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="copyright">
                  <p>Copyright Reserved &copy; 2024 DigitalCard.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Admin;
