import React from 'react';
import '@/app/styles/Sections.css';

const BlogSection = () => {
  return (
    <section id="blogg" className="section">
      <div className="section-container">
        <h2>Nyheter</h2>
        <div className="blog-grid">
          <article className="blog-post">
            <div className="blog-image">
              <img src="/images/test1.png" alt="17 statistik som visar vikten av smartare webbdesign" />
            </div>
            <div className="blog-content">
              <h3>17 statistik som visar vikten av smartare webbdesign</h3>
              <p className="blog-date">Mars 5, 2024</p>
              <p className="text-large">Upptäck de övertygande siffrorna som visar varför investeringar i webbdesign och användarupplevelse är avgörande för din framgång online.</p>
              <a href="/blogg/statistik-webbdesign" className="read-more">Läs mer</a>
            </div>
          </article>
          <article className="blog-post">
            <div className="blog-image">
              <img src="/images/test2.png" alt="Responsiv Design: En Nödvändighet för Moderna Webbplatser" />
            </div>
            <div className="blog-content">
              <h3>Responsiv Design: En Nödvändighet för Moderna Webbplatser</h3>
              <p className="blog-date">Mars 1, 2024</p>
              <p className="text-large">Lär dig varför responsiv design är avgörande för moderna webbplatser och hur du implementerar det på bästa sätt.</p>
              <a href="/blogg/responsiv-design" className="read-more">Läs mer</a>
            </div>
          </article>
          <article className="blog-post">
            <div className="blog-image">
              <img src="/images/test3.png" alt="Från Koncept till Kod: Bemästra Webbdesignprocessen" />
            </div>
            <div className="blog-content">
              <h3>Från Koncept till Kod: Bemästra Webbdesignprocessen</h3>
              <p className="blog-date">Februari 20, 2024</p>
              <p className="text-large">En komplett guide som tar dig genom alla steg i webbdesignprocessen, från planering till lansering.</p>
              <a href="/blogg/bemastrar-webbdesign" className="read-more">Läs mer</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 