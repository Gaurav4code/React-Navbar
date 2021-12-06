import React from "react";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <>
      <h1>Navbar2</h1>

      <div className="container">
        <div className="fluid-container">
          <div className="img-box">
            <img alt="logo" />
          </div>
          <div className="navbar-cont">
            <ul className="nav-bar">
              <li className="nav-link">
                <a href="/">Home</a>
              </li>
              <li className="nav-link">
                <a href="/">Services</a>
              </li>
              <li className="nav-link">
                <a href="/">Contact Us</a>
              </li>
              <li className="nav-link">
                <a href="/">Join Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
