import React from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Footer from "./Components/Footer"
import BBCPolitics from "./Components/CaseStudies/BBCPolitics";
import PortfolioSite from "./Components/CaseStudies/PortfolioSite"


function App() {
  return (
    <div>
    
      
      <NavBar />
      <div className="bg-base-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CaseStudies/BBCPolitics" element={<BBCPolitics />} />
        <Route path="/CaseStudies/PortfolioSite" element={<PortfolioSite />} />
      </Routes>
      
    </div>
    </div>
  );
}

export default App;

/*<Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
       </Routes>*/