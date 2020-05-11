import React from "react";
import heroImage from "./images/cda-interview-guide.jpg";

export default function Hero() {
  return (
    <div className="">
      <img
        src={heroImage}
        alt="dentist tool closeup"
        className="hero-img"
      ></img>
      <div className="overlay-text">
        CDA Interview Guide <hr />
      </div>
    </div>
  );
}
