import React, { useState, useEffect } from "react";
import "../../Style/PartialsCSS/Header.scss";
import TypingHeader from "../Parts/TypingHeader";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const updateBackgroundImage = () => {
    const header = document.querySelector('.modern-header'); 

    if (header) {
      if (window.innerWidth > 700) {
        header.style.background = 'url("background.jpeg") center/cover no-repeat';
      } else {
        header.style.background = 'url("background-3.jpg") center/cover no-repeat';
      }
    }
  };

  useEffect(() => {
    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);
    return () => {
      window.removeEventListener('resize', updateBackgroundImage);
    };
  }, []); 

  return (
    <header className="modern-header">
      <nav className="nav">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
        <div className="logo">HUY DEV</div>
        <ul className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <li><a href="#hero">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="header-content">
        <div className="profile-container">
          <img src="/profile.jpeg" alt="Your Name" className="profile-img" />
        </div>
        <TypingHeader />
        <p>Web Developer | Designer | Innovator</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </header>
  );
}

export default Header;
