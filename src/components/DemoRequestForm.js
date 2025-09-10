import React, { useState } from 'react';
import styles from '../styles/DemoRequestForm.module.css';
import emailjs from 'emailjs-com';

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
  { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Yemen', code: '+967', flag: '🇾🇪' },
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

// Google Forms configuration - will be updated once you add the new fields
const GOOGLE_FORM_CONFIG = {
  url: process.env.REACT_APP_GOOGLE_FORM_URL || 'https://docs.google.com/forms/d/e/1FAIpQLScOlgM_pPlHgZIVUeAYsVhIwnSzKrkdzEUok-l9Uv29isnuhA/formResponse',
  fields: {
    // Using environment variables with fallback values
    firstName: process.env.REACT_APP_GOOGLE_FORM_NAME || 'entry.1692151611',
    lastName: process.env.REACT_APP_GOOGLE_FORM_LASTNAME || 'entry.1296165951',
    email: process.env.REACT_APP_GOOGLE_FORM_EMAIL || 'entry.489425825',
    mobile: process.env.REACT_APP_GOOGLE_FORM_PHONE || 'entry.1292311228',
    message: process.env.REACT_APP_GOOGLE_FORM_MESSAGE || 'entry.2062770081',
    company: process.env.REACT_APP_GOOGLE_FORM_COMPANY || 'entry.342428412',
    employees: process.env.REACT_APP_GOOGLE_FORM_EMPLOYEES || 'entry.1696141046',
    industry: process.env.REACT_APP_GOOGLE_FORM_INDUSTRY || 'entry.1536244354',
    location: process.env.REACT_APP_GOOGLE_FORM_LOCATION || 'entry.468684175',
    newsletter: process.env.REACT_APP_GOOGLE_FORM_NEWSLETTER || 'entry.225066364'
  }
};

export default function DemoRequestForm({ onSubmitSuccess, onSubmitError, formRef }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

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

  const submitToGoogleForm = async (formData) => {
    try {
      // Debug: Log the form data being submitted
      console.log('Demo Form data being submitted:', formData);
      
      const formBody = new FormData();
      // Submit all form data to corresponding Google Form fields
      formBody.append(GOOGLE_FORM_CONFIG.fields.firstName, formData.firstName);
      formBody.append(GOOGLE_FORM_CONFIG.fields.lastName, formData.lastName);
      formBody.append(GOOGLE_FORM_CONFIG.fields.email, formData.email);
      formBody.append(GOOGLE_FORM_CONFIG.fields.mobile, formData.mobile);
      formBody.append(GOOGLE_FORM_CONFIG.fields.message, formData.message);
      formBody.append(GOOGLE_FORM_CONFIG.fields.company, formData.company);
      formBody.append(GOOGLE_FORM_CONFIG.fields.employees, formData.employees);
      formBody.append(GOOGLE_FORM_CONFIG.fields.industry, formData.industry);
      formBody.append(GOOGLE_FORM_CONFIG.fields.location, formData.location);
      formBody.append(GOOGLE_FORM_CONFIG.fields.newsletter, 'No'); // Demo form doesn't have newsletter signup

      // Debug: Log what's being sent to Google Forms
      console.log('Submitting Demo Form to Google Forms with fields:', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
        company: formData.company,
        employees: formData.employees,
        industry: formData.industry,
        location: formData.location,
        newsletter: 'No'
      });

      await fetch(GOOGLE_FORM_CONFIG.url, {
        method: 'POST',
        mode: 'no-cors', // Important: Google Forms requires no-cors
        body: formBody
      });
      return true;
    } catch (error) {
      console.error('Google Form submission error:', error);
      return false;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    
    // Check if environment variables are configured
    if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || 
        !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 
        !process.env.REACT_APP_EMAILJS_USER_ID) {
      setErrors({ submit: 'Email service not configured. Please contact support.' });
      setSubmitting(false);
      return;
    } 
    
    setSubmitting(true);
    
    try {
      // Submit to both EmailJS and Google Forms simultaneously
      const [emailResult, googleFormResult] = await Promise.allSettled([
        emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            message: `New Demo Request\n\n| Field     | Value                  |\n|-----------|------------------------|\n| Name      | ${form.firstName} ${form.lastName} |\n| Email     | ${form.email}          |\n| Mobile    | ${form.mobile}         |\n| Company   | ${form.company}        |\n| Employees | ${form.employees}      |\n| Industry  | ${form.industry}       |\n| Location  | ${form.location}       |\n| Message   | ${form.message}        |\n\nRegards,\nSama Health Website`,
            to_email: process.env.REACT_APP_EMAILJS_TO_EMAIL || 'engr.mubasharnazir@gmail.com',
          },
          process.env.REACT_APP_EMAILJS_USER_ID
        ),
        submitToGoogleForm(form)
      ]);

      // Check if at least one submission succeeded
      const emailSuccess = emailResult.status === 'fulfilled';
      const googleFormSuccess = googleFormResult.status === 'fulfilled' && googleFormResult.value;

      if (emailSuccess || googleFormSuccess) {
        // Success if either submission worked
        setForm(initialState);
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }

        // Log any partial failures for debugging
        if (!emailSuccess) {
          console.warn('Demo Form email submission failed:', emailResult.reason);
        }
        if (!googleFormSuccess) {
          console.warn('Demo Form Google Form submission failed');
        }
      } else {
        throw new Error('Both email and Google Form submissions failed');
      }
    } catch (err) {
      const submitError = 'Failed to send. Please try again.';
      setErrors({ submit: submitError });
      if (onSubmitError) {
        onSubmitError(submitError);
      }
    }
    
    setSubmitting(false);
  };

  return (
    <div ref={formRef} className={styles.formCard}>
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
                {countryCodes.map((c, index) => (
                  <option key={`${c.code}-${index}`} value={c.code}>{c.flag} {c.code}</option>
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
        <button type="submit" className={styles.submitBtnNew} disabled={submitting}>
          {submitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
