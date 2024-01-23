import React from "react";
import "../Component/Contactus.css";

function Contactus() {
  return (
    <>
      <div>
        <div className="contact-nav">
          <a href="/">
            <h2>
              Misfits <br /> Market🛍️
            </h2>
          </a>

          
          <div className="help">
            <a href="">Help Center</a>
            <a href="/">Main Site</a>
          </div>
        </div>

        <div className="contact-background">
          <div className="contact-content">
            <div className="content">
              <span>
                <h2>Contact Us</h2>
              </span>

              <div>
                <h3>Ordered Issues?</h3>
                <br />
                Was something not quite right with your order? No worries at
                all! Log into your account and head on over to your My Order to
                et us knw which items(s) you had an issue with, and we will take
                it from there!
              </div>
            </div>

            <div>
              <p>
                {" "}
                For all other issue please complete the form below and the
                Customer Care team will look forwarding to helping you!
              </p>

              <form action="" id="">
                <label>
                  First and last Name on your Misfits Market Account*
                </label>
                <br />
                <input type="text" id="" placeholder="" />
                <br />
                <em>
                  Please use the name exactly as it appears on your account
                </em>

                <br />

                <label>
                  Email address associated with your Misfits Market account*
                </label>
                <br />
                <input type="email" id="" placeholder="" />
                <br />
                <em>Please use the email as it appear on your account</em>

                <br />

                <label>Subject</label>
                <br />
                <input type="text" id="" placeholder="" />
                <br />

                <label>
                  Please let us know why you’re reaching out to us today:
                </label>
                <br />
                <select placeholder="--Please Select--">
                  <option>Skip Box</option>
                  <option>Billing</option>
                  <option>Missing/Wrong Delivery</option>
                  <option>Other Delivery Issue</option>
                  <option>Customization Question</option>
                  <option>Sign Up</option>
                  <option>Login Issues</option>
                  <option>Account Help</option>
                  <option>Cancel Subscribtion</option>
                  <option>Other</option>
                  <option>Press/Media/Marketing Request</option>
                </select>
              </form>

              <div>
                Hello! Do you know you can login and head over to your Delivery
                Schedue to skip your weekly delivery?
              </div>
                          <textarea rows={"7"} />
                          <br/>
              <em>
                Please give us some details about your request and attach a
                photo below if possible. A member of our <br/>Customer Care team will
                get back to you as soon as possible!
                          </em>
                          
                          <br/>
                          <input type="file" id="" placeholder="Select File"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contactus;
