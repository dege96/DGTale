import React, { useState } from 'react';
import '@/app/styles/Sections.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'startup',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Skapa e-postlänk och öppna den i ett nytt fönster
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`${formData.message}`);
    
    window.location.href = `mailto:victor@dgtale.se?subject=${subject}&body=${body}`;
    
    // Återställ formuläret efter skickat
    setFormData({
      name: '',
      email: '',
      subject: 'startup',
      message: ''
    });
  };

  return (
    <section id="kontakt" className="section">
      <div className="section-container">
        <h2>Kontakta Oss</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Kontaktinformation</h3>
            <p><strong>Adress:</strong> Vetevägen 22, 187 69 Täby</p>
            <p><strong>Telefon:</strong> 0761914617</p>
            <p><strong>E-post:</strong> <a href="mailto:victor@dgtale.se" style={{ color: 'inherit', textDecoration: 'none' }}>victor@dgtale.se</a></p>
            <div className="social-links">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/company/dgtale-stockholm-ab/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/dgtalesweden/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
            </div>
            <div className="form-group">
              <label htmlFor="subject">Ämne</label>
              <select 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="startup">Startup-paket</option>
                <option value="growth">Tillväxt-paket</option>
                <option value="enterprise">Enterprise-paket</option>
                <option value="other">Övrigt</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Meddelande</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Skicka meddelande</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 