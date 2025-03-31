import React, { useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Body/Home";
import Header from "./Components/Partials/Header.jsx";
import Footer from "./Components/Partials/Footer.jsx";
import "./App.css";


function App() { 
  const location = useLocation();

  return (
    <div className="App"> 
      <Header />
      <div id="body-content">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;