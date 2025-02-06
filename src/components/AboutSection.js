import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import '../styles/Sections.css';

const AboutSection = () => {
  return (
    <section id="om-oss" className="section">
      <div className="section-container">
        <h2>Om Oss</h2>
        <div className="section-content">
          <div className="text-content">
            <AnimateOnScroll>
              <p>
                De Geer Web Studios är en kreativ webbyrå som specialiserar sig på att skapa moderna och användarvänliga webbplatser. 
                Vi kombinerar innovativ design med teknisk expertis för att leverera digitala lösningar som överträffar förväntningar.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <p>
                Med vår passion för webbutveckling och öga för detaljer, hjälper vi företag att etablera en stark digital närvaro. 
                Vi tror på att skapa långsiktiga relationer med våra kunder och ser varje projekt som en möjlighet att överträffa oss själva.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <p>
                Vårt team består av erfarna designers och utvecklare som brinner för att skapa webbplatser som inte bara ser fantastiska ut, 
                utan också levererar resultat för våra kunder.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 