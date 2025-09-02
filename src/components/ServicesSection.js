import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import '@/app/styles/Sections.css';
import '@/app/styles/typography.css';
import Link from 'next/link';

const ServicesSection = () => {
  const categories = [
    {
      title: 'Webbutveckling',
      link: '/webbutveckling',
      desc: 'Responsiva och SEO-optimerade hemsidor byggda i moderna ramverk.'
    },
    {
      title: 'Systemlösningar',
      link: '#',
      desc: 'Skräddarsydda lösningar som effektiviserar dina affärsprocesser.'
    },
    {
      title: 'Automation',
      link: '#',
      desc: 'Automatisera repetitiva uppgifter med smarta skript och integrationer.'
    },
    {
      title: 'Design',
      link: '#',
      desc: 'Visuell identitet och UI/UX-design som stärker ditt varumärke.'
    },
  ];

  return (
    <section id="tjanster" className="section">
      <div className="section-container">
        <h2>Vad vi gör</h2>

        <div className="services-grid">
          {categories.map((cat, idx) => (
            <AnimateOnScroll key={cat.title}>
              {cat.link === '#' ? (
                <div className="service-card">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              ) : (
                <Link href={cat.link} legacyBehavior>
                  <a className="service-card" style={{ textDecoration: 'none' }}>
                    <h3>{cat.title}</h3>
                    <p>{cat.desc}</p>
                  </a>
                </Link>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 