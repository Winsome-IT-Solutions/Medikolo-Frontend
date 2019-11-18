import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Modal from "react-modal";
import { Table } from "react-bootstrap";

const mapStyles = {
  width: "100%"
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");
class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="container">
        <h3 align="center">Doctor's Profile</h3>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <h4>Doctor Name: Full Name</h4>
                <p>Department: Doctor's Department</p>
              </div>
              <div className="col-6">
                Image Here <br />
                <p>Location: Doctor's Location</p>
              </div>
            </div>
            <h3 align="center">Location and Timing</h3>
            <p>1. Location 1: Date and Time</p>
            <p>2. Location 2: Date and Time</p>
            <p>3. Location 3: Date and Time</p>
            Check the time table by{" "}
            <button onClick={this.openModal}>Clicking here</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={subtitle => (this.subtitle = subtitle)}>
                Location Table
              </h2>
              <button className="btn-primary" onClick={this.closeModal}>
                Close
              </button>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Days/Time</th>
                    <th scope="col">7 a.m.</th>
                    <th scope="col">10 a.m.</th>
                    <th scope="col">2 p.m.</th>
                    <th scope="col">5 p.m.</th>
                    <th scope="col">8 p.m.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Sunday</th>
                    <td>Behala</td>
                    <td>-</td>
                    <td>Garia</td>
                    <td>-</td>
                    <td>Rashbehari</td>
                  </tr>
                  <tr>
                    <th scope="row">Monday</th>
                    <td>Garia</td>
                    <td>Behala</td>
                    <td>Rashbehari</td>
                    <td>-</td>
                    <td>Garia</td>
                  </tr>
                  <tr>
                    <th scope="row">Tuesday</th>
                    <td>Garia</td>
                    <td>Behala</td>
                    <td>Rashbehari</td>
                    <td>-</td>
                    <td>Garia</td>
                  </tr>
                  <tr>
                    <th scope="row">Wednesday</th>
                    <td>Garia</td>
                    <td>Behala</td>
                    <td>Rashbehari</td>
                    <td>-</td>
                    <td>Garia</td>
                  </tr>
                  <tr>
                    <th scope="row">Thursday</th>
                    <td>Garia</td>
                    <td>Behala</td>
                    <td>Rashbehari</td>
                    <td>-</td>
                    <td>Garia</td>
                  </tr>
                  <tr>
                    <th scope="row">Friday</th>
                    <td>Garia</td>
                    <td>Behala</td>
                    <td>Rashbehari</td>
                    <td>-</td>
                    <td>Garia</td>
                  </tr>
                  <tr>
                    <th scope="row">Saturday</th>
                    <td>Garia</td>
                    <td>-</td>
                    <td>Rashbehari</td>
                    <td>-</td>
                    <td>Behala</td>
                  </tr>
                </tbody>
              </table>
            </Modal>
          </div>

          <div className="col-6">
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 123, lng: -122.176 }}
            >
              <Marker position={{ lat: 123.0, lng: -122.0 }} />
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCTP85NhqYPq0y09WqxIb75OZciL533uvc"
})(Profile);
