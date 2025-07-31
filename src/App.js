import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Service from "./Service";
import Contact from "./Contact";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
   
    </>
  );
}

export default App;
