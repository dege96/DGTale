import React from 'react';
import { useParams } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import '../styles/ServicePage.css';

const ServicePage = () => {
  const { serviceId } = useParams();

  // Här skulle du normalt hämta tjänstinformation från en API eller databas
  const serviceData = {
    'webbutveckling': {
      title: 'Skräddarsydda webbapplikationer',
      description: 'Vi skapar moderna och användarvänliga webbplatser som är optimerade för alla enheter.',
      sections: [
        {
          title: 'Responsiv Design',
          content: 'Alla våra webbplatser är fullt responsiva och fungerar perfekt på alla enheter.'
        },
        {
          title: 'Modern Teknik',
          content: 'Vi använder de senaste teknikerna för att säkerställa snabba och säkra webbplatser.'
        }
      ]
    },
    // Lägg till fler tjänster här
  };

  const service = serviceData[serviceId];

  if (!service) {
    return <div className="service-content">Tjänsten hittades inte</div>;
  }

  return (
    <div className="service-content">
      <AnimateOnScroll>
        <div className="service-description">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          
          {service.sections.map((section, index) => (
            <div key={index}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}

          <div className="cta-section">
            <h3>Redo att komma igång?</h3>
            <p>Kontakta oss idag för en kostnadsfri konsultation</p>
            <a href="/kontakt" className="btn btn-primary">
              Kontakta oss
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default ServicePage; 