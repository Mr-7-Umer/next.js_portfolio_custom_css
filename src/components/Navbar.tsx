import React, { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import "../app/styles/navbar.css"; // Import custom CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">Umer</div>

        {/* Navigation links */}
        <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
          <li className="menu-link">
            <a href="#hero">Home</a>
          </li>
          <li className="menu-link">
            <a href="#about">About</a>
          </li>
          <li className="menu-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="menu-link">
            <a href="#skills">Skills</a>
          </li>
          <li className="menu-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <MdOutlineClose size={30} />
          ) : (
            <MdOutlineMenu size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
