import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/ContactForm.module.css';
import emailjs from 'emailjs-com';
import Footer from './Footer';
import Sidebar from './Sidebar';
import stylesApp from "../styles/App.module.css";
import Notification from './Notification';
import FeaturedInSection from './FeaturedInSection';
import ContactDropdown from './ContactDropdown';
import NavigationBar from './NavigationBar';

// Country code list (country name, code, flag)
const countryCodes = [
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
  { name: 'Albania', code: '+355', flag: '🇦🇱' },
  { name: 'Algeria', code: '+213', flag: '🇩🇿' },
  { name: 'Andorra', code: '+376', flag: '🇦🇩' },
  { name: 'Angola', code: '+244', flag: '🇦🇴' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Armenia', code: '+374', flag: '🇦🇲' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Azerbaijan', code: '+994', flag: '🇦🇿' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'Belarus', code: '+375', flag: '🇧🇾' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Bhutan', code: '+975', flag: '🇧🇹' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Bulgaria', code: '+359', flag: '🇧🇬' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'Greece', code: '+30', flag: '🇬🇷' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Iran', code: '+98', flag: '🇮🇷' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'Jordan', code: '+962', flag: '🇯🇴' },
  { name: 'Kazakhstan', code: '+7', flag: '🇰🇿' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Maldives', code: '+960', flag: '🇲🇻' },
  { name: 'Morocco', code: '+212', flag: '🇲🇦' },
  { name: 'Nepal', code: '+977', flag: '🇳🇵' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Romania', code: '+40', flag: '🇷🇴' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Syria', code: '+963', flag: '🇸🇾' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Yemen', code: '+967', flag: '🇾🇪' },
  // ... (add more as needed)
];
const logos = [
  { src: "/img/curtUni.png", alt: "Curtin University" },
  { src: "/img/images.png", alt: "Westford University" },
];  
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  countryCode: countryCodes[0].code,
  phoneNumber: '',
  company: '',
  employees: '',
  industry: '',
  location: '',
  message: '',
};

function getActiveTab(location) {
  if (location.pathname === '/book-call') return 'contact';
  // Simplified since this form is a dedicated page
  return '';
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
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

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'Required';
    if (!form.lastName.trim()) errs.lastName = 'Required';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid email required';
    if (!form.phoneNumber.trim() || !/^\d{7,}$/.test(form.phoneNumber.replace(/\s+/g, ''))) errs.phoneNumber = 'Enter a valid phone number';
    if (!form.countryCode) errs.countryCode = 'Select country code';
    if (!form.company.trim()) errs.company = 'Required';
    if (!form.employees.trim() || isNaN(form.employees)) errs.employees = 'Required';
    if (!form.industry.trim()) errs.industry = 'Required';
    if (!form.location.trim()) errs.location = 'Required';
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => {
      if (name === 'countryCode' || name === 'phoneNumber') {
        const newForm = { ...prev, [name]: value };
        newForm.mobile = `${newForm.countryCode}${newForm.phoneNumber}`;
        return newForm;
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitting(true);
    const message = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f6f8;
          margin: 0;
          padding: 0;
        }
        .email-container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 20px;
        }
        .email-header {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        td {
          padding: 10px;
          border: 1px solid #ddd;
          vertical-align: top;
        }
        td.label {
          background: #f9fafb;
          font-weight: bold;
          width: 30%;
        }
        .footer {
          margin-top: 20px;
          font-size: 13px;
          color: #555;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          📩 New Request
        </div>
        <table>
          <tr>
            <td class="label">Name</td>
            <td>${form.firstName} ${form.lastName}</td>
          </tr>
          <tr>
            <td class="label">Email</td>
            <td>${form.email}</td>
          </tr>
          <tr>
            <td class="label">Mobile</td>
            <td>${form.mobile}</td>
          </tr>
          <tr>
            <td class="label">Company</td>
            <td>${form.company}</td>
          </tr>
          <tr>
            <td class="label">Employees</td>
            <td>${form.employees}</td>
          </tr>
          <tr>
            <td class="label">Industry</td>
            <td>${form.industry}</td>
          </tr>
          <tr>
            <td class="label">Location</td>
            <td>${form.location}</td>
          </tr>
          <tr>
            <td class="label">Message</td>
            <td>${form.message}</td>
          </tr>
        </table>
        <div class="footer">
          Regards,<br>
          <b>Sama Health Website</b>
        </div>
      </div>
    </body>
    </html>
    `;
    try {
      await emailjs.send(
        'service_9fl3k3h',
        'template_r9o3l6m',
        {
          message: message,
          to_email: process.env.REACT_APP_EMAILJS_TO_EMAIL || 'animeking4434@gmail.com',
        },
        'YqyF5KFi6-yKQp7Hn'
      );
      setShowNotification(true);
      setForm(initialState);
    } catch (err) {
      setErrors({ submit: 'Failed to send. Please try again.' });
    }
    setSubmitting(false);
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
              <h1 className={styles.heroHeadingContact}>Next-Gen Wellness for Students and Educators</h1>
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
            <div className={styles.heroRightContact} style={{ flex: 1.7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/img/student.jpg" alt="Students" className={styles.heroImgContact} style={{ maxWidth: '100%', minWidth: '350px', height: 'auto' }} />
            </div>
          </div>
        </section>
      </div>
      <FeaturedInSection heading={"It’s Our Pride To Empower Students"} logos={logos}/>
      <div className={styles.container}>
        <div ref={formRef} className={styles.formCard}>
          <>
            <h2 className={styles.formHeading}>Request demo</h2>
            <div className={styles.formDescription}>
              We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
            </div>
            <form className={styles.formNew} onSubmit={handleSubmit} autoComplete="off">
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="firstName">First Name *</label>
                  <input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} autoComplete="given-name" />
                  {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
                </div>
                <div className={styles.formField}>
                  <label htmlFor="lastName">Last Name *</label>
                  <input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} autoComplete="family-name" />
                  {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="phoneNumber">Mobile *</label>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: 0, alignItems: 'center', width: '100%' }}>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      style={{
                        minWidth: '90px',
                        fontSize: '1rem',
                        borderRadius: '0.5rem 0 0 0.5rem',
                        border: '1px solid #e2e8f0',
                        borderRight: 'none',
                        padding: '0.5rem',
                        height: '42px',
                        background: '#fff',
                      }}
                    >
                      {countryCodes.map(c => (
                        <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                      ))}
                    </select>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      autoComplete="tel"
                      placeholder=""
                      style={{
                        width: '120px',
                        minWidth: 0,
                        flex: '1 1 120px',
                        borderRadius: '0 0.5rem 0.5rem 0',
                        border: '1px solid #e2e8f0',
                        borderLeft: 'none',
                        height: '42px',
                        background: '#fff',
                      }}
                      maxLength={10}
                    />
                  </div>
                  {errors.countryCode && <span className={styles.error}>{errors.countryCode}</span>}
                  {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber}</span>}
                </div>
                <div className={styles.formField}>
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="company">Company *</label>
                  <input id="company" name="company" value={form.company} onChange={handleChange} />
                  {errors.company && <span className={styles.error}>{errors.company}</span>}
                </div>
                <div className={styles.formField}>
                  <label htmlFor="employees">Number of Employees *</label>
                  <input id="employees" name="employees" value={form.employees} onChange={handleChange} />
                  {errors.employees && <span className={styles.error}>{errors.employees}</span>}
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="industry">Industry *</label>
                  <input id="industry" name="industry" value={form.industry} onChange={handleChange} />
                  {errors.industry && <span className={styles.error}>{errors.industry}</span>}
                </div>
                <div className={styles.formField}>
                  <label htmlFor="location">Location *</label>
                  <input id="location" name="location" value={form.location} onChange={handleChange} />
                  {errors.location && <span className={styles.error}>{errors.location}</span>}
                </div>
              </div>
              <div className={styles.formFieldFull}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Please enter your message/query here" />
              </div>
              {errors.submit && <span className={styles.error}>{errors.submit}</span>}
              <button type="submit" className={styles.submitBtnNew} disabled={submitting}>{submitting ? 'Sending...' : 'Submit'}</button>
              {/* Removed onClose prop as it's not directly passed to this component */}
            </form>
          </>
        </div>
      </div>
      <Footer />
    </div>
  );
} 