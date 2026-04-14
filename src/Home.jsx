import React from "react";
import "./Home.css";
import logo from "./assets/React-logo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
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
        <h1 class="text-3xl font-bold underline caret-amber-500">
   Coming soon shortly 
  </h1>
      <Footer />
    </>
  );
}
