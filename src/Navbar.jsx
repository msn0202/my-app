import React from "react";
import "./Navbar.css"

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className="list-bar">
        <li className="list-head">
          <Link  to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
          <Link to="/register">Register</Link>
          <Link to="/signin">Signin</Link>
        </li>

      </ul>
    </>
  );
}
