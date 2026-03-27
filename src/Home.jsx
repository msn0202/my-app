import React from "react";
import "./Home.css";
import logo from "./assets/React-logo.png";
export default function Home() {
  return (
    <div className="header-bar">
      <div className="header-one">
        <img src={logo} alt="React Logo" className="logo" />
      </div>
      <div className="header-two"></div>
    </div>
  );
}
