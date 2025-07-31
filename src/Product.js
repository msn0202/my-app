import React from "react";
import Navbar from "./Navbar";
import "./Product.css";
// import logo from "./assets/images/logo.jpg";
import headerPhone from "./assets/images/header-phone.jpg";

export default function Product() {
  return (
    <div className="container">
      <header className="header">

        <h1>Welcome  Mobile</h1>
      </header>
      <div className="header1">
        <Navbar />
      </div>
      <section className="section">
        <div className="banner">
          <img src={headerPhone} alt="Phone Banner" />
        </div>
      </section>
    </div>
  );
}
