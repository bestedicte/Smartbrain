import "./App.css";
import Particles from "react-particles-js";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm";
import Rank from "./components/rank/Rank";
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          params={{
            polygon: {
              enable: true,
              type: "inside",
              move: {
                radius: 10,
              },
              url: "path/to/svg.svg",
            },
          }}
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
