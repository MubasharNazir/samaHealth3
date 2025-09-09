import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/ContactForm.module.css';
import Footer from './Footer';
import Sidebar from './Sidebar';
import stylesApp from "../styles/App.module.css";
import Notification from './Notification';
import FeaturedInSection from './FeaturedInSection';
import ContactDropdown from './ContactDropdown';
import NavigationBar from './NavigationBar';
import DemoRequestForm from './DemoRequestForm';

const logos = [
  { src: "/assets/aljazera.svg", alt: "Aljazeera" },
  { src: "/assets/arabia.png", alt: "Arabia" },
  { src: "/assets/khaleej-times-logo.svg", alt: "Khaleej Times" },
  { src: "/assets/edge.webp", alt: "Edge" },
  { src: "/assets/gulf-news-logo.png", alt: "Gulf News" }
];

function getActiveTab(location) {
  if (location.pathname === '/book-call') return 'contact';
  // Simplified since this form is a dedicated page
  return '';
}

export default function ContactForm() {
  const [showNotification, setShowNotification] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = getActiveTab(location);
  const formRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleFormSubmitSuccess = () => {
    setShowNotification(true);
  };

  const handleFormSubmitError = (error) => {
    // Handle error if needed
    console.error('Form submission error:', error);
  };

  const handleAnchorClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      navigate(href);
  };

  return (
    <div className={stylesApp.app}>
      {showNotification && (
        <Notification
          message="Thank you! We will contact you soon."
          onClose={() => setShowNotification(false)}
          duration={3000}
        />
      )}
      <NavigationBar>
        <li>
          <Link
            to="/"
            className={`${stylesApp.tabLink} ${activeTab === 'home' ? stylesApp.activeTab : ''}`}
          >
            Home
          </Link>
        </li>
        <li><a href="/#testimonials" onClick={handleAnchorClick} className={`${stylesApp.tabLink} ${activeTab === 'testimonials' ? stylesApp.activeTab : ''}`}>Testimonials</a></li>
        <li><a href="/#faqs" onClick={handleAnchorClick} className={`${stylesApp.tabLink} ${activeTab === 'faqs' ? stylesApp.activeTab : ''}`}>Faqs</a></li>
        <li>
          <Link
            to="/podcasts"
            className={`${stylesApp.tabLink} ${activeTab === 'podcasts' ? stylesApp.activeTab : ''}`}
          >
            Podcasts
          </Link>
        </li>
      </NavigationBar>
      <div className={styles.container}>
        <section className={styles.heroSectionContact}>
          <div className={styles.heroContentContact}>
            <div className={styles.heroLeftContact}>
              <h1 className={styles.heroHeadingContact}>Build a workplace where you can make a difference.</h1>
              <button
                className={styles.heroBtnContact}
                onClick={() => {
                  if (formRef.current) {
                    formRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request a demo
              </button>
            </div>
            <div className={styles.heroRightContact}>
              <img src="/assets/4921280 1.png" alt="Workplace Illustration" className={styles.heroImgContact} />
            </div>
          </div>
        </section>
      </div>
      <FeaturedInSection  heading={"We have been featured in"} logos={logos}/>
      <div className={styles.container}>
        <DemoRequestForm 
          formRef={formRef}
          onSubmitSuccess={handleFormSubmitSuccess}
          onSubmitError={handleFormSubmitError}
        />
      </div>
      <Footer />
    </div>
  );
} 