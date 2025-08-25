import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./App.css";
const Home=lazy(()=>import("./Home"));
const Product=lazy(()=>import("./Product"));
const Service=lazy(()=>import("./Service"));
const Contact=lazy(()=>import("./Contact"));

function App() {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
