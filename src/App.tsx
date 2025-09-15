import React from "react";
import Header from "./components/Header";
import logo from "./assets/logobg.png";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="pt-20 font-sans text-gray-800">
      <Header logoURL={logo} />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
