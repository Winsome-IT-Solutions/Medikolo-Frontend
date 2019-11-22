import React from "react";
import "./assets/css/App.css";
import Card from "./components/Card";
import Header from "./components/header";
import Particles from "react-particles-js";

const particlesOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Card />

        <Particles params={particlesOpt} />
      </div>
    );
  }
}

export default App;
