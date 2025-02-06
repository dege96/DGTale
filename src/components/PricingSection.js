import React from 'react';
import '../styles/Sections.css';

const PricingSection = () => {
  return (
    <section id="priser" className="section">
      <div className="section-container">
        <h2>Priser</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Startup</h3>
            <p className="price">9 995 kr</p>
            <ul>
              <li>Responsiv webbplats</li>
              <li>5 sidor</li>
              <li>SEO-optimering</li>
              <li>Kontaktformulär</li>
              <li>3 månaders support</li>
            </ul>
            <button className="btn btn-secondary btn-full">Välj paket</button>
          </div>
          
          <div className="pricing-card featured">
            <h3>Business</h3>
            <p className="price">19 995 kr</p>
            <ul>
              <li>Allt i Startup</li>
              <li>10 sidor</li>
              <li>CMS-integration</li>
              <li>Nyhetsbrev</li>
              <li>6 månaders support</li>
            </ul>
            <button className="btn btn-primary btn-full">Välj paket</button>
          </div>
          
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="price">Kontakta oss</p>
            <ul>
              <li>Skräddarsydd lösning</li>
              <li>Obegränsat antal sidor</li>
              <li>E-handelslösning</li>
              <li>API-integration</li>
              <li>12 månaders support</li>
            </ul>
            <button className="btn btn-tertiary btn-full">Kontakta oss</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 