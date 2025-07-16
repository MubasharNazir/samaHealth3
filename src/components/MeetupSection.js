import React from 'react';
import styles from '../styles/MeetupSection.module.css';

export default function MeetupSection() {
  return (
    <section className={styles.meetupSection}>
      <div className={styles.card}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>Join our community.</h2>
          <p className={styles.description}>
            Connect with South Asian mental health allies, share experiences, and grow together. Be part of a supportive network that cares about emotional well-being.
          </p>
        </div>
        <a
          href="https://www.meetup.com/south-asian-mental-health-allies/"
          className={styles.ctaBtn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Request to Join our Meetup community"
        >
          Request to Join
        </a>
      </div>
    </section>
  );
} 