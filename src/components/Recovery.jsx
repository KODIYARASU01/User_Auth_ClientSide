import React, { useState,useEffect } from "react";
import "./styles/User.scss";
import { Link,useNavigate } from "react-router-dom";
import toast,{ Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/user";
import {useAuthStore} from '../store/store.js';
import { generateOTP, verifyOTP } from '../helper/helper';
import avator from "../assets/profile.png";
import company from "../assets/aristostech.jpg";
export default function Recovery() {

  const { username } = useAuthStore(state => state.auth);
  const [OTP, setOTP] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    generateOTP(username).then((OTP) => {
      console.log(OTP)
      if(OTP) return toast.success('OTP has been send to your email!');
      return toast.error('Problem while generating OTP!')
    })
  }, [username]);
 
  //Handle submit OTP
  async function onSubmit(e){
    e.preventDefault();
    try {
      let { status } = await verifyOTP({ username, code : OTP })
      if(status === 201){
        toast.success('Verify Successfully!')
        return navigate('/reset')
      }  
    } catch (error) {
      return toast.error('Wront OTP! Check email again!')
    }
  }

  // handler of resend OTP
  function resendOTP(){

    let sentPromise = generateOTP(username);

    toast.promise(sentPromise ,
      {
        loading: 'Sending...',
        success: <b>OTP has been send to your email!</b>,
        error: <b>Could not Send it!</b>,
      }
    );

    sentPromise.then((OTP) => {
      console.log(OTP)
    });
    
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
          <Link to="/password">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/back.png"
              alt="back"
            />
          </Link>
        </div>
        <div className="box_title">
          <h1>Recovery</h1>
          <p className="text-center text-sm">Enter OTP to recover pasword</p>
        </div>

        <form action="" onSubmit={onSubmit}>
          <div className="profile flex justify-center pt-20">
            <span className="py-4 text-sm text-left text-gray-500">
              Enter 6 digit OTP sent to your email address
            </span>
          </div>

          <div className="form_group">
            <input
              type="password"
              placeholder="OTP"
              id="otp"
              name="otp"
              onChange={(e)=>setOTP(e.target.value)}
            />
            <img
              className="icon"
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/one-time-password.png"
              alt="one-time-password"
            />
          </div>

          <button className="start_btn" type="submit">
            Recover
          </button>
        </form>

        <div className="register_session">
          <p>
            Can't get OTP ? <button style={{color:'royalblue'}} to="/recovery" onClick={resendOTP}>Resend</button>
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
