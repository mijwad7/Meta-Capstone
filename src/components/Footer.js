// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import FooterImg from "../images/logos/footerlogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>&copy; Coursera 2023</p>
          </div>
          <div className="col-md-4 text-center">
            <div className="footer-logo">
              <img
                src={FooterImg}
                alt="Logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4">
            <ul className="footer-links justify-content-end">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/booking">Reservations</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

