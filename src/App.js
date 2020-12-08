import "./App.css";
import Particles from "react-particles-js"
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm";
import Rank from "./components/rank/Rank";
import React, { Component } from "react";

const particlesOptions = {
  particles: {
    number: {
      value: 500,
      density: {
        enable: true,
        value_area: 100,
      },
    },
  },}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={{particlesOptions}}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <Recognition />  */}
      </div>
    );
  }
}

export default App;
