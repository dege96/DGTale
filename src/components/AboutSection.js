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
                <p>
                  Under de senaste två decennierna har webben exploderat i form, funktion och fart. 
                  Men mitt i alla trender och tekniska framsteg har något ofta glömts bort – <strong>användaren</strong>.
                </p>

                <p>
                  DGTale AB grundades utifrån en enkel men kraftfull idé: att skapa hemsidor som 
                  människor <strong>faktiskt vill använda</strong>. Sidor som inte bara är visuellt tilltalande, 
                  utan <strong>intuitiva</strong>, <strong>tillgängliga</strong> och <strong>anpassade för verkliga behov</strong>.
                </p>

                <p>
                  För varje pixel, varje rad kod, varje val av färg eller form finns ett syfte – att göra det 
                  <strong> lätt att förstå</strong>, <strong>lätt att navigera</strong>, <strong>lätt att agera</strong>.
                  En bra hemsida ska inte kräva instruktioner. Den ska kännas självklar.
                </p>

                <p>
                  Bakom DGTale finns en passion för det digitala, men också för det mänskliga. 
                  Teknik i all ära, men det är <strong>upplevelsen</strong> som avgör om en besökare stannar kvar – och kommer tillbaka.
                </p>

                <p>
                  Med fokus på <strong>användarvänlighet</strong>, <strong>tydlig kommunikation</strong> och 
                  <strong> tidlös design</strong> hjälper DGTale företag att bygga starka digitala plattformar. 
                  Hemsidor som fungerar – på riktigt.
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