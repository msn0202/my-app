import React, { useState } from "react";
import "./Home.css";
import logo from "./assets/React-logo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <header className="header-bar">
        <div className="header-one">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation */}
        <div className={`header-two ${menuOpen ? "active" : ""}`}>
          <Navbar />
        </div>
      </header>

      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-title">⏰ Time Started</h1>

          <p className="hero-subtitle">
            🚀 Transform the way you manage your time.
          </p>

          <button className="start-btn">
            🚀 Get Started
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;