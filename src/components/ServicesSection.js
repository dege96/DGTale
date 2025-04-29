import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import '@/app/styles/Sections.css';

const ServicesSection = () => {
  return (
    <section id="tjanster" className="section">
      <div className="section-container">
        <h2>Vad vi gör</h2>
        
        <div className="services-intro">
          <p>
            Vi erbjuder en komplett webbplatslösning som är skräddarsydd från grunden för att passa just ditt varumärke och dina behov. 
            Varje sida designas unikt med fokus på användarupplevelse, konvertering och visuell identitet. 
            Din webbplats kommer att vara fullt SEO-optimerad för att maximera synligheten på sökmotorer och attrahera rätt målgrupp – redan från start.
          </p>
        </div>
        
        <div className="services-grid">
          <AnimateOnScroll>
            <div className="service-card">
              <h3>Skräddarsydd design</h3>
              <p>
                Varje sida designas unikt med fokus på användarupplevelse, konvertering och visuell identitet. 
                Vi bygger upp till 10 innehållsrika och funktionella sidor, vilket ger gott om utrymme att presentera din 
                verksamhet på ett professionellt sätt.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="service-card">
              <h3>SEO & Analytics</h3>
              <p>
                Din webbplats kommer att vara fullt SEO-optimerad för att maximera synligheten på sökmotorer och attrahera rätt målgrupp – redan från start.
                För att du ska kunna följa upp dina besökare och fatta välgrundade beslut, integrerar vi Google Analytics direkt i din webbplats.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="service-card">
              <h3>E-handel & API</h3>
              <p>
                Behöver du sälja produkter eller tjänster online? Inga problem – vi inkluderar en kraftfull och användarvänlig e-handelslösning 
                som gör det enkelt för dina kunder att handla direkt via din webbplats. Dessutom integrerar vi externa API:er för att koppla samman 
                din webbplats med andra system och plattformar du använder.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="service-card">
              <h3>Support & Underhåll</h3>
              <p>
                Som en del av vårt erbjudande får du också upp till 12 månaders support, så att du alltid har någon att vända dig till 
                om du behöver hjälp eller vill göra uppdateringar.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;