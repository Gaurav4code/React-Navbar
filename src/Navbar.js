import React from "react";

import "../src/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="head">
        <div className="logo">Logo</div>
        <div className="navbar">
          <ul className="nav-box">
            <li className="nav-links">Home</li>
            <li className="nav-links">About</li>
            <li className="nav-links">Services</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
