// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import React from "react";
import "../css/NavBar.css";

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  const myMenuFunction = () => {
          const menu = document.getElementById("navMenu");
          if (menu.className === "nav-menu") {
              menu.className += " responsive";
          } else {
              menu.className = "nav-menu";
          }
      };

  return (
    <nav className="nav">

      <div className="nav-logo">
        <img src="/static/images/logot.png" style={{ backdropFilter: 'greyscale(1)' }} alt="LOGO" />
        <h3 id="logoText">AGROVISION AI</h3>
      </div>

      <div className="nav-menu" id="navMenu">
        <ul>
          <li><a href="/" className="link active">Home</a></li>
          <li><a href="/services" className="link">Services</a></li>
          <li><a href="/about" className="link">About Us</a></li>
          <li><a href="/help" className="link">Help</a></li>
          <li><a href="/login" className="link">Login</a></li>
        </ul>
      </div>

      <div className="nav-menu-btn">
        <i className="bx bx-menu" onClick={myMenuFunction}></i>
      </div>

    </nav>
  );
};

export default Navbar;
