import React from 'react';
import Navbar from './Navbar';
import '../app/styles/hero.css';

const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="hero-container"
      style={{
        backgroundImage: "url('/banner_bg.png')",
        backgroundSize: "35%",
        backgroundPosition: "left 100px top 100px"
      }}
    >
      <Navbar />

      <div className="hero-content">
        <div className="hero-placeholder"></div>
        <div className="hero-text">
          <div className="name-stack">
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Muhammad</p>
            <p data-aos="zoom-in-up">Umer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;