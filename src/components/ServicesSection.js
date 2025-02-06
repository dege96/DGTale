import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import '../styles/Sections.css';

const ServicesSection = () => {
  return (
    <section id="tjanster" className="section">
      <div className="section-container">
        <h2>Vad vi gör</h2>
        <div className="services-grid">
          <AnimateOnScroll>
            <div className="service-card">
              <h3>Webbdesign</h3>
              <p>Moderna och användarvänliga webbplatser som fångar din målgrupps uppmärksamhet.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="service-card">
              <h3>Webbutveckling</h3>
              <p>Skräddarsydda webbapplikationer med fokus på prestanda och funktionalitet.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="service-card">
              <h3>E-handel</h3>
              <p>Kompletta e-handelslösningar som hjälper dig att sälja dina produkter online.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="service-card">
              <h3>SEO-optimering</h3>
              <p>Förbättra din synlighet online med våra SEO-tjänster.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 