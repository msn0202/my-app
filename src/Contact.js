import Navbar from "./Navbar";
import "./Contact.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // ✅ Fetch users once
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((resp) => {
        setUsers(resp);
        setFiltered(resp); // initial data
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // ✅ Debounce effect for search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (name.trim() === "") {
        setFiltered(users);
      } else {
        setFiltered(
          users.filter((user) =>
            user.name.toLowerCase().includes(name.toLowerCase())
          )
        );
      }
    }, 1000); // 500ms debounce

    return () => clearTimeout(timer); // cleanup old timer
  }, [name, users]);

  return (
    <>
      <div className="container">
        <header className="header">
          <h1>Welcome Mobile</h1>
        </header>
        <div className="header1">
          <Navbar />
        </div>

        <input
          type="text"
          value={name}
          placeholder="Search..."
          onChange={(e) => setName(e.target.value)}
        />

        <ul>
          {filtered.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

        <footer className="footer-one">
          <p>Copy right reserved 2025</p>
        </footer>
      </div>
    </>
  );
}
