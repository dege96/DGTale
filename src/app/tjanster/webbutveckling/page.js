'use client';

import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/app/components/AnimateOnScroll';
import '@/app/styles/globals.css';
import '@/app/styles/Sections.css';
import '@/app/styles/ServicePage.css';

const WebbutvecklingPage = () => {
  return (
    <main className="main">
      <section className="section">
        <div className="section-container">
          <div className="service-content">
            <AnimateOnScroll>
              <div className="service-description">
                <h1>Skräddarsydda webbapplikationer</h1>
                <p className="lead-text">
                  Vi utvecklar moderna och skalbara webbapplikationer med fokus på prestanda, 
                  säkerhet och användarupplevelse. Vår expertis sträcker sig från enkla 
                  webbplatser till komplexa webbapplikationer.
                </p>

                <div className="service-features">
                  <h2>Våra kompetenser</h2>
                  <ul>
                    <li>Frontend-utveckling med React & Next.js</li>
                    <li>Backend-utveckling med Node.js & Python</li>
                    <li>Databashantering och API-integrationer</li>
                    <li>Responsiv och tillgänglig webbutveckling</li>
                    <li>Prestandaoptimering och säkerhet</li>
                  </ul>
                </div>

                <div className="process-section">
                  <h2>Vår utvecklingsprocess</h2>
                  <div className="process-steps">
                    <div className="process-step">
                      <h3>1. Planering & Analys</h3>
                      <p>Vi definierar krav och skapar en detaljerad projektplan.</p>
                    </div>
                    <div className="process-step">
                      <h3>2. Design & Prototyper</h3>
                      <p>Vi utvecklar designkoncept och skapar interaktiva prototyper.</p>
                    </div>
                    <div className="process-step">
                      <h3>3. Utveckling & Testning</h3>
                      <p>Vi implementerar funktionaliteten med kontinuerlig testning.</p>
                    </div>
                    <div className="process-step">
                      <h3>4. Lansering & Underhåll</h3>
                      <p>Vi säkerställer en smidig lansering och erbjuder kontinuerligt underhåll.</p>
                    </div>
                  </div>
                </div>

                <div className="cta-section">
                  <h3>Redo att utveckla din nästa webbapplikation?</h3>
                  <p>Kontakta oss idag för en kostnadsfri utvecklingskonsultation</p>
                  <Link href="/kontakt" className="btn btn-primary">
                    Boka konsultation
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebbutvecklingPage; 