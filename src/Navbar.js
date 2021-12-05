import React from "react";
import logo from "./Images/logo.png";

import "../src/Navbar.css";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLinks to="/">
          <h1>Logo</h1>
        </NavLinks>
        <NavMenu>
          <NavLinks to="/about" activeStyle>
            About
          </NavLinks>

          <NavLinks to="/services" activeStyle>
            Services
          </NavLinks>
          <NavLinks to="/contact-us" activeStyle>
            Contact Us
          </NavLinks>

          <NavLinks to="/sign-up" activeStyle>
            Sign Up
          </NavLinks>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
