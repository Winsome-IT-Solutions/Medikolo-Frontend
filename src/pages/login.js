import React from "react";
import "../assets/css/login.css";

class Login extends React.Component {
  render() {
    return (
      <div>
        <a href="/">Home</a>
        <div class="container">
          <div class="wrapper">
            <form
              action="/doc_profile"
              method="get"
              name="Login_Form"
              class="form-signin"
            >
              <h3 class="form-signin-heading">Please Sign In to Continue</h3>
              <hr class="colorgraph" />
              <br />
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
                type="password"
                class="form-control"
                name="Password"
                placeholder="Password"
                required=""
                style={{ margin: "5px" }}
              />

              <button
                class="btn btn-lg btn-primary btn-block"
                name="Submit"
                value="Login"
                type="Submit"
              >
                Login
              </button>
              <p style={{ margin: "5px" }}>
                Don't have an account? <a href="/register">Register here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
