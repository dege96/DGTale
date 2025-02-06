import React from 'react';
import '../styles/Sections.css';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section">
      <div className="section-container">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src="/images/test1.png" alt="Projekt 1" />
            <div className="portfolio-overlay">
              <h3>E-handelsplattform</h3>
              <p>Modern e-handelslösning med fokus på användarupplevelse</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/images/test2.png" alt="Projekt 2" />
            <div className="portfolio-overlay">
              <h3>Företagshemsida</h3>
              <p>Responsiv webbplats med elegant design</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/images/test3.png" alt="Projekt 3" />
            <div className="portfolio-overlay">
              <h3>Restaurangwebbplats</h3>
              <p>Interaktiv webbplats med bokningssystem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 