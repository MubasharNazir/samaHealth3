import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.colBrand}>
          <div className={styles.logo}>
            <img src="/assets/whitelogo.png" alt="Sama Health White Logo" className={styles.logoImg} />
            <div className={styles.descriptionWhite}>If you are experiencing an emergency, please dial 998 or go to your local hospital immediately.</div>
          </div>
        </div>
        <div className={styles.colLinks}>
          <div className={styles.linkGroup}>
            <a href="/" className={styles.link}>Home</a>
            <a href="/#about" className={styles.link}>About</a>
            <a href="/#testimonials" className={styles.link}>Testimonials</a>
            <a href="/podcasts" className={styles.link}>Podcast</a>
          </div>
          <div className={styles.linkGroup}>
            <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
            <a href="/terms-and-conditions" className={styles.link}>Terms & Conditions</a>
          </div>
        </div>
        <div className={styles.colContact}>
          <div className={styles.email}>
            <a href="mailto:info@samahealth.life">info@samahealth.life</a>
          </div>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/samahealth.life?mibextid=LQQJ4d" className={styles.social} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="transparent"/>
                <path d="M21.333 16.001h-3.2v8h-3.2v-8h-2.133v-2.667h2.133v-1.6c0-2.133 1.067-3.2 3.2-3.2h2.133v2.667h-1.6c-.267 0-.533.267-.533.533v1.6h2.133l-.267 2.667z" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/sama_health?igshid=YmMyMTA2M2Y%3D" className={styles.social} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="transparent"/>
                <path d="M22.5 10.5c.4 0 .7.1 1 .3.3.3.4.6.4 1v8.4c0 .4-.1.7-.4 1-.3.2-.6.3-1 .3h-8.9c-.4 0-.7-.1-1-.3-.3-.3-.4-.6-.4-1v-8.4c0-.4.1-.7.4-1 .3-.2.6-.3 1-.3h8.9zm0-1.5h-8.9c-.8 0-1.5.3-2 .8-.5.5-.8 1.2-.8 2v8.4c0 .8.3 1.5.8 2 .5.5 1.2.8 2 .8h8.9c.8 0 1.5-.3 2-.8.5-.5.8-1.2.8-2v-8.4c0-.8-.3-1.5-.8-2-.5-.5-1.2-.8-2-.8zm-4.5 2.7a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6zm0 1.5a1.8 1.8 0 1 0 0 3.6zm4.7-.6a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0z" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/sama-health-life/" className={styles.social} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="transparent"/>
                <path d="M12.667 13.333h2.133v1.067c.293-.48 1.04-1.2 2.267-1.2 2.013 0 2.4 1.32 2.4 3.04v4.093h-2.133v-3.627c0-.867-.16-1.493-1.067-1.493-.907 0-1.2.627-1.2 1.493v3.627h-2.133v-7zM10.667 10.667a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-1.067 2.667h2.133v7h-2.133v-7z" fill="#fff"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.copyright}>
        © Copyright SamaHealth 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;