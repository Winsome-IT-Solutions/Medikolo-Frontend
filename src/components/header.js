import React from "react";
import logo from "../assets/img/logo-medikolo.png";
import "../assets/css/header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="row logo">
        <div className="container">
          <center>
            <div className="col-12">
              <img
                src={logo}
                style={{ width: "150px", margin: "20px 0" }}
                alt="Medikolo Logo"
              />
            </div>
            <div>
              <ul>
                <li className="login-register">
                  <a className="log" href="/login">
                    Login
                  </a>
                </li>
                <li className="login-register">
                  <a className="reg" href="/register">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </center>
          {/* <button>
            <a href="/login">Login</a>
          </button>
          <br />
          <a href="/register">Register</a> */}
        </div>
      </div>
    );
  }
}

export default Header;
