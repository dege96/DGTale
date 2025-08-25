'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/app/styles/Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    
    // Stäng menyn om den är öppen
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    // Om vi är på hemsidan, scrolla till sektionen
    if (pathname === '/') {
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
    } else {
      // Om vi är på en annan sida, navigera till hemsidan med hash
      window.location.href = `/#${targetId}`;
    }
  };

  const renderNavLink = (href, text, targetId) => {
    if (pathname === '/') {
      return (
        <a href={href} onClick={(e) => handleNavigation(e, targetId)}>
          {text}
        </a>
      );
    } else {
      return (
        <Link href={`/#${targetId}`}>
          {text}
        </Link>
      );
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/logo.svg" alt="De Geer Web Studios" style={{height: '35px'}}/>
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <nav className={styles.navigation}>
          <ul>
            <li>{renderNavLink('#hero', 'Hem', 'hero')}</li>
            <li>{renderNavLink('#om-oss', 'Om oss', 'om-oss')}</li>
            <li>{renderNavLink('#tjanster', 'Tjänster', 'tjanster')}</li>
            <li>{renderNavLink('#portfolio', 'Portfolio', 'portfolio')}</li>
            <li>{renderNavLink('#kontakt', 'Kontakt', 'kontakt')}</li>
          </ul>
        </nav>
        
        <button className={styles.headerCta} onClick={(e) => handleNavigation(e, 'kontakt')}>
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
          <li>{renderNavLink('#hero', 'Hem', 'hero')}</li>
          <li>{renderNavLink('#om-oss', 'Om oss', 'om-oss')}</li>
          <li>{renderNavLink('#tjanster', 'Tjänster', 'tjanster')}</li>
          <li>{renderNavLink('#portfolio', 'Portfolio', 'portfolio')}</li>
          <li>{renderNavLink('#kontakt', 'Kontakt', 'kontakt')}</li>
        </ul>
        <button className={styles.headerCta} onClick={(e) => handleNavigation(e, 'kontakt')}>
          Kontakta oss
        </button>
      </div>
    </header>
  );
}