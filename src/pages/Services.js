import React, { useEffect } from 'react';
import AOS from 'aos';
import './Services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const services = [
    { icon: '💧', title: 'Hydrological Modeling', desc: 'Advanced flood, rainfall, and watershed studies using state-of-the-art simulation tools.' },
    { icon: '🌍', title: 'Environmental Consultancy', desc: 'Comprehensive solutions for environmental impact, sustainability planning, and green infrastructure.' },
    { icon: '🏗️', title: 'Infrastructure Design', desc: 'Specialized engineering for dams, barrages, bridges, and earthquake-resistant buildings.' },
    { icon: '💧', title: 'Water Supply & Wastewater', desc: 'End-to-end planning, design, and optimization of water supply and sanitation systems.' },
    { icon: '♻️', title: 'Solid Waste Management', desc: 'Sustainable waste collection, segregation, processing, and disposal systems.' },
    { icon: '☀️', title: 'Renewable Energy', desc: 'Feasibility studies, integration planning, and implementation support for sustainable energy.' },
    { icon: '📋', title: 'Project Management', desc: 'Comprehensive project oversight, feasibility studies, and technical advisory services.' },
    { icon: '🗺️', title: 'GIS & Remote Sensing', desc: 'Precision mapping, spatial analysis, and land-use planning using geospatial technologies.' },
    { icon: '⚙️', title: 'Custom Solutions', desc: 'Tailored approaches for unique challenges in mountainous and sensitive regions.' }
  ];

  return (
    <div className="services-page">
      <section className="banner">
        <img src="https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" alt="Services" />
        <div className="overlay">
          <h1 data-aos="fade-up">Our Engineering Services</h1>
          <p data-aos="fade-up" data-aos-delay="100">Innovative solutions for resilient infrastructure and sustainable development</p>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <h2 data-aos="fade-up">Explore Our Expertise</h2>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            We deliver smart, sustainable, and data-driven engineering solutions tailored for challenging environments
          </p>
          
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div className="card" data-aos="fade-up" data-aos-delay={150 + index * 50} key={index}>
                <div className="badge">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
