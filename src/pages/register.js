import React from "react";
import "../assets/css/login.css";

class Register extends React.Component {
  render() {
    return (
      <div>
        <a href="/">Home</a>
        <div class="container">
          <div class="wrapper">
            <form action="" method="post" name="Login_Form" class="form-signin">
              <h3 class="form-signin-heading">Register Now</h3>
              <hr class="colorgraph" />
              <br />
              <input
                type="text"
                class="form-control"
                name="Name"
                placeholder="Full Name"
                required=""
                autofocus=""
                style={{ margin: "5px" }}
              />
              <input
                type="text"
                class="form-control"
                name="Username"
                placeholder="Username"
                required=""
                autofocus=""
                style={{ margin: "5px" }}
              />
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Email ID"
                required=""
                autofocus=""
                style={{ margin: "5px" }}
              />
              <input
                type="tel"
                class="form-control"
                name="Phone"
                placeholder="Phone Number"
                required=""
                autofocus=""
                style={{ margin: "5px" }}
              />
              <input
                type="password"
                class="form-control"
                name="Password"
                placeholder="Password"
                required=""
                style={{ margin: "5px" }}
              />
              <input
                type="password"
                class="form-control"
                name="Confirm Password"
                placeholder="Confirm Password"
                required=""
                style={{ margin: "5px" }}
              />

              <button
                class="btn btn-lg btn-primary btn-block"
                name="Submit"
                value="Register"
                type="Submit"
              >
                Register
              </button>
              <p style={{ margin: "5px" }}>
                Already have an account? <a href="/login">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
