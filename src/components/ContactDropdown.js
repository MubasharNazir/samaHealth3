import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ContactDropdown.module.css';
import appStyles from '../styles/App.module.css';

const ContactDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button className={appStyles.ctaBtn} onClick={handleToggle}>
        Use Cases
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownItem} onClick={() => handleNavigation('/book-call')}>
            For Business
          </div>
          <div className={styles.dropdownItem} onClick={() => handleNavigation('/for-educational-institutes')}>
            For Educational Institutes
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDropdown; 