'use client';

import React, { useEffect, useRef } from 'react';
import '@/app/styles/Hero.css';
import { gsap } from 'gsap';

const Hero = () => {
  const aRef = useRef(null);
  const bRef = useRef(null);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    const words = ['WEBBUTVECKLING', 'SYSTEMLÖSNINGAR', 'AUTOMATION', 'DESIGN'];
    let index = 0;
    let showingA = true;

    a.textContent = words[index];
    b.textContent = words[(index + 1) % words.length];

    gsap.set(a, { opacity: 1, y: 0 });
    gsap.set(b, { opacity: 0, y: 12 });

    const cycle = () => {
      const current = showingA ? a : b;
      const next = showingA ? b : a;
      index = (index + 1) % words.length;
      next.textContent = words[index];

      const tl = gsap.timeline();
      tl.to(current, { y: -12, opacity: 0, duration: 0.6, ease: 'power3.inOut' }, 0)
        .fromTo(next, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.inOut' }, 0);

      showingA = !showingA;
    };

    const intervalId = setInterval(cycle, 2600);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
          <div className="hero-content">
            <div className="hero-content-text">SKRÄDDARSYDD OCH PROFESSIONELLT KODAD</div>
            <h1>
              <span className="rotating-wrapper">
                <span ref={aRef} className="rotating-keyword text-primary">WEBBUTVECKLING</span>
                <span ref={bRef} className="rotating-keyword text-primary"></span>
              </span>
              <br /> FÖR SMÅFÖRETAGARE
            </h1>
          <p>Skräddarsydda, professionella och användarvänliga lösningar som attraherar kunder.</p>
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