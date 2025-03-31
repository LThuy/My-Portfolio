import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Style/PartialsCSS/Header.scss';
import TypingHeader from "../Parts/TypingHeader";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../../Style/Responsive/Responsive.css'
// import axios from 'axios';
function Header() {
    return ( 
        <header className="modern-header">
      <nav className="nav">
        <div className="logo">HUY DEV</div>
        <ul className="nav-menu">
          <li><a href="#hero">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="header-content">
        <div className="profile-container">
          <img src="/profile.jpeg" alt="Your Name" className="profile-img" />
        </div>
        {<TypingHeader/>}
        <p>Web Developer | Designer | Innovator</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </header>
    ); 
}

export default Header