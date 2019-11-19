import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Modal from "react-modal";
import { Dropdown } from "react-bootstrap";

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
class Hospital extends React.Component {
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
        <h3 align="center">Hospital's Profile</h3>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <h4>Hospital Name: Full Name</h4>
                <p>Location: Hospital's Location</p>
              </div>
              <div className="col-6">
                Image Here <br />
                <p>Email: email id here</p>
              </div>
              <button className="primary" onClick={this.openModal}>
                Book A Visit
              </button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                {" "}
                <h2 ref={subtitle => (this.subtitle = subtitle)}>
                  Book Your Hospital
                </h2>
                <button className="btn-primary" onClick={this.closeModal}>
                  Close
                </button>
                <div className="container">
                  <Dropdown className="day">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Select a Day
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as="button">Monday</Dropdown.Item>
                      <Dropdown.Item as="button">Tuesday</Dropdown.Item>
                      <Dropdown.Item as="button">Wednesday</Dropdown.Item>
                      <Dropdown.Item as="button">Thursday</Dropdown.Item>
                      <Dropdown.Item as="button">Friday</Dropdown.Item>
                      <Dropdown.Item as="button">Saturday</Dropdown.Item>
                      <Dropdown.Item as="button">Sunday</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="time">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Select Time
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as="button">9am - 10am</Dropdown.Item>
                      <Dropdown.Item as="button">10am - 11am</Dropdown.Item>
                      <Dropdown.Item as="button">11am - 12pm</Dropdown.Item>
                      <Dropdown.Item as="button">12pm - 1pm</Dropdown.Item>
                      <Dropdown.Item as="button">3pm - 4pm</Dropdown.Item>
                      <Dropdown.Item as="button">4pm - 5pm</Dropdown.Item>
                      <Dropdown.Item as="button">5pm - 6pm</Dropdown.Item>
                      <Dropdown.Item as="button">6pm - 7pm</Dropdown.Item>
                      <Dropdown.Item as="button">7pm - 8pm</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="department1">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Department to Visit
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as="button">Physician</Dropdown.Item>
                      <Dropdown.Item as="button">
                        General Physician
                      </Dropdown.Item>
                      <Dropdown.Item as="button">Cardiologist</Dropdown.Item>
                      <Dropdown.Item as="button">Psychologist</Dropdown.Item>
                      <Dropdown.Item as="button">Neurologist</Dropdown.Item>
                      <Dropdown.Item as="button">Gynaecologist</Dropdown.Item>
                      <Dropdown.Item as="button">
                        Maternity Specialist
                      </Dropdown.Item>
                      <Dropdown.Item as="button">Orthopaedic</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <hr className="style4" />
                <button className="btn-primary" onClick={this.closeModal}>
                  Book
                </button>
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
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCTP85NhqYPq0y09WqxIb75OZciL533uvc"
})(Hospital);
