import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import '@/app/styles/Sections.css';
import '@/app/styles/typography.css';

const ServicesSection = () => {
  return (
    <section id="tjanster" className="section">
      <div className="section-container">
        <h2>Vad vi gör</h2>

        <div className="services-grid">
          <AnimateOnScroll>
            <div className="service-card">
              <h3>Skräddarsydd design</h3>
              <p>Unika webbplatser som speglar ditt varumärke med fokus på användarupplevelse och konvertering.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="service-card">
              <h3>SEO & Analytics</h3>
              <p>Full SEO-optimering och Google Analytics-integration för att maximera din synlighet och följa upp besökare.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="service-card">
              <h3>E-handel & API</h3>
              <p>Kraftfulla e-handelslösningar och API-integrationer för att koppla samman din webbplats med andra system.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="service-card">
              <h3>Support & Underhåll</h3>
              <p>Upp till 12 månaders support för att säkerställa att din webbplats alltid fungerar optimalt.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 