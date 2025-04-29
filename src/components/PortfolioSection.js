import React from 'react';
import '@/app/styles/Sections.css';
import Image from 'next/image';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section">
      <div className="section-container">
        <h2>Kundcase</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <Image 
              src="/images/hasams.png" 
              alt="Hasams AB - Redovisningsbyrå i Tyresö"
              width={500}
              height={300}
              layout="responsive" 
            />
            <div className="portfolio-overlay" onClick={() => window.open('https://hasamsredovisning.se', '_blank')}>
              <h3>HaSams AB</h3>
              <p>Redovisningsbyrå i Tyresö</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/images/dgd.png" alt="DGD Solutions - Konsultation inom teknisk projektledning, design och tillverkning." />
            <div className="portfolio-overlay" onClick={() => window.open('https://dg-development.vercel.app/', '_blank')}>
              <h3>DGD Solutions</h3>
              <p>Konsultation inom teknisk projektledning, design och tillverkning.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/images/brown.png" alt="Brown VVS - VVS-företag i Saltsjöbaden" />
            <div className="portfolio-overlay" onClick={() => window.open('https://brownvvs-v2-1.vercel.app/', '_blank')}>
              <h3>Brown VVS</h3>
              <p>VVS-företag i Saltsjöbaden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 