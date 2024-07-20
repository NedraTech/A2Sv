import React from "react";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  return (
    <>
      {/* // <div className="main-con"> */}
      <div className="conta">
        <h1 className="header">CropExpert</h1>
        <form action="" className="form">
          <label htmlFor="email">
            {" "}
            Email
            <div className="input">
              <svg
                className="svg"
                width="4"
                height="4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#068042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#068042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                type="email"
                required
                placeholder="Email Address"
                name="email"
              />
            </div>
          </label>{" "}
          Password
          <label htmlFor="password">
            <div className="input">
              <svg
                className="svg"
                width="4"
                height="4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#068042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#068042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                type="password"
                required
                placeholder="Password"
                name="password"
              />
            </div>
          </label>
          <div className="checkbox">
            <div className="check1">
              {" "}
              <input type="checkbox" className="check" />
              <p>Remember Me</p>{" "}
            </div>
            <div>
              <a href="">
                <p className="txt">Forgot Password ?</p>
              </a>{" "}
            </div>
          
          </div>
          <button className="btn">Login</button>
        </form>
        <div className="liness">
          <div className="line"></div>
          <h4 className="h4">
            <span>Or With</span>
          </h4>
          <div className="line"></div>
        </div>
       
        ;
        <div className="havenot">
          <p>
            Don't have an account?<a href="/signup"></a>
          </p>
        </div>
        <GoogleLogin  className="google"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
      {/* // </div> */}
    </>
  );
}

export default Login;
