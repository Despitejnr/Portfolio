import React, { useState, useCallback } from "react";
import "./Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>CODE PRIDE</h1>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Work Experience</a></li>
        <li><a href="#services">Block</a></li>
        <li><a id="getintouch" href="#getintouch">Get in Touch</a></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Home;