'use client';

import { useState, useEffect } from 'react';
import styles from '@/app/styles/Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hantera scroll-effekt för headern
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Stäng menyn när fönstret ändrar storlek till desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Förhindra scrollning när mobilmenyn är öppen
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    
    // Stäng menyn om den är öppen
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src="/images/logo_no_undertext.svg" alt="De Geer Web Studios" />
        </div>
        
        {/* Desktop navigation */}
        <nav className={styles.navigation}>
          <ul>
            <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Hem</a></li>
            <li><a href="#om-oss" onClick={(e) => handleScroll(e, 'om-oss')}>Om oss</a></li>
            <li><a href="#tjanster" onClick={(e) => handleScroll(e, 'tjanster')}>Tjänster</a></li>
            <li><a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')}>Portfolio</a></li>
            <li><a href="#kontakt" onClick={(e) => handleScroll(e, 'kontakt')}>Kontakt</a></li>
          </ul>
        </nav>
        
        <button className={styles.headerCta} onClick={(e) => handleScroll(e, 'kontakt')}>
          Kontakta oss
        </button>
        
        {/* Hamburger menu button */}
        <div 
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Hem</a></li>
          <li><a href="#om-oss" onClick={(e) => handleScroll(e, 'om-oss')}>Om oss</a></li>
          <li><a href="#tjanster" onClick={(e) => handleScroll(e, 'tjanster')}>Tjänster</a></li>
          <li><a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')}>Portfolio</a></li>
          <li><a href="#kontakt" onClick={(e) => handleScroll(e, 'kontakt')}>Kontakt</a></li>
        </ul>
        <button className={styles.headerCta} onClick={(e) => handleScroll(e, 'kontakt')}>
          Kontakta oss
        </button>
      </div>
    </header>
  );
}