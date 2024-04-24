import React from "react";
import "./download.css";
import { assets } from "../../assets/assets";
function Download() {
  return (
    <div className="download-container" id="mobile">
      <div>
        <h1>for better experiance <br /> download the app</h1>
      </div>
      <br />
      <div>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default Download;
