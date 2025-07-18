import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PolicyIdeathon from "./pages/PolicyIdeathon"
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProjectRakshak from "./pages/ProjectRakshak";
function App() {
  return (

    <Router>
          <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/policyideathon" element={<PolicyIdeathon />} />
        <Route path="/projectrakshak" element={<ProjectRakshak />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
