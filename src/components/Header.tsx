import React from 'react';
import './Header.css';

type HeaderProps = {
    logoURL: string;
};

const Header: React.FC<HeaderProps> = ({ logoURL }) => {
  return (
    <header className='header'>
      {/* Logo */}
      <div className="logo">
        <img src={logoURL} alt="Logo de l'entreprise" />
      </div>

      {/* Menu de navigation */}
      <nav>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#gallery">Galerie</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;