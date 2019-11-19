import React from "react";
import hdata from "./temp1.json";
import Card2 from "../components/Card2";

class BookYourHospital extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 align="center">Book Your Hospital (Dummy Data)</h1>

          <hr class="style6" />
          {hdata.map((hospital, i) => (
            <div class="row">
              <div class="col-12">
                <a href="/hos_profile">
                  <Card2
                    text={hospital.name}
                    imgPath={hospital.img}
                    location={hospital.location}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BookYourHospital;
