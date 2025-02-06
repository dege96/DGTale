import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Om oss</h3>
            <p>De Geer Web Studios erbjuder professionell webbdesign och utveckling för företag som vill synas online.</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Kontakt</h3>
            <p>Email: info@degeerweb.se</p>
            <p>Tel: 070-123 45 67</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Följ oss</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Facebook</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2023 De Geer Web Studios. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}