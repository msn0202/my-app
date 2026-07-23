import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
  <ul className="list-bar">
  <li className="list-head"><Link to="/">Home</Link></li>
  <li className="list-head"><Link to="/about">About</Link></li>
  <li className="list-head"><Link to="/contact">Contact</Link></li>
  <li className="list-head"><Link to="/product">Product</Link></li>
  <li className="list-head"><Link to="/register">Register</Link></li>
  <li className="list-head"><Link to="/signin">Sign In</Link></li>
</ul>
    </nav>
  );
}