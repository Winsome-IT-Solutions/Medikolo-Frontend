import React from "react";
import "./assets/css/App.css";
import logo from "./assets/img/logo-medikolo.png";
import Tilt from "react-parallax-tilt";

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="container">
          <div className="row logo">
            <div className="col-12">
              <img
                src={logo}
                style={{ width: "150px", margin: "20px 0" }}
                alt="Medikolo Logo"
              />
            </div>
            <a href="/login" style={{ marginLeft: "20px" }}>
              Login
            </a>{" "}
            <br />
            <a href="/register" style={{ marginLeft: "20px" }}>
              Register
            </a>
          </div>
          <section class="main">
            <Tilt>
              {" "}
              <div class="wrap wrap--1">
                <a href="/meet-your-doc">
                  <div class="card-container card-container--1">
                    <p>Meet Your Doctor</p>
                  </div>
                </a>
              </div>
            </Tilt>

            <Tilt>
              <div class="wrap wrap--2">
                <a href="/book-your-hospital">
                  <div class="card-container card-container--2">
                    <p>Book Your Hospital</p>
                  </div>
                </a>
              </div>
            </Tilt>
            <Tilt>
              <div class="wrap wrap--3">
                <a href="/book-your-test">
                  <div class="card-container card-container--5">
                    <p>Book your Test</p>
                  </div>
                </a>
              </div>
            </Tilt>
            <Tilt>
              <div class="wrap wrap--4">
                <a href="/get-medicine">
                  <div class="card-container card-container--3">
                    <p>Get Medicine Now</p>
                  </div>
                </a>
              </div>
            </Tilt>

            <Tilt>
              {" "}
              <div class="wrap wrap--5">
                <a href="/call-ambulance">
                  <div class="card-container card-container--4">
                    <p>Call Ambulance</p>
                  </div>
                </a>
              </div>
            </Tilt>

            <Tilt>
              {" "}
              <div class="wrap wrap--6">
                <a href="/parent-care">
                  <div class="card-container card-container--6">
                    <p>Parent Care</p>
                  </div>
                </a>
              </div>
            </Tilt>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
