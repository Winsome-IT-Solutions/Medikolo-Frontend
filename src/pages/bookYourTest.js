import React from "react";
import tdata from "./temp2.json";

class BookYourTest extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 align="center">Book Your Test (Dummy Data)</h1>
          <hr class="style6" />
          {tdata.map((test, i) => (
            <div>
              <div className="row list">
                <div className="col-6">
                  <h4>
                    Test Name: <a href="/test">{test.name}</a>
                  </h4>
                  <h5>Location: {test.location}</h5>
                  <h5>Hospital Name: {test.hos_name}</h5>
                </div>
                <div className="col-6">
                  <img src={test.img} alt="" width="300px" />
                </div>
              </div>
              <hr class="style7" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BookYourTest;
