import React from 'react';
import '@/app/styles/Sections.css';
import Link from 'next/link';

export const metadata = {
  title: 'Webbutveckling – Våra tjänster',
};

const WebbutvecklingPage = () => {
  const services = [
    {
      title: 'Skräddarsydd design',
      desc: 'Unika webbplatser som speglar ditt varumärke med fokus på användarupplevelse och konvertering.',
    },
    {
      title: 'SEO & Analytics',
      desc: 'Full SEO-optimering och Google Analytics-integration för att maximera din synlighet och följa upp besökare.',
    },
    {
      title: 'E-handel & API',
      desc: 'Kraftfulla e-handelslösningar och API-integrationer för att koppla samman din webbplats med andra system.',
    },
    {
      title: 'Support & Underhåll',
      desc: 'Upp till 12 månaders support för att säkerställa att din webbplats alltid fungerar optimalt.',
    },
  ];

  return (
    <section className="section white-section">
      <div className="section-container">
        <h2>Webbutveckling</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 2rem', textAlign: 'center' }}>
          Här är de detaljerade tjänster vi erbjuder inom webbutveckling.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link href="/#tjanster" legacyBehavior>
            <a className="cta-button" style={{ textDecoration: 'none' }}>Tillbaka</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebbutvecklingPage;
