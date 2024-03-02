import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon _hamburger menu.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header-container">
      <ul style={{ listStyle: "none" }} className="parent">
        <li className="logo">
          <img src={logo} alt="Company Logo" />
        </li>
        <button className="toggle-button" onClick={() => setShowNav(!showNav)}>
          <img src={hamburger} alt="Toggle Navigation" />
          <span className="visually-hidden"></span>
        </button>
        <nav
          className={`nav ${showNav ? "show" : ""}`}
          aria-label="Main navigation"
        >
          <li>
            <Link className="links" to="/" onClick={handleClick("hero")}>
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="links" to="/reservations">
              Reservations
            </Link>
          </li>
        </nav>
      </ul>
    </header>
  );
};

export default Header;
