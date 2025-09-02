import React, { useEffect, useRef } from 'react';
import '@/app/styles/Hero.css';
import { gsap } from 'gsap';

const Hero = () => {
  const wordRef = useRef(null);

  useEffect(() => {
    if (!wordRef.current) return;

    const words = ['WEBBUTVECKLING', 'SYSTEMLÖSNINGAR', 'AUTOMATION', 'DESIGN'];
    let index = 0;

    const el = wordRef.current;
    el.textContent = words[index];

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
    tl.to(el, {
      duration: 0.4,
      opacity: 0,
      ease: 'power1.out',
      onComplete: () => {
        index = (index + 1) % words.length;
        el.textContent = words[index];
      },
    });
    tl.to(el, { duration: 0.4, opacity: 1, ease: 'power1.in' });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
          <div className="hero-content">
            <div className="hero-content-text">SKRÄDDARSYDD OCH PROFESSIONELLT KODAD</div>
            <h1>
              <span ref={wordRef} className="animated-word text-primary">WEBBUTVECKLING</span>
              <br /> FÖR SMÅFÖRETAGARE
            </h1>
          <p>Vi designar och utvecklar lösningar, system och hemsidor som attraherar kunder och växer med din verksamhet.</p>
          <div className="button-container">
            <a href="https://meet.brevo.com/victor-de-geer" target="_blank" rel="noopener noreferrer" className="cta-button-secondary" style={{textDecoration: 'none'}}>Boka kostnadsfritt möte</a>
            {/* <a href="portfolio" target="_blank" rel="noopener noreferrer" className="cta-button" style={{textDecoration: 'none'}}>Kundcase</a> */}
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