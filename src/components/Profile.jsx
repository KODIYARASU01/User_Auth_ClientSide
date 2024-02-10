import React, { useState } from "react";
import "./styles/User.scss";
import { Link,useNavigate } from "react-router-dom";
import toast,{ Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidate } from "../helper/user";
import { useAuthStore } from "../store/store";
import { updateUser } from "../helper/helper";
import useFetch from "../hooks/fetch.hook";
import convertToBase64 from "../helper/convert";
import avator from "../assets/profile.png";
import company from "../assets/aristostech.jpg";
export default function Profile() {
  let navigate=useNavigate();
  //Image store state :
  let [file, setFile] = useState("");
  const { username } = useAuthStore((store) => store.auth);
  let [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`);
  //Formik for form validation:
  let formik = useFormik({
    initialValues: {
      firstName: apiData?.firstName||"",
      lastName: apiData?.lastName||"",
      email: apiData?.email||"",
      mobile: apiData?.mobile||"",
      address: apiData?.address||"",
    },
    validateOnBlur: false,
    validateOnChange: false,

    enableReinitialize: true,
    validate: profileValidate,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || apiData?.profile || "" });
      let updatePromise = updateUser(values);

      toast.promise(updatePromise, {
        loading: 'Updating...',
        success : <b>Update Successfully...!</b>,
        error: <b>Could not Update!</b>
      });

    },
  });

  //Formik does not support file upload so we could create handler :
  const onUpload = async (e) => {
    let base64 = await convertToBase64(e.target.files[0]);

    setFile(base64);
  };

  // logout handler function
  function userLogout(){
    localStorage.removeItem('token');
    navigate('/')
  };


  if (isLoading) {
    return <h1 className="text-2xl font-bold">isLoading</h1>;
  }
  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;
  }

  return (
    <div className="user_container">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="user_header">
        <h3 className="text-center">Welcome to Digital Card Creator!</h3>
        <p className="text-center">
          Brand your store easily,share this digital card with anyone to
          showcase your company profile easier.
        </p>
      </div>
      <div className="register_box">
        <div className="back_btn">
          <Link to="/">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/back.png"
              alt="back"
            />
          </Link>
        </div>
        <div className="box_title">
          <h1>Profile</h1>
          <p className="text-center text-sm">You can update your details!</p>
        </div>

        <form action="" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center p-4">
            <div className="form_group">
              <label htmlFor="profile">
                <img src={apiData?.profile || file || avator} alt="avatar" id="profile_image" />
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
            Come back later ? <button onClick={userLogout} style={{color:'red'}}>Log Out</button>
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
      </div>
    </div>
  );
}
