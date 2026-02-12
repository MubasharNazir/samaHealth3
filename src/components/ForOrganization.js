import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/ForOrganization.module.css';
import stylesApp from '../styles/App.module.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import DemoRequestForm from './mainDemoReqForm';
import FeaturedInSection from './FeaturedInSection';
import Notification from './Notification';

function getActiveTab(location) {
  if (location.pathname === '/for-organization') return 'organization';
  return '';
}

const ForOrganization = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = getActiveTab(location);
  const formRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleAnchorClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    navigate(href);
  };

  const handleFormSubmitSuccess = () => {
    setShowNotification(true);
  };

  const handleFormSubmitError = (error) => {
    console.error('Form submission error:', error);
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const testimonials = [
    {
      quote: "Attending the art therapy workshop with Sama Health was a truly restorative experience. The gentle guidance, combined with soothing music and a supportive space to create and share, allowed me to access a sense of calm and self-awareness I hadn't felt in a long time. Honestly, it was more than an art therapy workshop; it was a meaningful step toward personal well-being.",
      author: "Workshop Participant"
    },
    {
      quote: "The Art therapy workshop hosted by Sama Health was deeply meaningful. Exploring emotions through art in a safe and supportive space enabled powerful self-expression and healthier emotional regulation. It was a therapeutic experience we would happily repeat.",
      author: "Workshop Participant"
    },
    {
      quote: "I was initially hesitant about joining an art therapy session, but Sama Health's approach completely changed my perspective. The facilitators created such a welcoming environment where I felt comfortable expressing myself creatively. Through painting and drawing, I discovered new ways to process my emotions and found a sense of peace I'd been searching for. This workshop was transformative.",
      author: "Workshop Participant"
    },
    {
      quote: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
      author: "Shaihd Khan"
    },
    {
      quote: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
      author: "Shaihd Khan"
    },
    {
      quote: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
      author: "Shaihd Khan"
    },
    {
      quote: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
      author: "Shaihd Khan"
    }
  ];

  const companyLogos = [
    { src: "/assets/aljazera.svg", alt: "Aljazeera" },
    { src: "/assets/arabia.png", alt: "Arabia" },
    { src: "/assets/khaleej-times-logo.svg", alt: "Khaleej Times" },
    { src: "/assets/edge.webp", alt: "Edge" },
    { src: "/assets/gulf-news-logo.png", alt: "Gulf News" }
  ];

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  // Get testimonials to display based on screen size
  const getVisibleTestimonials = () => {
    if (window.innerWidth <= 768) {
      // Mobile: show 1
      return [testimonials[currentTestimonial]];
    } else if (window.innerWidth <= 1024) {
      // Tablet: show 2
      const start = currentTestimonial;
      return [
        testimonials[start % testimonials.length],
        testimonials[(start + 1) % testimonials.length]
      ];
    } else {
      // Desktop: show 3
      const start = currentTestimonial;
      const visible = [];
      for (let i = 0; i < 3; i++) {
        visible.push(testimonials[(start + i) % testimonials.length]);
      }
      return visible;
    }
  };

  // Calculate which dot should be active based on current testimonial
  const getActiveDotIndex = () => {
    return currentTestimonial;
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

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroHeading}>
              Mental health support employees trust and organisations can stand behind
            </h1>
            <p className={styles.heroDescription}>
              Sama Health provides confidential access to licensed therapists through a culturally responsive approach that improves how employees engage with mental health support. Designed for organisations with diverse workforces seeking equitable, trusted care.
            </p>
            <button
              className={styles.talkToUsBtn}
              onClick={() => {
                if (formRef.current) {
                  formRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Talk to us
            </button>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroImageWrapper}>
              <img 
                src="/assets/Group 367.svg" 
                alt="Team collaboration" 
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section - Using FeaturedInSection with scrollable animation */}
      <FeaturedInSection 
        heading="" 
        logos={companyLogos}
        className={styles.featuredSectionReducedPadding}
      />

      {/* Engagement Text Box */}
      <section className={styles.engagementSection}>
        <div className={styles.engagementBox}>
          <div className={styles.engagementContainer}>
            <h2 className={styles.engagementHeading}>
              When support exists, but engagement is uneven
            </h2>
            <p className={styles.engagementText}>
              Many organisations invest in mental health benefits.
            </p>
            <p className={styles.engagementText}>
              Yet utilisation often varies widely across employee groups.
            </p>
            <p className={styles.engagementText}>
              Concerns around trust, confidentiality, access, and cultural fit continue to influence whether employees seek support, even when options are available.
            </p>
          </div>
        </div>
      </section>

      {/* How Sama Health Works Section */}
      <section className={styles.howItWorksSection}>
        <div className={styles.howItWorksContainer}>
          <div className={styles.howItWorksHeader}>
            <h2 className={styles.howItWorksHeading}>How Sama Health works</h2>
            <p className={styles.howItWorksDescription}>
              Sama Health connects employees to licensed clinical and counselling psychologists through a secure, self-initiated platform.
            </p>
          </div>

          <div className={styles.howItWorksContent}>
            <div className={styles.careSection}>
              <div className={styles.careText}>
                <h3 className={styles.careHeading}>Care is:</h3>
                <ul className={styles.careList}>
                  <li>confidential and employee-led</li>
                  <li>accessed without manager involvement</li>
                  <li>delivered virtually</li>
                  <li>designed to work alongside existing EAPs, insurance coverage, and internal wellbeing initiatives</li>
                </ul>
              </div>
              <div className={styles.careImage}>
                <img src="/assets/Frame 1000006874.svg" alt="Team collaboration" className={styles.careImg} />
              </div>
            </div>

            <div className={styles.inclusiveSection}>
              <div className={styles.inclusiveImage}>
                <img src="/assets/Frame 1000006874 (1).svg" alt="Team discussion" className={styles.inclusiveImg} />
              </div>
              <div className={styles.inclusiveContent}>
                <h3 className={styles.inclusiveHeading}>Inclusive by design</h3>
                <p className={styles.inclusiveText}>
                  Sama Health is open to the full workforce. Our clinical network and matching approach are designed to better support groups that historically underutilise workplace mental health benefits, through culturally responsive care, without segmenting or excluding any employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGraphic}>
          <img src="/assets/Frame 10.png" alt="Sama Health graphic" className={styles.ctaImage} />
        </div>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaTextWrapper}>
            <p className={styles.ctaText}>
              Explore whether Sama Health is right for your organisation
            </p>
          </div>
          <button
            className={styles.ctaButton}
            onClick={() => {
              if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Talk to us
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <h2 className={styles.testimonialsHeading}>What our clients say about us.</h2>
          <div className={styles.testimonialsGrid}>
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>
                  <img src="/assets/Vector.svg" alt="Quote icon" />
                </div>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}></div>
                  <div className={styles.authorName}>{testimonial.author}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.testimonialsPagination}>
            {testimonials.map((_, index) => (
              <span 
                key={index}
                className={`${styles.paginationDot} ${getActiveDotIndex() === index ? styles.active : ''}`}
                onClick={() => handleDotClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleDotClick(index);
                  }
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutItem}>
            <h3 className={styles.aboutHeading}>Inclusive by design</h3>
            <p className={styles.aboutText}>
              Sama Health is open to the full workforce. Our clinical network and matching approach are designed to better support groups that historically underutilise workplace mental health benefits, through culturally responsive care, without segmenting or excluding any employees.
            </p>
          </div>
          <div className={styles.aboutItem}>
            <h3 className={styles.aboutHeading}>Built for modern workplaces</h3>
            <p className={styles.aboutText}>
              Sama Health is founded by a workplace wellbeing leader with deep experience across HR, employee engagement, and mental health advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div 
        className={styles.formContainer}
        style={{
          backgroundImage: 'url(/assets/background.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <DemoRequestForm 
          formRef={formRef}
          onSubmitSuccess={handleFormSubmitSuccess}
          onSubmitError={handleFormSubmitError}
          variant="organization"
        />
      </div>

      <Footer />
    </div>
  );
};

export default ForOrganization;