import React from "react";
import Card from "./components/Card";
import "./assets/css/App.css";
import logo from "./assets/img/logo-medikolo.png";

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
          {/* <div className="container">
            <div className="row">
              <div className="col-4 col-lg-4 col-md-4 col-sm-12">
                <a href="/login">
                  <Card
                    text="Meet Your Doctor"
                    imgPath={require("./assets/img/doctor.jpg")}
                  />
                </a>
              </div>
              <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-sx-12">
                <a href="/book-your-hospital">
                  <Card
                    text="Book Your Hospital"
                    imgPath={require("./assets/img/hospital.jpg")}
                  />
                </a>
              </div>
              <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-sx-12">
                <a href="/book-your-test">
                  <Card
                    text="Book your Test"
                    imgPath={require("./assets/img/test.jpg")}
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-sx-12">
                <a href="/get-medicine">
                  <Card
                    text="Get Medicine Now"
                    imgPath={require("./assets/img/medicine.jpg")}
                  />
                </a>
              </div>
              <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-sx-12">
                <a href="/call-ambulance">
                  <Card
                    text="Call Ambulance"
                    imgPath={require("./assets/img/ambulance.jpg")}
                  />
                </a>
              </div>
              <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-sx-12">
                <a href="/parent-care">
                  <Card
                    text="Parent Care"
                    imgPath={require("./assets/img/care.jpg")}
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}
          <section class="main">
            <div class="wrap wrap--1">
              <a href="/meet-your-doc">
                <div class="container container--1">
                  <p>Meet Your Doctor</p>
                </div>
              </a>
            </div>

            <div class="wrap wrap--2">
              <a href="/book-your-hospital">
                <div class="container container--2">
                  <p>Book Your Hospital</p>
                </div>
              </a>
            </div>

            <div class="wrap wrap--3">
              <a href="/get-medicine">
                <div class="container container--3">
                  <p>Get Medicine Now</p>
                </div>
              </a>
            </div>

            <div class="wrap wrap--4">
              <a href="/call-ambulance">
                <div class="container container--4">
                  <p>Call Ambulance</p>
                </div>
              </a>
            </div>

            <div class="wrap wrap--5">
              <a href="/book-your-test">
                <div class="container container--5">
                  <p>Book your Test</p>
                </div>
              </a>
            </div>

            <div class="wrap wrap--6">
              <a href="/parent-care">
                <div class="container container--6">
                  <p>Parent Care</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
