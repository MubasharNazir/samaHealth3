import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div className={`${styles.sidebarOverlay} ${open ? styles.open : ''}`} onClick={onClose} />
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close sidebar">&times;</button>
        <nav className={styles.sidebarNav}>
          <Link to="/" className={styles.sidebarLink} onClick={onClose}>Home</Link>
          <a href="/#testimonials" className={styles.sidebarLink} onClick={onClose}>Testimonials</a>
          <a href="/#faqs" className={styles.sidebarLink} onClick={onClose}>Faqs</a>
          <Link to="/podcasts" className={styles.sidebarLink} onClick={onClose}>Podcasts</Link>
          <Link to="/book-call" className={styles.sidebarBtn} onClick={onClose}>For Business</Link>
          <Link to="/for-educational-institutes" className={styles.sidebarBtn} onClick={onClose}>For Educational Institutes</Link>
          <a
            href="https://portal.samahealth.life/login"
            className={styles.therapistPortalBtn}
            onClick={onClose}
            target="_blank"
            rel="noopener noreferrer"
          >
            Therapist Portal
          </a>
        </nav>
      </aside>
    </>
  );
} 