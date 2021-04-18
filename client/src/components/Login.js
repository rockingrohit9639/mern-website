import React, { useState } from "react";
import loginImg from "../images/login.svg";
import { Link, useHistory } from "react-router-dom";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const handleChange = (e) =>
  {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  }

  const handleLogin = async (e) =>
  {
    e.preventDefault();

    const { email, password } = user;

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const resJson = await res.json();

    if (res.status === 400 || !resJson)
    {
      window.alert("Invalid Credentials");
    }
    else
    {
      window.alert("Login Success");
      history.push("/");
    }
    

  }

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

          <form method="POST" className="mt-5 pr-5">
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
                name="email"
                value={user.email}
                onChange={ handleChange }
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
                name="password"
                value={user.password}
                onChange={ handleChange }
              />
            </div>

            <button type="submit" onClick={ handleLogin } className="loginBtn rounded mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
