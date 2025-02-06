'use client';

import styles from '@/styles/Header.module.css';

export default function Header() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
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
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src="/images/DeGeerWebstudio.svg" alt="De Geer Web Studios" />
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Hem</a></li>
            <li><a href="#om-oss" onClick={(e) => handleScroll(e, 'om-oss')}>Om oss</a></li>
            <li><a href="#tjanster" onClick={(e) => handleScroll(e, 'tjanster')}>Tjänster</a></li>
            <li><a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')}>Portfolio</a></li>
            <li><a href="#kontakt" onClick={(e) => handleScroll(e, 'kontakt')}>Kontakt</a></li>
          </ul>
        </nav>
        <button className={styles.headerCta} onClick={(e) => handleScroll(e, 'kontakt')}>Kontakta oss</button>
      </div>
    </header>
  );
}