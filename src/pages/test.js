import React from "react";
import Modal from "react-modal";
import { Dropdown } from "react-bootstrap";

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
class Test extends React.Component {
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
                <h4>Test Name: Test Name</h4>
                <p>Hospital Name: Doctor's Department</p>
              </div>
              <div className="col-6">
                Image Here <br />
                <p>Location: Hospital's Location</p>
              </div>
            </div>
            <button className="primary" onClick={this.openModal}>
              Book Your Test
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
                Book Your Test
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
                <hr className="style4" />
                <button className="btn-primary" onClick={this.closeModal}>
                  Book
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
