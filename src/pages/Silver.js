import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Silver.css';

const Silver = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    { title: 'Civil Works', items: ['MS shuttering', 'Fe415 grade steel (Kamdhenu, Amba Shakti)', 'ACC / Ambuja Cement', 'Fly ash or CLC bricks', '15mm plaster, water proofing'] },
    { title: 'Bathroom', items: ['Parryware/Johnson Pedestal', 'Local make CP fittings', '2x2 ceramic tiles (dado)', 'Anti-skid ceramic tiles (flooring)'] },
    { title: 'Electrical', items: ['Finolex/Anchor wires', 'Modular switches (Anchor/L&T)', 'LED lights', 'Conduit wiring'] },
    { title: 'Doors & Windows', items: ['Teak wood main door', 'Flush doors for interior', 'Aluminum sliding windows', 'Standard hardware'] },
    { title: 'Kitchen', items: ['2x2 ceramic tiles (dado)', 'Modular kitchen with acrylic finish', 'SS sink with drainboard', 'Granite countertop'] },
    { title: 'Flooring & Painting', items: ['Vitrified tiles for living & bedrooms', 'Anti-skid ceramic for bathrooms', 'Asian Paints/Berger', 'Putty coat for smooth finish'] }
  ];

  return (
    <div className="silver-page">
      <section className="container section">
        <div className="package-header">
          <h1>Silver Package – ₹1599 / sq.ft</h1>
          <p className="lead">Affordable and reliable construction with durable materials for lasting quality</p>
        </div>

        <div className="accordion">
          {sections.map((section, index) => (
            <div className="accordion-item" key={index}>
              <h3 className="accordion-header">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} aria-expanded={openIndex === index}>
                  {section.title}
                  <svg className="accordion-icon" viewBox="0 0 24 24" style={{transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)'}}>
                    <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                  </svg>
                </button>
              </h3>
              <div className={`accordion-content ${openIndex === index ? 'active' : ''}`}>
                <div className="accordion-content-inner">
                  <ul>
                    {section.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="package-cta">
          <Link to="/contact" className="btn">Request Custom Quote</Link>
          <Link to="/packages" className="btn btn-secondary">← Back to Packages</Link>
        </div>
      </section>
    </div>
  );
};

export default Silver;
