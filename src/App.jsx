import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Synthese from "./components/Synthese/Synthese";
import ProjetsPersonnels from "./components/Projects/ProjetsPersonnels";
import Footer from "./components/Footer";
import Cv from "./components/Resume/ResumeNew";
import Alternance from "./components/Alternance/Alternance";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VeilleTechnologique from "./components/Veille/VeilleTechnologique";
import EpreuveE6 from "./components/EpreuveE6/EpreuveE6";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/jonathan_cohen/portfolio">
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/veille-technologique"
            element={<VeilleTechnologique />}
          />
          <Route path="/epreuve-e6" element={<EpreuveE6 />} />
          <Route path="/" element={<Home />} />
          <Route path="/projets-personnels" element={<ProjetsPersonnels />} />
          <Route path="/mon-alternance" element={<Alternance />} />
          <Route path="/synthese" element={<Synthese />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
