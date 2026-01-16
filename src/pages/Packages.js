import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import './Packages.css';

const Packages = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', package: '', area: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', phone: '', package: '', area: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to submit request' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="packages-page">
      <section className="section packages-section">
        <div className="container">
          <h1 data-aos="fade-up">House & Flat Construction Packages</h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">Choose from Silver, Gold, or Platinum packages, tailored to budget and lifestyle. All packages include a 3-year construction defect warranty.</p>

          <div className="grid grid-3">
            <div className="package-card" data-aos="fade-up" data-aos-delay="150">
              <div className="package-header">
                <h2>Silver</h2>
                <div className="price">₹1599 <span className="price-sub">/ sq.ft</span></div>
                <p>Basic construction package</p>
              </div>
              <div className="package-content">
                <ul className="package-features">
                  <li><i className="fas fa-check-circle"></i> Site Layout & Architectural Detailing</li>
                  <li><i className="fas fa-check-circle"></i> Earthquake-Resistant Structure</li>
                  <li><i className="fas fa-check-circle"></i> Plumbing & Electrical Drawings</li>
                  <li><i className="fas fa-check-circle"></i> MS Shuttering • Fe415 Steel</li>
                  <li><i className="fas fa-check-circle"></i> ACC/Ambuja Cement</li>
                  <li><i className="fas fa-check-circle"></i> Standard Tiles Flooring</li>
                  <li><i className="fas fa-check-circle"></i> Basic Modular Kitchen</li>
                </ul>
                <div className="package-cta">
                  <Link to="/packages/silver" className="btn btn-outline">View Details</Link>
                </div>
              </div>
            </div>

            <div className="package-card" data-aos="fade-up" data-aos-delay="250">
              <div className="ribbon">Most Popular</div>
              <div className="package-header" style={{background: 'linear-gradient(135deg, #e67e22, #d35400)'}}>
                <h2>Gold</h2>
                <div className="price">₹1999 <span className="price-sub">/ sq.ft</span></div>
                <p>Premium construction package</p>
              </div>
              <div className="package-content">
                <ul className="package-features">
                  <li><i className="fas fa-check-circle"></i> Includes Silver Package Features</li>
                  <li><i className="fas fa-check-circle"></i> Hardscape & Landscape Design</li>
                  <li><i className="fas fa-check-circle"></i> Rainwater Harvesting System</li>
                  <li><i className="fas fa-check-circle"></i> HVAC Provisions</li>
                  <li><i className="fas fa-check-circle"></i> Fe500 Steel • Ultratech Cement</li>
                  <li><i className="fas fa-check-circle"></i> AAC Blocks • Premium Fixtures</li>
                  <li><i className="fas fa-check-circle"></i> Premium Tiles Flooring</li>
                </ul>
                <div className="package-cta">
                  <Link to="/packages/gold" className="btn">View Details</Link>
                </div>
              </div>
            </div>

            <div className="package-card" data-aos="fade-up" data-aos-delay="350">
              <div className="package-header" style={{background: 'linear-gradient(135deg, #9b59b6, #8e44ad)'}}>
                <h2>Platinum</h2>
                <div className="price">₹2700 <span className="price-sub">/ sq.ft</span></div>
                <p>Luxury construction package</p>
              </div>
              <div className="package-content">
                <ul className="package-features">
                  <li><i className="fas fa-check-circle"></i> Includes Gold Package Features</li>
                  <li><i className="fas fa-check-circle"></i> Double Glazed Windows</li>
                  <li><i className="fas fa-check-circle"></i> Kohler/Grohe Sanitaryware</li>
                  <li><i className="fas fa-check-circle"></i> Italian Marble Flooring</li>
                  <li><i className="fas fa-check-circle"></i> Luxury Modular Kitchen</li>
                  <li><i className="fas fa-check-circle"></i> Home Automation System</li>
                  <li><i className="fas fa-check-circle"></i> Premium Woodwork & Finishes</li>
                </ul>
                <div className="package-cta">
                  <Link to="/packages/platinum" className="btn btn-outline">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="warranty-section">
        <div className="container">
          <div className="warranty-content" data-aos="fade-up">
            <div className="warranty-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h2>3-Year Construction Defect Warranty</h2>
            <p>All our construction packages come with a comprehensive 3-year warranty covering structural defects and workmanship. Your investment is protected with NK Divanshu Builders.</p>
          </div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container">
          <h2 data-aos="fade-up">Package Comparison</h2>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">Detailed feature comparison to help you choose the perfect package</p>
          
          <div className="table-container" data-aos="fade-up" data-aos-delay="150">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Silver</th>
                  <th>Gold</th>
                  <th>Platinum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="feature-category">
                  <td colSpan="4">Structure & Materials</td>
                </tr>
                <tr>
                  <td>Steel Grade</td>
                  <td>Fe415</td>
                  <td>Fe500</td>
                  <td>Fe500D</td>
                </tr>
                <tr>
                  <td>Cement</td>
                  <td>ACC/Ambuja</td>
                  <td>Ultratech</td>
                  <td>Premium Ultra</td>
                </tr>
                <tr>
                  <td>Shuttering</td>
                  <td>MS Shuttering</td>
                  <td>Premium Shuttering</td>
                  <td>Premium Shuttering</td>
                </tr>
                <tr>
                  <td>Walls</td>
                  <td>Standard Bricks</td>
                  <td>AAC Blocks</td>
                  <td>AAC Blocks</td>
                </tr>
                
                <tr className="feature-category">
                  <td colSpan="4">Finishes</td>
                </tr>
                <tr>
                  <td>Flooring</td>
                  <td>Standard Tiles</td>
                  <td>Premium Tiles</td>
                  <td>Italian Marble</td>
                </tr>
                <tr>
                  <td>Kitchen</td>
                  <td>Basic Modular</td>
                  <td>Premium Modular + Chimney</td>
                  <td>Luxury Modular + Marble</td>
                </tr>
                <tr>
                  <td>Sanitaryware</td>
                  <td>Standard</td>
                  <td>Premium</td>
                  <td>Kohler/Grohe</td>
                </tr>
                <tr>
                  <td>Windows</td>
                  <td>Standard</td>
                  <td>Premium</td>
                  <td>Double Glazed</td>
                </tr>
                
                <tr className="feature-category">
                  <td colSpan="4">Special Features</td>
                </tr>
                <tr>
                  <td>Rainwater Harvesting</td>
                  <td className="cross">—</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
                <tr>
                  <td>Landscape Design</td>
                  <td className="cross">—</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
                <tr>
                  <td>Home Automation</td>
                  <td className="cross">—</td>
                  <td className="cross">—</td>
                  <td className="check">✓</td>
                </tr>
                <tr>
                  <td>HVAC Provisions</td>
                  <td className="cross">—</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <div className="container">
          <div className="form-container" data-aos="fade-up">
            <h2>Request a Custom Quote</h2>
            <p>Get a personalized quote based on your specific requirements</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" className="form-input" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-input" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className="form-input" placeholder="+91 XXXXXXXXXX" value={formData.phone} onChange={handleChange} minLength="10" maxLength="20" required />
                </div>
                <div className="form-group">
                  <label htmlFor="package">Package Interest</label>
                  <select id="package" className="form-input" value={formData.package} onChange={handleChange} required>
                    <option value="">Select Package</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Custom Package">Custom Package</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="area">Construction Area (sq.ft)</label>
                <input type="number" id="area" className="form-input" placeholder="Area must be between 100 and 100,000 sq.ft" min="100" max="100000" value={formData.area} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Special Requirements</label>
                <textarea id="message" className="form-input" placeholder="Tell us about your project requirements..." maxLength="2000" value={formData.message} onChange={handleChange}></textarea>
              </div>
              
              <div className="form-group" style={{textAlign: 'center', marginTop: '30px'}}>
                <button type="submit" className="btn" disabled={loading}>
                  {loading ? (
                    <><i className="fas fa-spinner fa-spin"></i> Submitting...</>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </div>
              
              {status.message && (
                <div className={`alert alert-${status.type}`}>{status.message}</div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
