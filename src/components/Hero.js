import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>WEBBUTVECKLING 
        FÖR SMÅFÖRETAGARE</h1>
        <p>Professionella och användarvänliga hemsidor för småföretag – byggda för att attrahera kunder och växa med din verksamhet. Snabba, snygga och <b>skräddarsydda för dina behov</b>. Vi tar hand om allt, så att du kan fokusera på ditt företag.</p>
        <button className="cta-button">Kom igång</button>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero; 