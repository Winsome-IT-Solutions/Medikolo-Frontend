import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "../assets/fonts/font-awesome/css/font-awesome.min.css";
import "../assets/css/meetYourDoc.css";
import data from "./temp.json";
import logo from "../assets/img/logo-medikolo.png";

class MeetYourDoc extends Component {
  render() {
    return (
      <div>
        <a href="/">Home</a>
        <div className="col-9">
          <p align="center">Search by</p>
        </div>
        <div className="row">
          <div className="col-3">
            <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div class="input-group">
                <input
                  type="search"
                  placeholder="Name"
                  aria-describedby="button-addon1"
                  class="form-control border-0 bg-light"
                />
                <div class="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    class="btn btn-link text-primary"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <hr className="style3" />
          </div>
          <div className="col-3">
            <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div class="input-group">
                <input
                  type="search"
                  placeholder="Location"
                  aria-describedby="button-addon1"
                  class="form-control border-0 bg-light"
                />
                <div class="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    class="btn btn-link text-primary"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>

            <hr className="style3" />
          </div>
          <div className="col-3">
            <Dropdown className="department">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Department
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as="button">Physician</Dropdown.Item>
                <Dropdown.Item as="button">General Physician</Dropdown.Item>
                <Dropdown.Item as="button">Cardiologist</Dropdown.Item>
                <Dropdown.Item as="button">Psychologist</Dropdown.Item>
                <Dropdown.Item as="button">Neurologist</Dropdown.Item>
                <Dropdown.Item as="button">Gynaecologist</Dropdown.Item>
                <Dropdown.Item as="button">Maternity Specialist</Dropdown.Item>
                <Dropdown.Item as="button">Orthopaedic</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-3" style={{ textAlign: "center" }}>
            <img src={logo} style={{ width: "80px" }} alt="Medikolo Logo" />
          </div>
        </div>
        <h3 className="col-6 list"> Doctors Available (Dummy Data)</h3>
        <hr className="style2" />
        {data.map((doctor, i) => (
          <div>
            <div className="row list">
              <div className="col-6">
                <h4>
                  Name: <a href="/login">{doctor.name}</a>
                </h4>
                <h5>Location: {doctor.location}</h5>
                <h6>Department: {doctor.department}</h6>
                -----------------------------------------------
              </div>
              <div className="col-6">Image of the Doctor</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MeetYourDoc;
