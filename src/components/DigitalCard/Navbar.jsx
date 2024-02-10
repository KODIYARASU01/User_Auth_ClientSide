import React from "react";
import "../styles/DigitalCard_Styles/Navbar.scss";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
export default function Navbar() {
  //   let menu_animation = {
  //     hide: { y: 0, opacity: 1, transition: { delay: 1 } },
  //     show: { y: 0, opacity: 1, transition: { type: "spring" } },
  //   };
  return (
    <>
      <m.div className="nabar_container">
        <m.div className="menu_list">
          <m.div className="list">
            <Link to="/home">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/home.png"
                alt="home"
              />
              <m.div className="title">
                <p>Home</p>
              </m.div>
            </Link>
          </m.div>
          <m.div className="list">
            <Link to="/about">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/about.png"
                alt="about"
              />
              <m.div className="title">
                <p>AboutUs</p>
              </m.div>
            </Link>
          </m.div>
          <m.div className="list">
            <Link to="/product">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/shopping-cart.png"
                alt="shopping-cart"
              />
              <m.div className="title">
                <p>Products</p>
              </m.div>
            </Link>
          </m.div>
          <m.div className="list">
            <Link to="/payment">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/card-in-use.png"
                alt="card-in-use"
              />
              <m.div className="title">
                <p>Payment</p>
              </m.div>
            </Link>
          </m.div>
          <m.div className="list">
            <Link to="/gallery">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/gallery.png"
                alt="gallery"
              />
              <m.div className="title">
                <p>Gallery</p>
              </m.div>
            </Link>
          </m.div>
          <m.div className="list">
            <Link to="/video">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/video.png"
                alt="video"
              />
              <m.div className="title">
                <p>Videos</p>
              </m.div>
            </Link>
          </m.div>
          <m.div className="list">
            <Link to="/video">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/star.png"
                alt="star"
              />
              <m.div className="title">
                <p>Feedback</p>
              </m.div>
            </Link>
          </m.div>
          <m.div className="list">
            <Link to="/enquiry">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/questions.png"
                alt="questions"
              />
              <m.div className="title">
                <p>Enquiry</p>
              </m.div>
            </Link>
          </m.div>
          <m.div className="list">
            <Link to="/share">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/share.png"
                alt="share"
              />
              <m.div className="title">
                <p>Share</p>
              </m.div>
            </Link>
          </m.div>
        </m.div>
      </m.div>
    </>
  );
}
