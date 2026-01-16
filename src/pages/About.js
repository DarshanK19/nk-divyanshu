import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <div className="about-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Building Resilient Futures</h1>
            <p>Trusted Civil & Environmental Engineering Experts</p>
            <div className="hero-btns">
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container section">
        <div className="two-col">
          <div data-aos="fade-right">
            <h2>Who We Are</h2>
            <p>
              NK Divyanshu Builders and Services Pvt. Ltd., based in Shimla, is
              a trusted consultancy delivering sustainable and innovative
              solutions in civil and environmental engineering. From
              hydrological modeling and infrastructure design to environmental
              planning and GIS-based studies, we serve clients with technical
              excellence and integrity.
            </p>
            <p>
              We combine global standards with local expertise, ensuring every
              project contributes to safer communities and a greener tomorrow.
            </p>
          </div>
          <div className="image-card" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Engineering team"
            />
          </div>
        </div>

        <div className="card-grid">
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <h3>
              <i className="fas fa-seedling"></i> Our Mission
            </h3>
            <p>
              To deliver sustainable, cost-effective, and innovative engineering
              solutions that respect both people and the environment.
            </p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <h3>
              <i className="fas fa-binoculars"></i> Our Vision
            </h3>
            <p>
              To be a leading engineering consultancy in India, recognized for
              excellence in hydrology, infrastructure, and environmental
              stewardship.
            </p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="300">
            <h3>
              <i className="fas fa-handshake"></i> Our Values
            </h3>
            <p>
              Sustainability • Innovation • Integrity • Local Expertise • Client
              Focus • Technical Excellence
            </p>
          </div>
        </div>

        <div className="stats">
          <div className="container">
            <div className="card-grid">
              <div
                className="card stat"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2>40+</h2>
                <p>Years of Rainfall Data Analyzed</p>
              </div>
              <div
                className="card stat"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2>25+</h2>
                <p>Major Projects Delivered</p>
              </div>
              <div
                className="card stat"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2>50+</h2>
                <p>Satisfied Clients Across India</p>
              </div>
              <div
                className="card stat"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h2>100%</h2>
                <p>Commitment to Sustainability</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta" data-aos="fade-up">
          <h2>Let's Build Something Sustainable Together</h2>
          <p>
            Partner with NK Divyanshu for reliable, future-ready engineering
            solutions tailored to your project needs.
          </p>
          <Link to="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About;
