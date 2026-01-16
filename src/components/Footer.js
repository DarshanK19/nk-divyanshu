import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-brand">
              <img
                src="/logo.png"
                alt="NK Divanshu Builders"
                style={{
                  height: "40px",
                  width: "auto",
                  background: "transparent",
                }}
              />
            </div>
            <p className="footer-about">
              NK Divanshu Builders and Services Pvt. Ltd. - Engineering
              excellence in construction, planning, design, and services.
              Building your dreams with quality and trust.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">
                  <i className="fas fa-chevron-right"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fas fa-chevron-right"></i> About Us
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i className="fas fa-chevron-right"></i> Services
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <i className="fas fa-chevron-right"></i> Projects
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="fas fa-chevron-right"></i> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link to="/services">
                  <i className="fas fa-chevron-right"></i> Hydrological Modeling
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i className="fas fa-chevron-right"></i> Environmental
                  Planning
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i className="fas fa-chevron-right"></i> Infrastructure Design
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i className="fas fa-chevron-right"></i> GIS Solutions
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i className="fas fa-chevron-right"></i> Sustainable
                  Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <Link to="/contact">
                  <i className="fas fa-map-marker-alt"></i> 329-Homeland City -
                  II, Sri Ganganagar
                </Link>
              </li>
              <li>
                <a href="tel:+910000000000">
                  <i className="fas fa-phone"></i> +91-0000 000 000
                </a>
              </li>
              <li>
                <a href="https://www.nkdivanshu24x7services.in" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-globe"></i> www.nkdivanshu24x7services.in
                </a>
              </li>
              <li>
                <Link to="/contact">
                  <i className="fas fa-clock"></i> Mon-Fri: 9:00 AM - 6:00 PM
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2025 NK Divanshu Builders and Services Pvt. Ltd. | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
