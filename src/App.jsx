import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PolicyIdeathon from "./pages/PolicyIdeathon"
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProjectRakshak from "./pages/ProjectRakshak";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import KnowledgeHub from "./pages/KnowledgeHub";
import DonateNow from "./pages/DonateNow";

function App() {
  return (

    <Router>
          <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/policyideathon" element={<PolicyIdeathon />} />
        <Route path="/projectrakshak" element={<ProjectRakshak />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-conditions" element={<TermsConditions />}></Route>
        <Route path="/knowledgehub" element={<KnowledgeHub />}></Route>
        <Route path="/donate" element={<DonateNow />}></Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
