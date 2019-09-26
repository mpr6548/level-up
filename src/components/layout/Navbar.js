import React, { Component } from "react";

import bannerBackground from "../static/images/background_final_faded.png";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="banner">
          <img src={bannerBackground} alt="retro banner" />
        </div>
        <ul className="navigation">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Redeem Chest</a>
          </li>
          <li>
            <a href="#">Prize Pool</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
