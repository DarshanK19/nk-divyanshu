import React from 'react';
import { Link } from 'react-router-dom';
import './Gold2.css';

const Gold2 = () => (
  <div className="gold2-page">
    <section className="hero-gold">
      <div className="container">
        <h1>Gold Package</h1>
        <p className="lead">Enhanced materials and premium features with the perfect balance of cost and luxury.</p>
        <div className="price-tag-gold">₹1999 / sq.ft</div>
        <Link to="#cta" className="btn btn-gold">Get Started Today</Link>
      </div>
    </section>

    <section className="features-gold">
      <div className="container">
        <h2>Premium Features</h2>
        <p className="lead">Our Gold Package includes high-quality materials and premium finishes for a luxurious result.</p>
        
        <div className="features-grid-gold">
          {[
            { icon: 'building', title: 'Civil Works', desc: 'Fe500 grade steel (JSW / Jai Bharat), Ultratech Cement, AAC Blocks, and premium shuttering and plaster.' },
            { icon: 'bath', title: 'Bathroom', desc: 'Premium ceramic wall & floor tiles with Jaguar / Hindware premium sanitary fixtures.' },
            { icon: 'bolt', title: 'Electrical', desc: 'Polycab premium FRLS wires, Havells switches, and extra power points for convenience.' },
            { icon: 'door-open', title: 'Doors & Windows', desc: 'Hardwood frame with veneer finish and UPVC windows with better insulation.' },
            { icon: 'utensils', title: 'Kitchen', desc: 'Granite countertop, designer tiles, and modular kitchen with chimney provision.' },
            { icon: 'paint-roller', title: 'Flooring & Painting', desc: 'Premium vitrified tiles and acrylic emulsion paints (Asian Royale) for a luxurious finish.' }
          ].map((f, i) => (
            <div className="feature-card-gold" key={i}>
              <div className="feature-icon-gold"><i className={`fas fa-${f.icon}`}></i></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="cta" className="cta-gold">
      <div className="container">
        <h2>Ready to Build Your Dream Project?</h2>
        <p className="lead">Get started with our premium Gold Package today</p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px'}}>
          <Link to="/contact" className="btn btn-gold">Request Custom Quote</Link>
          <Link to="/packages" className="btn btn-secondary">← Back to Packages</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Gold2;
