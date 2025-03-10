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
              <img src="/images/test1.png" alt="Vikten av en hemsida för småföretag" />
            </div>
            <div className="blog-content">
              <h3>Vikten av en Hemsida för Småföretag</h3>
              <p className="blog-date">Januari 15, 2024</p>
              <p className="text-large">Upptäck varför en professionell hemsida är avgörande för småföretag i dagens digitala samhälle och hur den kan öka din verksamhets framgång.</p>
              <a href="/blogg/vikten-av-hemsida" className="read-more">Läs mer</a>
            </div>
          </article>
          <article className="blog-post">
            <div className="blog-image">
              <img src="/images/test2.png" alt="SEO-optimering för nybörjare" />
            </div>
            <div className="blog-content">
              <h3>SEO-optimering för nybörjare</h3>
              <p className="blog-date">December 25, 2023</p>
              <p className="text-large">En guide till grundläggande SEO-tekniker som hjälper din webbplats att ranka bättre.</p>
              <a href="/blogg/seo-optimering-for-nyborjare" className="read-more">Läs mer</a>
            </div>
          </article>
          <article className="blog-post">
            <div className="blog-image">
              <img src="/images/test3.png" alt="Responsiv design" />
            </div>
            <div className="blog-content">
              <h3>Responsiv design</h3>
              <p className="blog-date">December 20, 2023</p>
              <p className="text-large">Varför responsiv design är avgörande för moderna webbplatser och hur du implementerar det.</p>
              <a href="/blogg/responsiv-design" className="read-more">Läs mer</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 