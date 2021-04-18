import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import image from "../images/register.svg";

function Register()
{
  
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "/signup";
      const { name, email, phone, work, password, cpassword } = userData;
      
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phone, work, password, cpassword
        })
      })

      const resJson = await res.json();
      
      if (res.status === 422 || !resJson)
      {
        window.alert(resJson.error);
      }
      else
      {
        window.alert(resJson.message);

        history.push("/login")
      }


    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container register mt-5 rounded shadow">
      <div className="row">
        <div className="col-md-6 p-5">
          <h1 className="font-weight-bolder px-5"> Register </h1>

          <form method="POST" className="mt-5 pl-5">
            <div className="input-group flex-nowrap mb-2">
              <div className="input-group-prepend">
                <span className="p-2" id="name">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>
              <input
                type="text"
                className="inputBox"
                placeholder="Your Name"
                aria-label="Your Name"
                aria-describedby="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group flex-nowrap mb-2">
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
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group flex-nowrap mb-2">
              <div className="input-group-prepend">
                <span className="p-2" id="number">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
              </div>
              <input
                type="number"
                className="inputBox"
                placeholder="Your Number"
                aria-label="Your Number"
                aria-describedby="number"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group flex-nowrap mb-2">
              <div className="input-group-prepend">
                <span className="p-2" id="profession">
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                </span>
              </div>
              <input
                type="text"
                className="inputBox"
                placeholder="Profession"
                aria-label="Profession"
                aria-describedby="profession"
                name="work"
                value={userData.work}
                onChange={handleInputChange}
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
                value={userData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group flex-nowrap mb-2">
              <div className="input-group-prepend">
                <span className="p-2" id="cpassword">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <input
                type="password"
                className="inputBox"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                aria-describedby="cpassword"
                name="cpassword"
                value={userData.cpassword}
                onChange={handleInputChange}
              />
            </div>

            <button
              className="registerBtn rounded mt-3"
              onClick={handleSubmit}
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
        <div className="col-md-6 regImg p-5 d-flex justify-content-center align-items-center flex-column">
          <img src={image} alt="register.svg" />
          <Link to="/login" className="text-muted">
            {" "}
            Already Registered?{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
