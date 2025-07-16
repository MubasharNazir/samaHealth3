import React from 'react';
import styles from '../styles/FeaturedInSection.module.css';



const FeaturedInSection = ({heading,logos}) => {
  return (
    <section className={styles.companiesSection}>
      <h2 className={styles.companiesHeading}>{heading}</h2>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {logos.map((logo, index) => (
            <div className={styles.slide} key={index}>
              <img src={logo.src} alt={logo.alt} className={styles.companyLogo} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div className={styles.slide} key={`duplicate-${index}`}>
              <img src={logo.src} alt={logo.alt} className={styles.companyLogo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection; 