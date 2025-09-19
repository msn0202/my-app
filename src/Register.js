import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <form className="form">
        <h1>REGISTRATION FORM</h1>

        {/* Example input fields */}
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="Zip Code" />
        <input type="date" placeholder="Date of Birth" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
