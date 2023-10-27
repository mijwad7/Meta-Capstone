import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    padding: "2vw 4vw", // Increase the horizontal padding
  };

  // Get the current location using useLocation
  const location = useLocation();

  const linkStyle = {
    fontSize: "1.5rem",
    marginRight: "5vw" // Increase the font size
  };

  return (
    <nav
      style={navStyle}
      className="navbar pl-lg-5 ml-lg-5 navbar-expand-lg navbar-light bg-light"
    >
      <img
        className="img-fluid"
        src="https://cdn.dribbble.com/userupload/4149863/file/original-b59dcb3c6b4dcb6f87e9dc0b9a0e5a23.png"
        width="200"
        alt="Logo"
      ></img>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse pl-lg-5 ml-lg-5" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
            <Link className="nav-link" to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/menu" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/menu" style={linkStyle}>
              Menu
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/about" style={linkStyle}>
              About
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/booking" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/booking" style={linkStyle}>
              Reservations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
