import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import MeetYourDoc from "./pages/meetYourDoc";
import BookYourTest from "./pages/bookYourTest";
import BookYourHospital from "./pages/bookYourHospital";
import CallAmbulance from "./pages/callAmbulance";
import ParentCare from "./pages/parentCare";
import GetMedicine from "./pages/getMedicine";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Hospital from "./pages/hospitalProfile";
import Test from "./pages/test";

const MyRouter = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/meet-your-doc" component={MeetYourDoc} />
    <Route path="/book-your-test" component={BookYourTest} />
    <Route path="/book-your-hospital" component={BookYourHospital} />
    <Route path="/call-ambulance" component={CallAmbulance} />
    <Route path="/get-medicine" component={GetMedicine} />
    <Route path="/parent-care" component={ParentCare} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/doc_profile" component={Profile} />
    <Route path="/hos_profile" component={Hospital} />
    <Route path="/test" component={Test} />
  </Router>
);

ReactDOM.render(MyRouter, document.querySelector("#root"));
