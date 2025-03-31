import React from "react";
import "../../Style/PartialsCSS/Footer.scss";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>Let's Connect</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <div className="social-links">
          <a href="https://github.com/LThuy" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Lê Thanh Huy | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
