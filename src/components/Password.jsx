import React, { useState } from "react";
import "./styles/User.scss";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/user";
import { useAuthStore } from "../store/store";
import { verifyPassword } from "../helper/helper";
import useFetch from "../hooks/fetch.hook";
import avator from "../assets/profile.png";
import company from "../assets/aristostech.jpg";
export default function Password() {

  let navigate=useNavigate();
  const { username } = useAuthStore((store) => store.auth);
  let [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`);
  //Formik for form validation:
  let formik = useFormik({
    initialValues: {
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,

    validate: passwordValidate,
    onSubmit: async (values) => {
      let loginPromise = verifyPassword({
        username,
        password: values.password,
      });
      toast.promise(loginPromise, {
        loading: "Checking...",
        success: "Login successfully..!",
        error: "Password not match.",
      });
      loginPromise.then((res) => {
        let { token } = res.data;
        localStorage.setItem("token", token);
        navigate("/profile");
      });
    },
  });

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
          <h1>Hello , {apiData?.firstName || apiData?.username}</h1>
          <p className="text-center text-sm">Enter your Account Password</p>
        </div>

        <form action="" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center p-4">
            <img src={apiData?.profile || avator} alt="avatar" />
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

          <div className="nameError flex justify-start w-auto"></div>

          <button className="start_btn" type="submit">
            Sign In
          </button>
        </form>

        <div className="register_session">
          <p>
            Forgot Password ? <Link to="/recovery">Recover Now</Link>
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
