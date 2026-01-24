import React, { useEffect, useState, useRef } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TherapistStats from "./components/TherapistStats";
import BestTherapists from "./components/BestTherapists";
import ConnectTherapist from "./components/ConnectTherapist";
import Testimonials from "./components/Testimonials";
import PricingFAQ from "./components/PricingFAQ";
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Podcast from './components/podcast';
import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import MeetupSection from './components/MeetupSection';
import EducationalInstitute from "./components/educationalInstitute";
import NavigationBar from "./components/NavigationBar";
import FeaturedInSection from "./components/FeaturedInSection";
import DemoRequestForm from "./components/mainDemoReqForm";
import Notification from "./components/Notification";
import ForOrganization from "./components/ForOrganization";

function getActiveTab(location) {
  if (location.pathname === '/') {
    if (location.hash === '#testimonials') return 'testimonials';
    if (location.hash === '#faqs') return 'faqs';
    return 'home';
  }
  if (location.pathname === '/book-call') return 'contact';
  if (location.pathname === '/podcasts') return 'podcasts';
  return '';
}



function MainApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = getActiveTab(location);
  const formRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleAnchorClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.split('#')[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      navigate(href);
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      navigate(href);
    }
  };
  const handleFormSubmitSuccess = () => {
    setShowNotification(true);
  };

  const handleFormSubmitError = (error) => {
    // Handle error if needed
    console.error('Form submission error:', error);
  };

  // Handle notification timeout
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  // Scroll to section on hash change
  useEffect(() => {
    if (location.hash === '#testimonials' || location.hash === '#faqs') {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
    // Scroll to top when navigating to home (no hash)
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  return (
    <div className={styles.app}>
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
            className={`${styles.tabLink} ${activeTab === 'home' ? styles.activeTab : ''}`}
            onClick={e => {
              if (location.pathname === '/' && !location.hash) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Home
          </Link>
        </li>
        <li><a href="/#testimonials" onClick={handleAnchorClick} className={`${styles.tabLink} ${activeTab === 'testimonials' ? styles.activeTab : ''}`}>Testimonials</a></li>
        <li><a href="/#faqs" onClick={handleAnchorClick} className={`${styles.tabLink} ${activeTab === 'faqs' ? styles.activeTab : ''}`}>Faqs</a></li>
        <li>
          <Link
            to="/podcasts"
            className={`${styles.tabLink} ${activeTab === 'podcasts' ? styles.activeTab : ''}`}
          >
            Podcasts
          </Link>
        </li>
      </NavigationBar>
      <div className={styles.mainContent}>
      <Hero />
      <TherapistStats />
      <BestTherapists />
      <ConnectTherapist />
      <div style={{ background: '#fdf8ef', height: '6rem', width: '100%' }} />
      <Testimonials />
      {/* Add the FeaturedInSection here, under Testimonials */}
      <FeaturedInSection heading={"We have been featured in"} logos={[
        { src: "/assets/aljazera.svg", alt: "Aljazeera" },
        { src: "/assets/arabia.png", alt: "Arabia" },
        { src: "/assets/khaleej-times-logo.svg", alt: "Khaleej Times" },
        { src: "/assets/edge.webp", alt: "Edge" },
        { src: "/assets/gulf-news-logo.png", alt: "Gulf News" }
      ]} />
      <div className={styles.container}>
        <DemoRequestForm 
          formRef={formRef}
          onSubmitSuccess={handleFormSubmitSuccess}
          onSubmitError={handleFormSubmitError}
        />
      </div>
      <PricingFAQ />
      <MeetupSection />
      </div>
      <Footer />
    </div>
  );
}

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/book-call" element={<ContactForm />} />
      <Route path="/for-educational-institutes" element={<EducationalInstitute />} />
      <Route path="/for-organization" element={<ForOrganization />} />
      <Route path="/podcasts" element={<Podcast />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  </Router>
);

export default App;
