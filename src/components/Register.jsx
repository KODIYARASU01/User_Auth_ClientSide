import React, { useState } from "react";
import "./styles/User.scss";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidate } from "../helper/user";
import { registerUser } from "../helper/helper";
import convertToBase64 from "../helper/convert";
import avator from "../assets/profile.png";
import company from "../assets/aristostech.jpg";
export default function Register() {
  let navigate = useNavigate();
  //Image store state :
  let [file, setFile] = useState();
  //Formik for form validation:
  let formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: registerValidate,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      let registerPromise =  registerUser(values);
      toast.promise(registerPromise, {
        loading: "Creating....",
        success: <b>Registered Successfully...!</b>,
        error: <b>Could not Register.</b>,
      });

      registerPromise.then(function () {
        navigate("/");
      });
    },
  });

  //Formik does not support file upload so we could create handler :
  const onUpload = async (e) => {
    let base64 = await convertToBase64(e.target.files[0]);

    setFile(base64);
  };

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
      <div className="user_box">
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
          <h1>Register</h1>
          <p className="text-center text-sm">
            Create your new Digital Card Account
          </p>
        </div>

        <form action="" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center p-4">
            <div className="form_group">
              <label htmlFor="profile">
                <img src={file || avator} alt="avatar" id="profile_image" />
                <img id="camera" width="64" height="64" src="https://img.icons8.com/arcade/64/camera--v2.png" alt="camera--v2"/>
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
          <div className="form_group">
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              {...formik.getFieldProps("username")}
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
              type="password"
              placeholder="Password"
              id="name"
              name="name"
              {...formik.getFieldProps("password")}
            />
            <img
              className="icon"
              width="64"
              height="64"
              src="https://img.icons8.com/cute-clipart/64/password.png"
              alt="password"
            />
          </div>
          <button className="start_btn" type="submit">
            Register Now
          </button>
        </form>

        <div className="register_session">
          <p>
            Already Registered ? <Link to="/">Login Now</Link>
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
