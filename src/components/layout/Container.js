import React, { Component } from "react";

import Navbar from "./Navbar";
import ChestContainer from "./ChestContainer";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <ChestContainer />
      </div>
    );
  }
}

export default Container;
