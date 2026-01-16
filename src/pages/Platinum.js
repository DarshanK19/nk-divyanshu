import React from 'react';
import { Link } from 'react-router-dom';
import './Platinum.css';

const Platinum = () => (
  <div className="platinum-page">
    <section className="hero-platinum">
      <div className="container">
        <h1>Platinum Package</h1>
        <p className="lead">Premium features, luxury finishes, and smart home integration for the ultimate living experience.</p>
        <div className="price-tag-platinum">₹2700 / sq.ft</div>
        <Link to="#cta" className="btn btn-platinum">Experience Luxury</Link>
      </div>
    </section>

    <section className="features-platinum">
      <div className="container">
        <h2>Exclusive Platinum Features</h2>
        <p className="lead">Our Platinum Package represents the pinnacle of luxury construction with premium materials and smart technology integration.</p>
        
        <div className="features-grid-platinum">
          {[
            { icon: 'building', title: 'Civil Works', desc: 'Highest grade Fe500D steel, Ultratech / Ambuja Premium Cement, AAC Blocks, and high quality shuttering.' },
            { icon: 'bath', title: 'Bathroom', desc: 'Designer tiles & fittings with premium sanitaryware from Kohler / Grohe for a luxurious experience.' },
            { icon: 'bolt', title: 'Electrical', desc: 'Smart wiring options, home automation readiness, and premium modular switches throughout.' },
            { icon: 'door-open', title: 'Doors & Windows', desc: 'Teakwood frames with double glass windows for superior sound and heat insulation.' },
            { icon: 'utensils', title: 'Kitchen', desc: 'Italian marble countertop, high-end modular kitchen, and soft close fittings & accessories.' },
            { icon: 'paint-roller', title: 'Flooring & Painting', desc: 'Italian marble / premium vitrified flooring with luxury paints and textures for a premium finish.' }
          ].map((f, i) => (
            <div className="feature-card-platinum" key={i}>
              <div className="feature-icon-platinum"><i className={`fas fa-${f.icon}`}></i></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="cta" className="cta-platinum">
      <div className="container">
        <h2>Experience Unmatched Luxury</h2>
        <p className="lead">Create your dream home with our premium Platinum Package</p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px'}}>
          <Link to="/contact" className="btn btn-platinum">Request Custom Quote</Link>
          <Link to="/packages" className="btn btn-secondary">← Back to Packages</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Platinum;
