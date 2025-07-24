import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
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
import Sidebar from './components/Sidebar';
import MeetupSection from './components/MeetupSection';
import EducationalInstitute from "./components/educationalInstitute";
import ContactDropdown from "./components/ContactDropdown";
import NavigationBar from "./components/NavigationBar";
import FeaturedInSection from "./components/FeaturedInSection";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <FeaturedInSection heading={"We’ve Been Seen On"} logos={[
        { src: "/assets/aljazera.svg", alt: "Aljazeera" },
        { src: "/assets/arabia.png", alt: "Arabia" },
        { src: "/assets/khaleej-times-logo.svg", alt: "Khaleej Times" },
        { src: "/assets/edge.webp", alt: "Edge" },
        { src: "/assets/gulf-news-logo.png", alt: "Gulf News" }
      ]} />
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
      <Route path="/podcasts" element={<Podcast />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  </Router>
);

export default App;
