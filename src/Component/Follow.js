import React from "react";
import "../Component/Follow.css";
import Card4 from "./Card4.js";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";

function Follow() {
  return (
    <>
      <div className="follow">
        <h3>
          Follow among <a href="">@misfitsmarket</a>
        </h3>

        <div className="image20">
          <Card4 image="14image.jpg" />
          <Card4 image="19image.jpg" />
          <Card4 image="17image.jpg" />
          <Card4 image="10image.jpg" />
          <Card4 image="9image.png" />
          <Card4 image="21image.jpg" />
        </div>

        <div className="last-container">
          <div className="subcribe">
            <h1>Misfits Market</h1>
            <br />
            <small>Subscribe to stay in the loop</small>
            <br />
            <input type="email" placeholder="Enter Email" />
            <br />
            <input type="number" placeholder="Enter Zip Code" />
            <br />
            <button>Sign Up</button>
            <br />
            <small className="by">
              By providing your email address, you agree to our
              <br />
              <a href="">Terms of service</a> and
              <a href=""> Privacy Policy</a>.
            </small>
          </div>

          <div className="sign">
            <div>
              <h4>Sign Up</h4>
              <h4>How It Works</h4>
              <h4>Our Products</h4>
              <h4>Our Sourcing</h4>
              <h4>About Us</h4>
            </div>

            <div>
              <h4>Refer Friends</h4>
              <h4>Blogs</h4>
              <h4>Careers</h4>
              <h4>Reviews & Press</h4>
            </div>
            <div>
              <h4>Accessibility</h4>
              <h4>FAQs</h4>
              <h4>Help Center</h4>
              <h4 className="contact">
                <a href="/contact">Contact Us</a>
              </h4>
            </div>
          </div>
        </div>

        <div className="facebook">
          <div className="icons">

            <div className="face">
              <FaInstagram />
            </div>

            <div className="insta">
              <FaFacebook />
            </div>

            <div className="you">
              <FaTiktok />
            </div>

            <div className="insta">
              <FaXTwitter />
            </div>

            <div className="you">
              <FaYoutube />
            </div>
            <div className="face">
              <FaPinterest />
            </div>
          </div>

          <div className="terms">
            <small>copyright c Misfits Market. All rights reserved.</small>
            <p>
              <a href="">Terms of Service</a>| <a href="">Privacy Policy</a>|{" "}
              <a href="">Do Not Sell Or Share My Personal Imformation</a>|{" "}
              <a href="">Califonia Privacy Notice</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Follow;
