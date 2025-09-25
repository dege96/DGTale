'use client';

import React from 'react';
import AnimateOnScroll from '@/app/components/AnimateOnScroll';
import '@/app/styles/ServicePage.css';

const SEOOptimeringPage = () => {
  return (
    <div className="service-content">
      <AnimateOnScroll>
        <div className="service-description">
          <h1>SEO-optimering för bättre synlighet</h1>
          <p className="lead-text">
            Vi hjälper dig att förbättra din synlighet i sökmotorer och öka din organiska trafik. 
            Vår strategiska SEO-optimering fokuserar på långsiktiga resultat och hållbar tillväxt 
            för din verksamhet.
          </p>

          <div className="service-features">
            <h2>Våra SEO-tjänster</h2>
            <ul>
              <li>Nyckelordsanalys och optimering</li>
              <li>Teknisk SEO och webbplatsstruktur</li>
              <li>Innehållsstrategi och optimering</li>
              <li>Länkbyggande och varumärkesbyggande</li>
              <li>Analys och rapportering</li>
            </ul>
          </div>

          <div className="process-section">
            <h2>Vår SEO-process</h2>
            <div className="process-steps">
              <div className="process-step">
                <h3>1. Analys & Audit</h3>
                <p>Vi genomför en grundlig analys av din nuvarande SEO-status.</p>
              </div>
              <div className="process-step">
                <h3>2. Strategi & Planering</h3>
                <p>Vi utvecklar en skräddarsydd SEO-strategi baserad på dina mål.</p>
              </div>
              <div className="process-step">
                <h3>3. Implementering</h3>
                <p>Vi optimerar din webbplats och innehåll enligt bästa praxis.</p>
              </div>
              <div className="process-step">
                <h3>4. Övervakning & Förbättring</h3>
                <p>Vi övervakar resultaten och justerar strategin kontinuerligt.</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Redo att förbättra din synlighet online?</h3>
            <p>Kontakta oss idag för en kostnadsfri SEO-konsultation</p>
            <a href="/kontakt" className="btn btn-primary">
              Boka konsultation
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default SEOOptimeringPage; 