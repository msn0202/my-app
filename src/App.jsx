import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import Signin from "./Signin";
import Register from "./Register";
import Product from "./Product"
import About from "./About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Product" element={<Product/>}/>
        <Route path="Signin" element={<Signin/>}/>
      </Routes>
    </>
  );
}

export default App;
