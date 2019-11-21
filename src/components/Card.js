import React from "react";
import Tilt from "react-parallax-tilt";

class Card extends React.Component {
  render() {
    return (
      <div id="container">
        {" "}
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
                <div class="card-container card-container--3">
                  <p>Book your Test</p>
                </div>
              </a>
            </div>
          </Tilt>
          <Tilt>
            <div class="wrap wrap--4">
              <a href="/get-medicine">
                <div class="card-container card-container--4">
                  <p>Get Medicine Now</p>
                </div>
              </a>
            </div>
          </Tilt>

          <Tilt>
            {" "}
            <div class="wrap wrap--5">
              <a href="/call-ambulance">
                <div class="card-container card-container--5">
                  <p>Call Ambulance</p>
                </div>
              </a>
            </div>
          </Tilt>

          <Tilt>
            {" "}
            <div class="wrap wrap--6 box16">
              <a className="title" href="/parent-care">
                <div class="card-container card-container--6 overlay">
                  <p className="post">Parent Care</p>
                </div>
              </a>
            </div>
          </Tilt>
        </section>
      </div>
    );
  }
}
export default Card;
