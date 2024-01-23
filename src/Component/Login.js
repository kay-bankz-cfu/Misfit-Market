import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Component/Login.css";

function Login() {
  const [loginData, setLoginData] = useState({
     email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((previous) => (
       {
        ...previous,
        [e.target.name]: e.target.value,
      }
    ));
  };

  function submitData(e) {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      if (!loginData.email) {
        setError((previous) => ({
          ...previous,
          email: "Email is required🚫",
        }));
      }

      if (!loginData.password) {
        setError((previous) => ({
          ...previous,
          password: "Password is required🚫",
        }));
      }
      return;
    }

    console.log(error);
  }

  return (
    <>
      <div className="login">
        <h1>Login to Misfits Market🛍️</h1>
        <h2>
          Welcome! Let see which day we <br /> deliver near you
        </h2>
        <form id="log" action="" onSubmit={submitData}>
          <input
            type="email"
            id=""
            name="email"
            value={loginData.email}
            placeholder="Email Address"
            onChange={handleChange}
          />
          {error.email && <p className="error">{error.email}</p>}
          <br />
          <input
            type="password"
            id=""
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
          />
          <br />
          {error.password && <p className="error">{error.password}</p>}
          <button type="submit">Login</button>
        </form>
        <input type="checkbox" id="remember" />
        Remember Me
        <br />
        <br />
        <Link style={{ fontSize: "23px" }} to="/register">
          Not a member? Sign Up
        </Link>
        {/* <a href="/register">Not a member? Sign Up</a> */}
      </div>
    </>
  );
}
export default Login;
