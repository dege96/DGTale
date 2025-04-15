import React from 'react';
import '@/app/styles/Sections.css';
import TextHover from './TextHover';

const PricingSection = () => {
  const handleButtonClick = (subject) => {
    window.location.href = `mailto:victor@dgtale.se?subject=${subject}`;
  };


  return (
    <section id="priser" className="section">
      <div className="section-container">
        <h2>Priser</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Start</h3>
            <p className="price">14 995 kr</p>
            <ul>
              <li>Mobiloptimerad hemsida (2 sidor)</li>
              <li>Kontaktformulär</li>
              <li>
                <TextHover text="(Wordmark-logotyp, submark, typsnitt och färgpalett)">
                    Grundläggande varumärkeskit
                </TextHover>
              </li>
              <li>Support och underhåll i 30 dagar</li>
            </ul>
            <button className="btn btn-secondary btn-full" onClick={() => handleButtonClick('Startup-paket')}>Välj paket</button>
            <p className="price-description">Passar: Nystartade småföretag. </p>

          </div>
          
          <div className="pricing-card featured">
            <h3>Business</h3>
            <p className="price">19 995 kr</p>
            <ul>
              <li><span className="price-description">Allt i Start +</span></li>
              <li>Mobiloptimerad hemsida (5 sidor)</li>
              <li>CMS-integration</li>
              <li>Skräddarsydd design</li>
              <li>Nyhetsbrev</li>
              <li>Support och underhåll i 30 dagar</li>
              <li>Grundläggande SEO</li>
            </ul>
            <button className="btn btn-primary btn-full" onClick={() => handleButtonClick('Tillväxt-paket')}>Välj paket</button>
            <p className="price-description">Passar: Etablerade småföretag. </p>

          </div>
          
          <div className="pricing-card">
            <h3>Tillväxt</h3>
            <p className="price">Kontakta oss</p>
            <ul>
              <li><span className="price-description">Allt i Business +</span></li>
              <li>
                <TextHover text="Exempelvis backend för bokningssystem, e-handel, databaser, etc.">
                Avancerade funktioner
                </TextHover>
              </li>
              <li>Specialdesignad sida från grunden</li>
              <li>Full SEO-optimering</li>
              <li>Google Analytics-integration</li>
              <li>Upp till 10 sidor</li>
              <li>E-handelslösning</li>
              <li>API-integration</li>
              <li>Upp 12 månaders support</li>
            </ul>
            <button className="btn btn-tertiary btn-full" onClick={() => handleButtonClick('Enterprise-paket')}>Kontakta oss</button>
            <p className="price-description">Passar: Etablerade företag med tillväxtfokus. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 