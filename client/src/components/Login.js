import React from "react";
import loginImg from "../images/login.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login container bg-white mt-5 rounded shadow">
      <div className="row">
        <div className="col-md-6 regImg p-5 d-flex justify-content-center align-items-center img-fluid flex-column">
          <img src={loginImg} alt="login.svg" />

          <Link to="/register" className="text-muted">
            Did not have any account ?
          </Link>
        </div>
        <div className="col-md-6 p-5">
          <h1> LogIn </h1>

          <form className="mt-5 pr-5">
            <div className="input-group flex-nowrap mb-4">
              <div className="input-group-prepend">
                <span className="p-2" id="email">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <input
                type="email"
                className="inputBox"
                placeholder="Your Email"
                aria-label="Your Email"
                aria-describedby="email"
              />
            </div>

            <div className="input-group flex-nowrap mb-2">
              <div className="input-group-prepend">
                <span className="p-2" id="password">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <input
                type="password"
                className="inputBox"
                placeholder="Your Password"
                aria-label="Your Password"
                aria-describedby="password"
              />
            </div>

            <button type="submit" className="loginBtn rounded mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
