import React, { useEffect, useState } from "react";
import "./styles/User.scss";
import { Link ,useNavigate} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { userNameValidate } from "../helper/user";
import { useAuthStore } from "../store/store.js";
import avator from "../assets/profile.png";
import company from "../assets/aristostech.jpg";
export default function UserName() {

  const navigate=useNavigate();

 const setUsername= useAuthStore(state=>state.setUsername);
 const username= useAuthStore(state=>state.auth.username);

 useEffect(()=>{
  // console.log(username)
 })
  //Formik for form validation:
  let formik = useFormik({
    initialValues: {
      username: "",
    },
    validateOnBlur: false,
    validateOnChange: false,

    validate: userNameValidate,
    onSubmit: async (values) => {
      setUsername(values.username)
      navigate('/password')
    },
  });

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
        <div className="box_title">
          <h1>Hello , User</h1>
          <p className="text-center text-sm">Enter your account Username</p>
        </div>

        <form action="" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center p-4">
            <img src={avator} alt="avatar" />
          </div>

          <div className="form_group">
            <input
              type="text"
              placeholder="username"
              id="name"
              name="name"
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

          <button className="start_btn" type="submit">
            Let's Go
          </button>
        </form>

        <div className="register_session">
          <p>
            Not a Member ? <Link to="/register">Register Now</Link>
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
