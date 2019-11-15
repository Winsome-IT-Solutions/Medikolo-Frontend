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
          <div className="row">
            <div className="col-6">
              <a href="/meet-your-doc">
                <Card
                  text="Meet Your Doctor"
                  imgPath={require("./assets/img/doctor.jpg")}
                />
              </a>
            </div>
            <div className="col-6">
              <a href="/book-your-hospital">
                <Card
                  text="Book Your Hospital"
                  imgPath={require("./assets/img/hospital.jpg")}
                />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <a href="/book-your-test">
                <Card
                  text="Book your Test"
                  imgPath={require("./assets/img/test.jpg")}
                />
              </a>
            </div>
            <div className="col-6">
              <a href="/get-medicine">
                <Card
                  text="Get Medicine Now"
                  imgPath={require("./assets/img/medicine.jpg")}
                />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <a href="/call-ambulance">
                <Card
                  text="Call Ambulance"
                  imgPath={require("./assets/img/ambulance.jpg")}
                />
              </a>
            </div>
            <div className="col-6">
              <a href="/parent-care">
                <Card
                  text="Parent Care"
                  imgPath={require("./assets/img/care.jpg")}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
