import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [name, setName] = useState("");     // search text
  const [user, setUser] = useState([]);     // filtered users
  const [allUsers, setAllUsers] = useState([]); // original users

  // fetch users
  const getuser = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const resp = await result.json();
    setUser(resp);
    setAllUsers(resp); // keep backup
  };

  useEffect(() => {
    getuser();
  }, []);

  // handle input change
  function Handler(e) {
    const value = e.target.value;
    setName(value);

    const res = allUsers.filter((f) =>
      f.name.toLowerCase().includes(value.toLowerCase())
    );
    setUser(res);
  }

  return (
    <>
      <ul className="list-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
           <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <input
            type="text"
            value={name}
            onChange={Handler}
            placeholder="Search user..."
          />
        </li>
      </ul>

   <div>
  {name && user.length > 0 ? (
    user.map((item) => <p key={item.id}>{item.name}</p>)
  ) : (
    ""
  )}
</div>

    </>
  );
}
