import React, { useState } from "react";
import "../styles/DigitalCard_Styles/Card.scss";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import logo from "/src/assets/LOGO.png";
import tick from "/src/assets/icons8-tick.gif";
import profile from "/src/assets/aristostech.jpg";
import website_dev from "/src/assets/website_dev.jpeg";
import phone from "/src/assets/phone.gif";
import card from "/src/assets/1.png";
// import card1 from "/src/assets/2.png";
// import card2 from "/src/assets/3.png";
// //gallery image upload:
// import pic1 from "/src/assets/gallery/1.png";
// import pic2 from "/src/assets/gallery/2.png";
// import pic3 from "/src/assets/gallery/3.png";
// import pic4 from "/src/assets/gallery/4.png";

// //Array of values:
// let Our_Special = [
//   "Complete client satisfaction.",
//   "Ethical business policies.",
//   "Live In Touch With Our Customers.",
//   "Transparent dealings.",
//   "Wide connectivity.",
//   "We listen,We understand, We provide Solution.",
//   "A great experience with Happy clients.",
// ];

// //Gallery objects:

// let gallerys = [pic1, pic2, pic3, pic4];

// export default function Card() {
//   let [state, setState] = useState(0);
//   return (
//     <>
//       <div className="card_container">
//         <div className="card_title">
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAMAAAAynjhNAAABPlBMVEVHcEz////N2LByfJNmcHeFkatndI7k5umqtL/X4LuRl5zu7++Bvkqlzn6RxGTg4eNUYpGizGWcw2vT46FIVHutuacqMlAsOmLX3zbf4ePm6ZVbYmpudXysr7KKw1VBToU2RoE6SoGkp6vY2NxndZuLo346R3Tv7+/C0bemwWtNVWjT09a+wMR9hIuYnKLCxcm2uLuXm6D19fWbykGLj5Xp6uo4UHHd42NMUV5KZFnb4Evu9GN8vz99wkEuPoB7u0ErPHwqOXLt7e8kOGnd4OPBxcgtO3ez0jKYnKJ9hYx2vDjG2ywjNWGlqq5WYHEmNnmlzDmOxz4lMlYYHzUjLUmztrqExECZyjkdLmfO0dQYKlvY3x1ud32IjpZ+wTojM27m6Orz9PTS09dWbFDb5CO2u76vxTB9jk88XFdShFQ+mpiFAAAAPHRSTlMAAzYx/kt8DRoi/pPwdb/5orqTQrdD7f74jU9wT73V0e/f49dmfOPVYKuZrcmxrdvf4tb23+f5ra/dz4rKPpwOAAABy0lEQVQokXXSaVeqQBjA8XFB0KueXNPS6lSnfbtbd0kcSFNCE0spwoJuknW//xdonmFEMfv7xsPPeQYGEaLxmaVMFH1S9Feh1Rx1U8G5ulQYtFrNZvfuenfOhGBhMGYrnuBnNPB34Iz5VlRXdmZGO87AccYsWjjp2+FsNBwOX0ctxqKoxhOBCe92aK9dlyskNZ7x+DD8AIUj6e+U4QdY9XY4uoQecuTxU1bFXU4cp91nOHqEftDvuZWKRR1jrP4JwaVyTFFiylc2KxFXGYvDPFnPlxVofXwrQhqrjHt7hA+uII/JKSZVwhV80+/zhHVdf9FPpo8igbF1+2b2eyXE719Ax76TTFr4zbjp95YR2r9/Jp8NH6f+G0bb5S91yMfcqSbXgEuEz6HtCQoLmtRwWSD8D/rmvd/ImlZ1ufcbza7mVrVqlXGeLEZFyj/duVkZlLKZp4dafILqHMxt2JLksm1kBbqiSO+8vhjZ3DLkBmN7i2O7Fe+h57Zp1mTGWiPiPccOPbWLxXaNsaQtCFNvQH8hTVha5dB0ZXhjesekrK1tBnyKgjGScglsy9NzWTn4sz122oadDX1AUvQwTOrszUVENuNDy6WPYxF6B4JahHYc/5r1AAAAAElFTkSuQmCC"
//             alt="brand"
//           />
//           <h4 className="text-bold">Let's Build Your Brand..</h4>
//           <img
//             width="64"
//             height="64"
//             src="https://img.icons8.com/external-flat-geotatah/64/external-brand-customer-engagement-flat-flat-geotatah-2.png"
//             alt="external-brand-customer-engagement-flat-flat-geotatah-2"
//           />
//         </div>
//         <div className="card_box">
//           {/* //Home page */}
//           <div className="home">
//             <div className="views">
//               <img
//                 width="48"
//                 height="48"
//                 src="https://img.icons8.com/color/48/visible.png"
//                 alt="visible"
//               />
//               <p>
//                 Views : <span>{state}</span>
//               </p>
//             </div>
//             <div className="profile_pic">
//               <img src={profile} alt="" />
//             </div>
//             <div className="company_name">
//               <h4>AristosTech India Pvt Ltd</h4>
//             </div>
//             <div className="owner_name">
//               <p>
//                 K.Jayakumar <span>(Propertier)</span>
//               </p>
//             </div>
//             <div className="be_touch">
//               <p>Let's talk and visit us :</p>

//               <div className="actions">
//                 <a href="tel:+91 8825457794">
//                   <img
//                     width="64"
//                     height="64"
//                     src="https://img.icons8.com/arcade/64/call-male.png"
//                     alt="call-male"
//                   />
//                   <p>Call</p>
//                 </a>
//                 <Link to="/">
//                   <img
//                     width="48"
//                     height="48"
//                     src="https://img.icons8.com/color/48/whatsapp--v1.png"
//                     alt="whatsapp--v1"
//                   />
//                   <p>WhatsUp</p>
//                 </Link>
//                 <Link to="/">
//                   <img
//                     width="64"
//                     height="64"
//                     src="https://img.icons8.com/arcade/64/south-direction.png"
//                     alt="south-direction"
//                   />
//                   <p>Direction</p>
//                 </Link>

//                 <Link to="/">
//                   <img
//                     width="64"
//                     height="64"
//                     src="https://img.icons8.com/arcade/64/new-post--v2.png"
//                     alt="new-post--v2"
//                   />
//                   <p>Mail</p>
//                 </Link>
//               </div>
//             </div>
//             <div className="address_details">
//               <div className="street">
//                 <img
//                   width="94"
//                   height="94"
//                   src="https://img.icons8.com/3d-fluency/94/location.png"
//                   alt="location"
//                 />
//                 <p>
//                   ARISTOS TECH ANKUR PLAZA Shop No - 43, First floor,
//                   No-113,(Old 52), G. N CHETTY ROAD, T. Nagar, CHENNAI-600017
//                 </p>
//               </div>
//               <div className="mail">
//                 <img
//                   width="48"
//                   height="48"
//                   src="https://img.icons8.com/color/48/filled-message.png"
//                   alt="filled-message"
//                 />
//                 <p>support@aristostech.in</p>
//               </div>
//               <div className="site">
//                 <img
//                   width="48"
//                   height="48"
//                   src="https://img.icons8.com/fluency/48/domain.png"
//                   alt="domain"
//                 />
//                 <p>https://aristostech.in</p>
//               </div>
//               <div className="contact">
//                 <img
//                   width="48"
//                   height="48"
//                   src="https://img.icons8.com/fluency/48/contact-card.png"
//                   alt="contact-card"
//                 />
//                 <p>(+91)93444 82370</p>
//               </div>
//             </div>
//           </div>
//           {/* About page */}
//           <div className="about">
//             <div className="about_title">
//               <h4>About Us</h4>
//               <img
//                 width="64"
//                 height="64"
//                 src="https://img.icons8.com/flat-round/64/info.png"
//                 alt="info"
//               />
//             </div>
//             <div className="about_content">
//               <div className="company_name">
//                 <h6>Company Name </h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>AristosTech India Pvt Ltd</p>
//               </div>
//               <div className="category">
//                 <h6>Category </h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>Information Technology</p>
//               </div>
//               <div className="year">
//                 <h6>Year of Est </h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>2021</p>
//               </div>
//               <div className="bussiness">
//                 <h6>Nature of Business</h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>
//                   Web Dev Project,FullStack Dev Project,E-commerse
//                   Website,Wordpress Website etc...
//                 </p>
//               </div>
//             </div>
//             <div className="our_specialities">
//               <div className="specialities_title">
//                 <h4>Our Specialities</h4>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-fundraiser-event-management-flaticons-lineal-color-flat-icons-3.png"
//                   alt="external-fundraiser-event-management-flaticons-lineal-color-flat-icons-3"
//                 />
//               </div>
//               <div className="content">
//                 <ul>
//                   {Our_Special.map((list, index) => {
//                     return (
//                       <div className="list" key={index}>
//                         <img src={tick} alt="tick" />
//                         <li>{list}</li>
//                       </div>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//             {/* Vcard uses explaination */}
//             <div className="vcard_indetail">
//               <div className="vcard_title">
//                 <img src={logo} alt="logo" />
//                 <h4>Vcard</h4>
//               </div>

//               <div className="content_1">
//                 <div className="heading">
//                   <h4>What is Digital Vcard ?</h4>
//                 </div>
//                 <div className="content">
//                   <p>
//                     Digital vCard is one of the innovative ways to share your
//                     personal and business details with your prospect by just
//                     using your Mobile Phone.
//                   </p>
//                 </div>
//               </div>
//               <div className="content_2">
//                 <div className="heading">
//                   <h4>How it helps Your Business ?</h4>
//                 </div>
//                 <div className="content">
//                   <p>
//                     It Works AS Mini Website For Your Business And Is Used As An
//                     Mini E-Commerce Website For Small Business Owners. Our
//                     Digital Visting Card Is Elegant And Affordable. This Card
//                     Can Be Updated Easily, So Your'e Not Going To Have To
//                     Reprint Your Business Card Again.
//                   </p>
//                 </div>
//               </div>
//               <div className="vcard_title_2">
//                 <h4>Who needs Digital Vcard ?</h4>
//               </div>
//               <div className="content_3">
//                 <div className="heading">
//                   <h6>Small Business Owners </h6>
//                 </div>
//                 <div className="content">
//                   <p>
//                     Miki vcard is helps you to expand your business digitally.
//                     our digital visiting card caters to the needs of a website
//                     for small business owners.
//                   </p>
//                 </div>
//               </div>
//               <div className="content_4">
//                 <div className="heading">
//                   <h6>Digital Marketers </h6>
//                 </div>
//                 <div className="content">
//                   <p>
//                     Our digital visiting card lets you keep your social links
//                     and service in one place. sometimes you can use it as a
//                     landing page for your paid campaign.
//                   </p>
//                 </div>
//               </div>
//               <div className="content_5">
//                 <div className="heading">
//                   <h6>Influencers </h6>
//                 </div>
//                 <div className="content">
//                   <p>
//                     Influencers used our digital visiting card on their social
//                     bio. Also , it lets you put your performance and activities
//                     in one place and share them easily with a single click.
//                   </p>
//                 </div>
//               </div>
//               <div className="content_6">
//                 <div className="heading">
//                   <h6>Professionals </h6>
//                 </div>
//                 <div className="content">
//                   <p>
//                     professionals like to print a visiting card. but this is not
//                     the time for printed cards, this is A Digital world, so
//                     create a digital vcard for yourself.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Product page */}
//           <div className="product_services">
//             <div className="product_title">
//               <h4>Product & Services</h4>
//               <img
//                 width="64"
//                 height="64"
//                 src="https://img.icons8.com/external-flat-geotatah/64/external-brand-customer-engagement-flat-flat-geotatah-2.png"
//                 alt="external-brand-customer-engagement-flat-flat-geotatah-2"
//               />
//             </div>
//             <div className="service_1">
//               <div className="service_title">
//                 <img
//                   width="30"
//                   height="30"
//                   src="https://img.icons8.com/offices/30/e-learning.png"
//                   alt="e-learning"
//                 />
//                 <h4>Web Design & Development</h4>
//               </div>
//               <div className="service1_content">
//                 <p>
//                   We help you build an intercative & mobile responsive webiste
//                   for your business. it helps to get more visitors and it
//                   promotes your business 24/7.
//                 </p>
//               </div>
//               <div className="service1_image">
//                 <img src={website_dev} alt="website image" />
//               </div>
//               <div className="service1_actions">
//                 <p className="price">Price : ₹ 8000</p>

//                 <a href="to:+91 8825457794">
//                   <img src={phone} alt="phone" />
//                   <p>Enquiry</p>
//                 </a>
//               </div>
//             </div>
//             <div className="service_2">
//               <div className="service2_title">
//                 <img
//                   width="30"
//                   height="30"
//                   src="https://img.icons8.com/offices/30/e-learning.png"
//                   alt="e-learning"
//                 />
//                 <h4>Digital Visiting Card</h4>
//               </div>
//               <div className="service2_content">
//                 <p>
//                   Our digital visiting card helpes to share your business
//                   products and details with your customers and business friends.
//                 </p>
//               </div>
//               <div className="service2_image">
//                 <img src={card} alt="card" />
//               </div>
//               <div className="service2_actions">
//                 <p className="price">Price : ₹ 1000</p>

//                 <a href="to:+91 8825457794">
//                   <img src={phone} alt="phone" />
//                   <p>Enquiry</p>
//                 </a>
//               </div>
//             </div>

//             <div className="service2_uses">
//               <div className="service2_uses_title">
//                 <h4>Digital Vcard Features</h4>
//               </div>

//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Click to Call</h5>
//                 </div>
//                 <div className="explaination">
//                   Your customers will easily call you by just click your mobile
//                   number on your vcard.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Click To WhatsApp</h5>
//                 </div>
//                 <div className="explaination">
//                   Your customer can whatsapp you without even saving your
//                   number.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Click to Email</h5>
//                 </div>
//                 <div className="explaination">
//                   One Click and your customer will be able to send you an email
//                   directly.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Click to Navigate</h5>
//                 </div>
//                 <div className="explaination">
//                   Using our digital visiting Card, people can navigate to your
//                   store with Google Maps.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Add to Contacts</h5>
//                 </div>
//                 <div className="explaination">
//                   People can save all your contact details in their phone
//                   address book.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Website & Social Links</h5>
//                 </div>
//                 <div className="explaination">
//                   Customer can visit your website and social sites with a single
//                   click through digital vcard.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Share Unlimited</h5>
//                 </div>
//                 <div className="explaination">
//                   You can share your digital visiting card unlimited times to
//                   anyone using social media.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Easy To Update</h5>
//                 </div>
//                 <div className="explaination">
//                   You can update your details as and when you want to change
//                   unlimited times.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Product Catalogue</h5>
//                 </div>
//                 <div className="explaination">
//                   Easily to list your featured products/services with image and
//                   detail description.(15 products)
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Photo Gallery</h5>
//                 </div>
//                 <div className="explaination">
//                   Showcase your business related images and products to your
//                   customers (20 photo ).
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Youtube Video Gallery</h5>
//                 </div>
//                 <div className="explaination">
//                   Impress your customer by showing them your business related
//                   youtube videos.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Payment Section</h5>
//                 </div>
//                 <div className="explaination">
//                   Display payment details to your customers, Like: Paytm,
//                   Phonepe, Google Pay, Bank Account (Including QR code Images)
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Reviews & Ratings</h5>
//                 </div>
//                 <div className="explaination">
//                   Anyone can give feedback about your organization and rate out
//                   of 5 stars and others can see on the cards.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Enquiry Form</h5>
//                 </div>
//                 <div className="explaination">
//                   Our Card can help to capture leads with enquiry form. You will
//                   get Email notification for each enquiry.
//                 </div>
//               </div>
//               <div className="usecase_1">
//                 <div className="title">
//                   <h5>Visitors count</h5>
//                 </div>
//                 <div className="explaination">
//                   Card shows the unique visitor count who viewed your card,
//                   Is not it cool!!
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* payment page */}
//           <div className="payment">
//             <div className="payment_title">
//               <h4>Payment</h4>
//               <img
//                 width="16"
//                 height="16"
//                 src="https://img.icons8.com/office/16/money-bag-euro.png"
//                 alt="money-bag-euro"
//               />
//             </div>

//             <div className="container_1">
//               <div className="row_1">
//                 <h6>Phone Pay Number</h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>+91 8825457794</p>
//               </div>
//               <div className="row_2">
//                 <h6>Google Pay Number</h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>+91 8825457794</p>
//               </div>
//             </div>

//             <div className="container_2">
//               <div className="container2_title">
//                 <h5>Account Details</h5>
//               </div>
//               <div className="row_1">
//                 <h6>Bank Name</h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>State Bank Of India</p>
//               </div>
//               <div className="row_2">
//                 <h6>IFSC Code</h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>SBIN0007585</p>
//               </div>
//               <div className="row_3">
//                 <h6>Customer Name</h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>Kodiyarasu C</p>
//               </div>
//               <div className="row_4">
//                 <h6>Account Number</h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>37117701604</p>
//               </div>
//               <div className="row_5">
//                 <h6>Account Type</h6>
//                 <img
//                   width="64"
//                   height="64"
//                   src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
//                   alt="experimental-arrow-pieces"
//                 />
//                 <p>Saving</p>
//               </div>
//             </div>
//           </div>
//           {/* Gallery page */}

//           <div className="gallery">
//             <div className="gallery_title">
//               <h4>Gallery</h4>
//               <img
//                 width="16"
//                 height="16"
//                 src="https://img.icons8.com/office/16/ios-photos.png"
//                 alt="ios-photos"
//               />
//             </div>

//             <div className="gallery_container">
//               {gallerys.map((pick, index) => {
//                 return <img key={index} src={pick} alt="gallery pick" />;
//               })}
//             </div>
//           </div>
//           {/* //Feedback page*/}

//           <div className="feedback">
//             <div className="feedback_title">
//               <h4>Feedback</h4>
//               <img
//                 width="16"
//                 height="16"
//                 src="https://img.icons8.com/office/16/popular-topic.png"
//                 alt="popular-topic"
//               />
//             </div>
//             <div className="feedback_container">
//               <div className="feedback_heading">
//                 <h5>Give Feedback Something About Us </h5>
//               </div>
//               <form action="">
//                 <div className="form_group">
//                   <input type="text" placeholder="Enter Full Name" name="name" id="name" />
//                   <img width="64" height="64" src="https://img.icons8.com/nolan/64/user.png" alt="user"/>
//                 </div>
//                 <div className="form_group">
//                 <textarea name="msg" id="msg" cols="30" rows="4" placeholder="Tell something about us !"></textarea>
//                 <img width="48" height="48" src="https://img.icons8.com/fluency/48/edit-text-file.png" alt="edit-text-file"/>
//                 </div>
//                 <div className="form_actions">
//                   <button type="submit">Send Feedback</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           {/* //Enquiry page */}

//           <div className="enquiry">
//             <div className="enquiry_title">
//             <h4>Enquiry Form</h4>
//             <img width="64" height="64" src="https://img.icons8.com/nolan/64/questions.png" alt="questions"/>
//             </div>
//             <div className="equiry_container">
//               <div className="enquiry_heading">
//                 <h5> Be in Touch </h5>
//                 <img width="48" height="48" src="https://img.icons8.com/fluency/48/group-background-selected.png" alt="group-background-selected"/>
//               </div>
//               <form action="">
//                 <div className="form_group">
//                   <input type="text" placeholder="Enter Full Name" name="name" id="name" />
//                   <img width="64" height="64" src="https://img.icons8.com/nolan/64/user.png" alt="user"/>
//                 </div>
//                 <div className="form_group">
//                   <input type="email" placeholder="Enter your email" name="email" id="email" />
//                   <img width="64" height="64" src="https://img.icons8.com/nolan/64/new-post.png" alt="new-post"/>
//                 </div>
//                 <div className="form_group">
//                   <input type="tel" placeholder="Enter your mobile Number" name="tel" id="tel" />
//                   <img width="64" height="64" src="https://img.icons8.com/nolan/64/phone-disconnected.png" alt="phone-disconnected"/>
//                 </div>
//                 <div className="form_group">
//                 <textarea name="msg" id="msg" cols="30" rows="4" placeholder="Tell something about us !"></textarea>
//                 <img width="48" height="48" src="https://img.icons8.com/fluency/48/edit-text-file.png" alt="edit-text-file"/>
//                 </div>
//                 <div className="form_actions">
//                   <button type="submit">Send Message</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="copyright">
//             <p>Copyright Reserved &copy; 2024 DigitalCard.com</p>
//           </div>
//         </div>
//       </div>
//       <Navbar />
//     </>
//   );
// }
