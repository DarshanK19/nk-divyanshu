import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="banner">
        <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" alt="Engineering Infrastructure" />
        <div className="overlay">
          <h1 data-aos="fade-up">Transforming Infrastructure for a Resilient Tomorrow</h1>
          <p data-aos="fade-up" data-aos-delay="100">Hydrology, Environmental, and Civil solutions tailored for mountain cities and beyond.</p>
          <div className="hero-btns" data-aos="fade-up" data-aos-delay="200">
            <Link to="/services" className="btn btn-secondary">Explore Services</Link>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="metrics">
        <div className="container grid grid-3">
          <div className="metric" data-aos="fade-up" data-aos-delay="100">
            <h2>10+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="metric" data-aos="fade-up" data-aos-delay="200">
            <h2>50+</h2>
            <p>Projects Delivered</p>
          </div>
          <div className="metric" data-aos="fade-up" data-aos-delay="300">
            <h2>5+</h2>
            <p>States Across India</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services">
        <div className="container">
          <h2 data-aos="fade-up">What We Do</h2>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            We deliver end-to-end consulting—from studies and designs to implementation support—grounded in sustainability.
          </p>
          
          <div className="grid grid-3">
            <div className="card" data-aos="fade-up" data-aos-delay="150">
              <span className="badge">💧</span>
              <h3>Hydrological & Hydraulic Studies</h3>
              <p>Return period analysis, HEC-HMS modeling, floodplain mapping, and stormwater design for resilient water management systems.</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="250">
              <span className="badge">🌍</span>
              <h3>Environmental Consultancy</h3>
              <p>Comprehensive EIA/EMP, nature-based solutions, climate resilience planning, and environmental compliance documentation.</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="350">
              <span className="badge">🛰️</span>
              <h3>GIS & Remote Sensing</h3>
              <p>Advanced DEM processing, landslide susceptibility mapping, drainage planning, and land use analytics for informed decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <h2 data-aos="fade-up">Our Values & What Drives Us</h2>
          <div className="grid grid-3">
            <div className="value" data-aos="fade-up" data-aos-delay="100">
              <h3>Sustainability</h3>
              <p>We design solutions that protect communities and nature for generations to come, ensuring long-term environmental balance.</p>
            </div>
            <div className="value" data-aos="fade-up" data-aos-delay="200">
              <h3>Innovation</h3>
              <p>From advanced GIS to hydrological modeling, we leverage cutting-edge tools to deliver engineering excellence.</p>
            </div>
            <div className="value" data-aos="fade-up" data-aos-delay="300">
              <h3>Collaboration</h3>
              <p>We work hand-in-hand with stakeholders, ensuring trust and transparency throughout every project lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section projects">
        <div className="container">
          <h2 data-aos="fade-up">Featured Projects</h2>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            Our work spans diverse environments and challenges across India
          </p>
          
          <div className="project-gallery">
            <div className="project" data-aos="fade-up" data-aos-delay="150">
              <img src="https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" alt="Flood Risk Mapping" />
              <p>Flood Risk Mapping – Himachal Pradesh</p>
            </div>
            <div className="project" data-aos="fade-up" data-aos-delay="250">
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" alt="Hydropower Assessment" />
              <p>Hydropower Assessment – Uttarakhand</p>
            </div>
            <div className="project" data-aos="fade-up" data-aos-delay="350">
              <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Urban Drainage Plan" />
              <p>Urban Drainage Plan – Shimla City</p>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '40px'}} data-aos="fade-up">
            <Link to="/projects" className="btn">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2 data-aos="fade-up">Partner With Us</h2>
          <p data-aos="fade-up" data-aos-delay="100">Looking for sustainable and innovative engineering solutions for your project?</p>
          <Link to="/contact" className="btn btn-secondary" data-aos="fade-up" data-aos-delay="200">Contact Our Team</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
