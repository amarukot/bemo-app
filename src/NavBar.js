import React from "react";
import logo from "./images/bemo-logo2.png";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div>
        <img src={logo} alt="BeMo logo" className="logo-img"></img>
      </div>

      <a href="#">Main</a>
      <a href="#">How To Prepare</a>
      <a href="#">CDA Interview Questions</a>
      <a href="#">Contact Us</a>
    </nav>
  );
}
