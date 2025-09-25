'use client';

import React from 'react';
import AnimateOnScroll from '@/app/components/AnimateOnScroll';
import '@/app/styles/ServicePage.css';

const DesignPage = () => {
  return (
    <div className="service-content">
      <AnimateOnScroll>
        <div className="service-description">
          <h1>Design som fångar uppmärksamhet</h1>
          <p className="lead-text">
            Vi skapar visuellt tilltalande och användarvänliga webbplatser som inte bara ser bra ut, 
            utan också levererar resultat. Vår designprocess fokuserar på att förstå din målgrupp 
            och skapa en upplevelse som resonerar med dem.
          </p>

          <div className="service-features">
            <h2>Vad vi erbjuder</h2>
            <ul>
              <li>Modern och minimalistisk design</li>
              <li>Användarcentrerad upplevelse</li>
              <li>Responsiv design för alla enheter</li>
              <li>Visuell identitet och varumärkesbyggande</li>
              <li>UI/UX-design med fokus på konvertering</li>
            </ul>
          </div>

          <div className="process-section">
            <h2>Vår designprocess</h2>
            <div className="process-steps">
              <div className="process-step">
                <h3>1. Research & Analys</h3>
                <p>Vi förstår din målgrupp och dina konkurrenter för att skapa en unik designstrategi.</p>
              </div>
              <div className="process-step">
                <h3>2. Koncept & Wireframes</h3>
                <p>Vi utvecklar koncept och skapar wireframes för att visualisera strukturen.</p>
              </div>
              <div className="process-step">
                <h3>3. Design & Prototyper</h3>
                <p>Vi skapar visuella designkoncept och interaktiva prototyper.</p>
              </div>
              <div className="process-step">
                <h3>4. Testning & Förbättring</h3>
                <p>Vi testar designen med användare och förfinar baserat på feedback.</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Redo att förvandla din vision till verklighet?</h3>
            <p>Kontakta oss idag för en kostnadsfri designkonsultation</p>
            <a href="/kontakt" className="btn btn-primary">
              Boka konsultation
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default DesignPage; 