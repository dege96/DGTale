import React from 'react';
import '../styles/Sections.css';

const BlogSection = () => {
  return (
    <section id="blogg" className="section">
      <div className="section-container">
        <h2>Blogg</h2>
        <div className="blog-grid">
          <article className="blog-post">
            <div className="blog-image">
              <img src="/images/test1.png" alt="Blogg 1" />
            </div>
            <div className="blog-content">
              <h3>Framtidens webbdesign</h3>
              <p className="blog-date">December 29, 2023</p>
              <p className="text-large">Upptäck de senaste trenderna inom webbdesign och hur de formar framtidens digitala landskap.</p>
              <a href="/blogg/framtidens-webbdesign" className="read-more">Läs mer</a>
            </div>
          </article>
          <article className="blog-post">
            <div className="blog-image">
              <img src="/images/test2.png" alt="Blogg 2" />
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
              <img src="/images/test3.png" alt="Blogg 3" />
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