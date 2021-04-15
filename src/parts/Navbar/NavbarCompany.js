import React from "react";
import { Link } from "react-router-dom";

export default function NavbarCompany() {
  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler toggler-example"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="dark-blue-text">
          <i className="fas fa-bars fa-1x"></i>
        </span>
      </button>

      <div
        className="collapse navbar-collapse tm-nav"
        id="navbarSupportedContent1"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link tm-nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link tm-nav-link" to="/company">
              Our Company
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link tm-nav-link" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link tm-nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
