import "../css/mainpage.css";
import Heart from "../assets/Util/heart.png";
import React, { useState } from "react";

function HealthBar(props) {


  return (
    <footer>
      <img src={Heart} alt="Heart" draggable="false"/>
      <ul id="healthbar">
        {props.hearts.map((elements, index) => (
          <li key={index}>{elements && <div></div>}</li>
        ))}
      </ul>
    </footer>
  );
}

export default HealthBar;
