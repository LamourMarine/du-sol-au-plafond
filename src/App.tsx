import React from "react";
import Header from "./components/Header";
import logo from "./assets/logobg.png";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header logoURL={logo} />
      <About />
      <Footer />
    </div>
  );
}
export default App;
