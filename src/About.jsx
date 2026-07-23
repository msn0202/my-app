import React from "react";
import logo from "./assets/React-logo.png";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="app">
      <header className="header-bar">
        <div className="header-one">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>

        <div className="header-two">
          <Navbar />
        </div>
      </header>

      <main className="hero">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-subtitle">
          Welcome to our About page.
        </p>
      </main>

      <Footer />
    </div>
  );
}