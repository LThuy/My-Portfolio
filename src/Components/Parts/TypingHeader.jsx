import React, { useEffect, useState } from "react";
import "../../Style/PartialsCSS/Header.scss";

const texts = [
  "A Passionate Web Developer 💻",
  "A React & Frontend Enthusiast 🚀",
  "A Problem Solver & Coder 🎯",
  "Let's Build Something Amazing! 🎨",
];

const TypingHeader = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;
  const delay = isDeleting ? 500 : 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];
      setText((prevText) =>
        isDeleting ? currentText.substring(0, prevText.length - 1) : currentText.substring(0, prevText.length + 1)
      );

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, index, isDeleting]);

  return (
    <div className="typing-header">
      <h1>
        Hello, I'm <span className="highlight">Lê Thanh Huy</span>
      </h1>
      <h2>
        <span className="typing-text">{text}</span>
        <span className="cursor">|</span>
      </h2>
    </div>
  );
};

export default TypingHeader;
