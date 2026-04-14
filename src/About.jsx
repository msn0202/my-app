import React from "react";
import logo from "./assets/React-logo.png";
import "./Home.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
export default function About() {
  return (
    <>
      <div className="header-bar">
        <div className="header-one">
          <img src={logo} alt="React Logo" className="logo" />
        </div>
        <div className="header-two">
          <Navbar />
        </div>
      </div>
      <div>
        <h4>ABOUT US</h4>
      </div>
      <Footer />
    </>
  );
}
