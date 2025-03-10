import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import '@/app/styles/Sections.css';

const AboutSection = () => {
  return (
    <section id="om-oss" className="section white-section no-padding-top">
      <div className="section-container">
        <h2 className="black-text">Om Oss</h2>
        <div className="section-content">
          <div className="text-content">
            <AnimateOnScroll>
              <p className="black-text">
                DGTale är en kreativ webbyrå som specialiserar sig på att skapa <strong>moderna</strong> och <strong>användarvänliga</strong> webbplatser. 
                Vi kombinerar innovativ design med teknisk expertis för att leverera digitala lösningar. Vi brinner för att skapa webbplatser som inte bara ser fantastiska ut, 
                utan också <strong>levererar resultat</strong>.
                Med vår passion för webbutveckling och öga för detaljer, hjälper vi företag att etablera en stark digital närvaro. 
                Vi tror på att skapa långsiktiga relationer med våra kunder och ser varje projekt som en möjlighet att överträffa oss själva.
              </p>
            </AnimateOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 