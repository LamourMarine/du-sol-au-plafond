import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import logo from "./assets/logobg2.png";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import LegalNotice from "./components/LegalNotice";
import ScrollToTop from './components/ScrollToTop';

// Créer un composant pour votre page principale
const MainPage = () => (
  <>
    <About />
    <Gallery />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="pt-20 font-sans text-gray-800">
        <Header logoURL={logo} />
        
        <Routes>
          {/* Page principale avec tous vos composants */}
          <Route path="/" element={<MainPage />} />
          
          {/* Page mentions légales */}
          <Route path="/mentions-legales" element={<LegalNotice />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;