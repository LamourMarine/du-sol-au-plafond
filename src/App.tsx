import React from "react";
import Header from "./components/Header";
import logo from "./assets/logobg.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header logoURL={logo}/>
      <Footer />
    </div>
  );
}

export default App;
