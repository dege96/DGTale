import React from 'react';
import '@/app/styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
          <div className="hero-content">
            <div className="hero-content-text">SKRÄDDARSYDD OCH PROFESSIONELLT KODAD</div>
            <h1><span className="text-primary">WEBBUTVECKLING </span>
             <br /> FÖR SMÅFÖRETAGARE </h1>
          <p>Professionella och användarvänliga hemsidor för småföretag – byggda för att attrahera kunder och växa med din verksamhet. Snabba, snygga och <b>skräddarsydda för dina behov</b>. Vi tar hand om allt, så att du kan fokusera på ditt företag.</p>
          <div className="button-container">
            <button className="cta-button-secondary">Kom igång</button>
            <button className="cta-button">Kundcase</button>
          </div>
        </div>
        <div className="hero-laptop">
          <img src="/images/Laptop.png" alt="Laptop visande webbdesign" />
        </div>
      </div>
      <div className="hero-overlay"></div>
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 