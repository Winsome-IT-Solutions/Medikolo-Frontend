import React from "react";
import "./assets/css/App.css";
import Card from "./components/Card";
import Header from "./components/header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
}

export default App;
