import React, { useEffect } from 'react';
import styles from '../styles/Notification.module.css';

export default function Notification({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  // Prevent background scroll when notification is open
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className={styles.notification} role="alert">
      <span className={styles.icon} aria-hidden="true">✔️</span>
      <span className={styles.message}>{message}</span>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close notification">&times;</button>
    </div>
  );
} 