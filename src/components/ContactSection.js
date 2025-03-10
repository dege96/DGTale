import React from 'react';
import '@/app/styles/Sections.css';

const ContactSection = () => {
  return (
    <section id="kontakt" className="section">
      <div className="section-container">
        <h2>Kontakta Oss</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Kontaktinformation</h3>
            <p><strong>Adress:</strong> Vetevägen 22, 187 69 Täby</p>
            <p><strong>Telefon:</strong> 0761914617</p>
            <p><strong>E-post:</strong> victor@dgtale.se</p>
            <div className="social-links">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/in/victor-de-geer/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
          <form className="contact-form" action="mailto:victor@dgtale.se" method="post" encType="text/plain">
            <div className="form-group">
              <label htmlFor="name">Namn</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-post</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Ämne</label>
              <select id="subject" name="subject">
                <option value="startup">Startup-paket</option>
                <option value="growth">Tillväxt-paket</option>
                <option value="enterprise">Enterprise-paket</option>
                <option value="other">Övrigt</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Meddelande</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Skicka meddelande</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 