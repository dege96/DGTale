import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import '@/app/styles/Sections.css';

const AboutSection = () => {
  return (
    <section id="om-oss" className="section white-section no-padding-top">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="black-text">Om Oss</h2>
            <AnimateOnScroll>
              <div className="about-panel">
                <div className="black-text about-text">
                  <h3>Digitala lösningar med användaren i centrum</h3>

                  <p>
                    I över två decennier har den digitala världen förändrats i rasande fart. Teknik, trender och verktyg har utvecklats, men alltför ofta har en sak hamnat i skymundan: <strong>användaren</strong>.
                  </p>

                  <p>
                    På DGTale AB bygger vi digitala lösningar som fungerar på riktigt.
                  </p>

                  <div className="about-card-grid">
                    <div className="about-card">
                      <h4>Webbutveckling</h4>
                      <p>Moderna, snabba och lättnavigerade hemsidor.</p>
                    </div>
                    <div className="about-card">
                      <h4>Systemlösningar</h4>
                      <p>Skräddarsydda plattformar som förenklar och effektiviserar.</p>
                    </div>
                    <div className="about-card">
                      <h4>Automation</h4>
                      <p>Smarta flöden som sparar tid och minskar fel.</p>
                    </div>
                    <div className="about-card">
                      <h4>Design</h4>
                      <p>Visuellt starka uttryck som samtidigt känns intuitiva.</p>
                    </div>
                  </div>

                  <p>
                    Varje rad kod, varje layout och varje funktion har ett tydligt syfte: att skapa en upplevelse som är enkel, tillgänglig och självklar.
                  </p>

                  <p>
                    Vi brinner för tekniken, men ännu mer för det mänskliga. För i slutändan är det <strong>upplevelsen</strong> som avgör, om en besökare stannar, återkommer och bygger förtroende.
                  </p>

                  <p>
                    DGTale hjälper företag att växa digitalt, med lösningar som gör skillnad.
                  </p>

                  <div className="about-values">
                    <span className="about-value">Användarcentrerat</span>
                    <span className="about-value">Tillgängligt</span>
                    <span className="about-value">Skräddarsytt</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          <div className="about-image">
            <AnimateOnScroll>
              <img 
                src="/images/logo_gradient.png" 
                alt="DGTale logotyp" 
                className="rounded-image"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 