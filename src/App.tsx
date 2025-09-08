import React from "react";
import Header from "./components/Header";
import logo from "./assets/logobg.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header logoURL={logo}/>

      <section id="about">
        <h2>À propos</h2>
        <p>Présentation de l'entreprise</p>
      </section>

      <section id="gallery">
        <h2>Galerie</h2>
        <p>Quelques photos de mes traveaux</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Infos de contact</p>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
