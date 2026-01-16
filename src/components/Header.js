import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand">
          <img
            src="/logo.png"
            alt="NK Divanshu Builders"
            className="brand-logo"
          />
        </Link>
        <nav className={`menu ${menuOpen ? "active" : ""}`}>
          <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
            About
          </Link>
          <Link
            to="/services"
            className={isActive("/services")}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className={isActive("/projects")}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/packages"
            className={isActive("/packages")}
            onClick={closeMenu}
          >
            Packages
          </Link>
          <Link
            to="/contact"
            className={isActive("/contact")}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
