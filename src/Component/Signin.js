import React, { useState } from "react";
import { Link, link, useNavigate } from "react-router-dom";
import "../Component/Signin.css";
// import { useNavigate } from "react-router-dom";

function Signin() {
  const [signupData, setSignupData] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();

  // handle input change
  const handleInput = (e) => {
    setSignupData((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  // handle login
  function handleLogin(e) {
    e.preventDefault();

    // Assuming signupData and setError are defined somewhere in your component state
    let error = {};

    if (!signupData.firstname) {
      error = { ...error, firstname: "First name is required🚫" };
    }

    if (!signupData.surname) {
      error = { ...error, surname: "Surname is required🚫" };
    }

    if (!signupData.email) {
      error = { ...error, email: "Email is required🚫" };
    }

    if (!signupData.password) {
      error = { ...error, password: "Password is required🚫" };
    }

    if (!signupData.confirm) {
      error = { ...error, confirm: "Confirm password is required🚫" };
    }

    // Check if there are any errors
    if (Object.keys(error).length === 0) {
      // If no errors, navigate to the login page
      try {
        // Assuming navigate is a function to navigate to another page
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }

    // Update the state with the error object
    setError(error);

    // Log the error object to the console
    console.log(error);
  }

  return (
    <>
      <div className="signin">
        <h1>Sign Up For Misfits Market🛍️</h1>
        <form id="signin-container" action="" onSubmit={handleLogin}>
          <br />
          <input
            type="text"
            id=""
            name="firstname"
            placeholder="First Name"
            onChange={handleInput}
          />
          <br />
          {error.firstname && <p className="error">{error.firstname}</p>}

          <input
            type="text"
            id=""
            name="surname"
            placeholder="Surname"
            onChange={handleInput}
          />
          <br />
          {error.surname && <p className="error">{error.surname}</p>}
          <input
            type="email"
            id=""
            name="email"
            placeholder="Enter a Valid Email Address"
            onChange={handleInput}
          />
          <br />
          {error.email && <p className="error">{error.email}</p>}
          <input
            type="password"
            id=""
            name="password"
            placeholder="Password"
            onChange={handleInput}
          />
          <br />
          {error.password && <p className="error">{error.password}</p>}
          <input
            type="password"
            id=""
            name="confirm"
            placeholder="Confirm Password"
            onChange={handleInput}
          />
          <br />
          {error.confirm && <p className="error">{error.confirm}</p>}

          <button type="submit">Sign up</button>
        </form>
        <input type="checkbox" name="" id="" />
        <span className="accept">
          Accept <Link to="#">Terms & Conditions</Link>
          {/* Accept <a href="">Terms & Conditions</a> */}
        </span>
        <br />

        <br />
        <div className="already">
          <Link style={{ fontSize: "23px" }} to="/login">
            Already Have An Account?
          </Link>
          {/* <a href="/login">Already Have An Account?</a> */}
        </div>
      </div>
    </>
  );
}

export default Signin;
