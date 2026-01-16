import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://nk-divanshu-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to submit form' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <main className="container section">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Have a project in mind? We'd love to collaborate and bring your vision to life.</p>
        </div>

        <div className="contact-grid">
          <div className="form-container">
            <h2 className="form-title"><i className="fas fa-envelope"></i> Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input className="form-input" type="text" id="name" value={formData.name} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input className="form-input" type="email" id="email" value={formData.email} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input className="form-input" type="tel" id="phone" value={formData.phone} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select className="form-input" id="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="Consultation">Consultation Request</option>
                  <option value="Project">Project Inquiry</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea className="form-input" id="message" placeholder="Message must be between 10 and 2000 characters" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              <button type="submit" className="btn" disabled={loading}>
                {loading ? (
                  <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                ) : (
                  <><i className="fas fa-paper-plane"></i> Send Message</>
                )}
              </button>
              
              {status.message && (
                <div className={`alert alert-${status.type}`}>{status.message}</div>
              )}
            </form>
          </div>

          <div className="info-container">
            <div className="info-card">
              <h2><i className="fas fa-map-marker-alt"></i> Our Location</h2>
              <p><i className="fas fa-city"></i> 329-Homeland City - II, Sri Ganganagar</p>
              <p><i className="fas fa-location-dot"></i> Latitude: 29.873004° N</p>
              <p><i className="fas fa-location-dot"></i> Longitude: 73.87483° E</p>
            </div>
            
            <div className="info-card">
              <h2><i className="fas fa-address-book"></i> Contact Details</h2>
              <p><i className="fas fa-phone"></i> +91-0000 000 000</p>
              <p><i className="fas fa-envelope"></i> info@nkdivanshu24x7services.in</p>
              <p><i className="fas fa-clock"></i> Monday-Friday: 9AM-6PM</p>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d363.65601364018323!2d73.87477459472382!3d29.872966310334046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDUyJzIyLjgiTiA3M8KwNTInMjkuNCJF!5e0!3m2!1sen!2sin!4v1768573263804!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{border:0, borderRadius: '10px'}} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NK Divanshu Builders Location"
              ></iframe>
            </div>
            
            <div className="location-info">
              <div className="info-grid">
                <div className="info-grid-card">
                  <h3><i className="fas fa-mountain"></i> Our Location</h3>
                  <p><i className="fas fa-map-pin"></i> 329-Homeland City - II, Sri Ganganagar</p>
                  <p><i className="fas fa-location-dot"></i> Latitude: 29.873004° N</p>
                  <p><i className="fas fa-location-dot"></i> Longitude: 73.87483° E</p>
                </div>
                
                <div className="info-grid-card">
                  <h3><i className="fas fa-location-crosshairs"></i> Service Area</h3>
                  <p><i className="fas fa-info-circle"></i> Sri Ganganagar & Surrounding Areas</p>
                  <p><i className="fas fa-clock"></i> 24/7 Emergency Services</p>
                  <p><i className="fas fa-phone-volume"></i> Quick Response Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">How Our Contact Process Works</h2>
          <div className="process-steps">
            <div className="step-card">
              <div className="step-icon">
                <i className="fas fa-comment-alt"></i>
              </div>
              <h3 className="step-title">1. Send Message</h3>
              <p>Fill out our contact form with your project details and requirements.</p>
            </div>
            
            <div className="step-card">
              <div className="step-icon">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <h3 className="step-title">2. We Receive It</h3>
              <p>Your message is delivered to our team at info@nkdivanshu24x7services.in.</p>
            </div>
            
            <div className="step-card">
              <div className="step-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="step-title">3. We Contact You</h3>
              <p>Our team reviews your inquiry and contacts you within 1-2 business days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
