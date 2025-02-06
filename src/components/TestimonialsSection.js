import React from 'react';
import '../styles/Sections.css';

const TestimonialsSection = () => {
  return (
    <section id="kundrecensioner" className="section">
      <div className="section-container">
        <h2>Kundrecensioner</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"De Geer Web Studio 58 levererade en fantastisk webbplats som överträffade våra förväntningar. Professionellt team med stort engagemang!"</p>
            </div>
            <div className="testimonial-author">
              <img src="/images/test1.png" alt="Anna Andersson" />
              <div>
                <h4>Anna Andersson</h4>
                <p>VD, TechStart AB</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Otroligt nöjd med resultatet! Vår e-handel har sett en markant ökning i försäljning sedan lanseringen av den nya webbplatsen."</p>
            </div>
            <div className="testimonial-author">
              <img src="/images/test2.png" alt="Erik Eriksson" />
              <div>
                <h4>Erik Eriksson</h4>
                <p>Grundare, ModeBoutique</p>
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
                <h4>Maria Svensson</h4>
                <p>Marknadschef, RestaurangGruppen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 