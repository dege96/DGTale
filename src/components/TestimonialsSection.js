import React from 'react';
import '@/app/styles/Sections.css';

const TestimonialsSection = () => {
  return (
    <section id="kundrecensioner" className="section">
      <div className="section-container">
        <h2>Kundrecensioner</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Vi är supernöjda med resultatet av vår webbsida! DGTale har varit effektiva och tagit till sig våra egna idéer på ett utmärkt sätt. Vi har haft ett bra samarbete och de har verkligen lyssnat på våra önskemål. Rekommenderas varmt!"</p>
            </div>
            <div className="testimonial-author">
              <img src="/images/image003.jpg" alt="Picture of Sofie Rydén" />
              <div>
                <h4>Sofie Rydén</h4>
                <p>Ägare, HaSams AB</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Supernöjd med resultatet!"</p>
            </div>
            <div className="testimonial-author">
              <img src="/images/johan.jpg" alt="Picture of Johan De Geer" />
              <div>
                <h4>Johan De Geer</h4>
                <p>Ägare, DG Development AB</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Professionellt bemötande och excellent support genom hela processen. Rekommenderar varmt!"</p>
            </div>
            <div className="testimonial-author">
              <img src="/images/test3.png" alt="Maria Svensson" />
              <div>
                <h4>Ulrika Brown</h4>
                <p>Ägare, Brown VVS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 