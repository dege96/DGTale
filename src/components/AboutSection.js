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
              <div className="black-text about-text">
                <h3>Digitala lösningar med användaren i centrum</h3>

                <p>
                  I över två decennier har den digitala världen förändrats i rasande fart. Teknik, trender och verktyg har utvecklats, men alltför ofta har en sak hamnat i skymundan: <strong>användaren</strong>.
                </p>

                <p>
                  På DGTale AB bygger vi digitala lösningar som fungerar på riktigt.
                </p>

                <ul>
                  <li><strong>Webbutveckling</strong> – moderna, snabba och lättnavigerade hemsidor.</li>
                  <li><strong>Systemlösningar</strong> – skräddarsydda plattformar som förenklar och effektiviserar.</li>
                  <li><strong>Automation</strong> – smarta flöden som sparar tid och minskar fel.</li>
                  <li><strong>Design</strong> – visuellt starka uttryck som samtidigt känns intuitiva.</li>
                </ul>

                <p>
                  Varje rad kod, varje layout och varje funktion har ett tydligt syfte: att skapa en upplevelse som är enkel, tillgänglig och självklar.
                </p>

                <p>
                  Vi brinner för tekniken, men ännu mer för det mänskliga. För i slutändan är det <strong>upplevelsen</strong> som avgör, om en besökare stannar, återkommer och bygger förtroende.
                </p>

                <p>
                  DGTale hjälper företag att växa digitalt, med lösningar som gör skillnad.
                </p>
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