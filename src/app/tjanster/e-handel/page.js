'use client';

import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/app/components/AnimateOnScroll';
import '@/app/styles/globals.css';
import '@/app/styles/Sections.css';
import '@/app/styles/ServicePage.css';

const EHandelPage = () => {
  return (
    <main className="main">
      <section className="section">
        <div className="section-container">
          <div className="service-content">
            <AnimateOnScroll>
              <div className="service-description">
                <h1>Kompletta e-handelslösningar</h1>
                <p className="lead-text">
                  Vi hjälper dig att bygga och optimera din e-handelsplattform för att maximera 
                  försäljningen och skapa en sömlös kundupplevelse. Vår lösning är skräddarsydd 
                  för att passa just ditt företag och dina kunder.
                </p>

                <div className="service-features">
                  <h2>Våra e-handelstjänster</h2>
                  <ul>
                    <li>Anpassade e-handelsplattformar</li>
                    <li>Betalningslösningar och integrationer</li>
                    <li>Lager- och orderhantering</li>
                    <li>Kundupplevelse och konverteringsoptimering</li>
                    <li>Analys och rapportering</li>
                  </ul>
                </div>

                <div className="process-section">
                  <h2>Vår e-handelsprocess</h2>
                  <div className="process-steps">
                    <div className="process-step">
                      <h3>1. Analys & Strategi</h3>
                      <p>Vi analyserar din marknad och utvecklar en skräddarsydd e-handelsstrategi.</p>
                    </div>
                    <div className="process-step">
                      <h3>2. Plattformsutveckling</h3>
                      <p>Vi bygger en robust och skalbar e-handelsplattform.</p>
                    </div>
                    <div className="process-step">
                      <h3>3. Integration & Testning</h3>
                      <p>Vi integrerar alla system och säkerställer att allt fungerar perfekt.</p>
                    </div>
                    <div className="process-step">
                      <h3>4. Lansering & Optimering</h3>
                      <p>Vi hjälper dig att lansera och kontinuerligt optimera din e-handel.</p>
                    </div>
                  </div>
                </div>

                <div className="cta-section">
                  <h3>Redo att ta din e-handel till nästa nivå?</h3>
                  <p>Kontakta oss idag för en kostnadsfri e-handelskonsultation</p>
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

export default EHandelPage; 