import React from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import About from "./Components/About"
function App() {
  return (
    <div className="">
      <NavBar />

      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
       </Routes>
    </div>
  );
}

export default App;
