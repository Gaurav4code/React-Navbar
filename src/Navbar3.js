import React from "react";
import "./Navbar.css";

const Navbar3 = () => {
  return (
    <>
      <div className="container">
        <div className="fluid-container">
          <div className="logo-section">
            <h1>Logo</h1>
          </div>
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-links">
                <a href="#">Link1</a>
              </li>
              <li className="nav-links">
                <a href="#">Link2</a>
              </li>
              <li className="nav-links">
                <a href="#">Link3</a>
              </li>
            </ul>
            <div className="auth-container">
              <button className="btn btn-1">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar3;
