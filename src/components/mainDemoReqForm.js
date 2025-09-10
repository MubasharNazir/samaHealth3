import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from '../styles/MainDemoRequestForm.module.css';
import emailjs from 'emailjs-com';
import appleLogo from '../assets/apple.png';
import playstoreLogo from '../assets/playstore.png';

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
  name: '',
  email: '',
  mobile: '',
  countryCode: countryCodes[0].code,
  phoneNumber: '',
  message: '',
  subscribeToNewsletter: false,
};

// Google Forms configuration using environment variables
const GOOGLE_FORM_CONFIG = {
  url: process.env.REACT_APP_GOOGLE_FORM_URL || 'https://docs.google.com/forms/d/e/1FAIpQLScOlgM_pPlHgZIVUeAYsVhIwnSzKrkdzEUok-l9Uv29isnuhA/formResponse',
  fields: {
    name: process.env.REACT_APP_GOOGLE_FORM_NAME || 'entry.1692151611',
    email: process.env.REACT_APP_GOOGLE_FORM_EMAIL || 'entry.489425825',
    mobile: process.env.REACT_APP_GOOGLE_FORM_PHONE || 'entry.1292311228',
    message: process.env.REACT_APP_GOOGLE_FORM_MESSAGE || 'entry.2062770081',
    newsletter: process.env.REACT_APP_GOOGLE_FORM_NEWSLETTER || 'entry.225066364'
  }
};

export default function DemoRequestForm({ onSubmitSuccess, onSubmitError, formRef }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid email required';
    if (!form.phoneNumber.trim() || !/^\d{7,}$/.test(form.phoneNumber.replace(/\s+/g, ''))) errs.phoneNumber = 'Enter a valid phone number';
    if (!form.countryCode) errs.countryCode = 'Select country code';
    if (!recaptchaValue) errs.recaptcha = 'Please complete the reCAPTCHA verification';
    return errs;
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => {
      if (name === 'countryCode' || name === 'phoneNumber') {
        const newForm = { ...prev, [name]: value };
        newForm.mobile = `${newForm.countryCode}${newForm.phoneNumber}`;
        return newForm;
      }
      // Handle checkbox inputs
      if (type === 'checkbox') {
        return { ...prev, [name]: checked };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    // Clear recaptcha error when user completes it
    if (value && errors.recaptcha) {
      setErrors(prev => ({ ...prev, recaptcha: null }));
    }
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaValue(null);
  };

  const submitToGoogleForm = async (formData) => {
    try {
      const formBody = new FormData();
      formBody.append(GOOGLE_FORM_CONFIG.fields.name, formData.name);
      formBody.append(GOOGLE_FORM_CONFIG.fields.email, formData.email);
      formBody.append(GOOGLE_FORM_CONFIG.fields.mobile, formData.mobile);
      formBody.append(GOOGLE_FORM_CONFIG.fields.message, formData.message);
      formBody.append(GOOGLE_FORM_CONFIG.fields.newsletter, formData.subscribeToNewsletter ? 'Yes' : 'No');

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
            message: `New Demo Request\n\n| Field              | Value                  |\n|--------------------|------------------------|\n| Name               | ${form.name}           |\n| Email              | ${form.email}          |\n| Mobile             | ${form.mobile}         |\n| Message            | ${form.message}        |\n| Newsletter Signup  | ${form.subscribeToNewsletter ? 'Yes' : 'No'} |\n\nRegards,\nSama Health Website`,
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
        setRecaptchaValue(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }

        // Log any partial failures for debugging
        if (!emailSuccess) {
          console.warn('Email submission failed:', emailResult.reason);
        }
        if (!googleFormSuccess) {
          console.warn('Google Form submission failed');
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
    <section ref={formRef} className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.colLg6} ${styles.colMd6} ${styles.colSm12} ${styles.col12} ${styles.aSide}`}>
            
            <div className={styles.formHeading}>Life is hard sometimes. Insta-therapy can only help so much. Let's talk about it.</div>
            <p>Access qualified therapists that you can deeply connect with. We offer a curated offering for the South Asian community.</p>
            <div className={styles.formSubHeading}>Download the app to feel better</div>
            <div className={`${styles.contentStartAligned} ${styles.gap2}`}>
              <a 
                href="https://apps.apple.com/ae/app/sama-health/id6447992708" 
                target="_blank" 
                rel="noreferrer"
              >
                <img 
                  src={appleLogo} 
                  className={`${styles.imgFluid} ${styles.playstoreIcon} ${styles.cursorPointer}`} 
                  alt="apple_app_store" 
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.sama.health_life&pcampaignid=web_share" 
                target="_blank" 
                rel="noreferrer"
              >
                <img 
                  src={playstoreLogo} 
                  className={`${styles.imgFluid} ${styles.playstoreIcon} ${styles.cursorPointer}`} 
                  alt="google_play_store" 
                />
              </a>
            </div>
          </div>
          <div className={`${styles.colLg6} ${styles.colMd6} ${styles.colSm12} ${styles.col12}`}>
            <div className={`${styles.card} ${styles.contactUsSection}`}>
              <div className={styles.cardBody}>
                <h2 className={`${styles.formHeading}`}>Start your wellness journey</h2>
                <form 
                  autoComplete="off" 
                  className={`${styles.antForm} ${styles.antFormVertical}`} 
                  onSubmit={handleSubmit}
                >
                  <div className={styles.antFormItem}>
                    <div className={`${styles.antRow} ${styles.antFormItemRow}`}>
                      <div className={`${styles.antCol} ${styles.antFormItemControl}`}>
                        <div className={styles.antFormItemControlInput}>
                          <div className={styles.antFormItemControlInputContent}>
                            <input 
                              placeholder="Enter Name" 
                              id="name" 
                              aria-required="true" 
                              className={styles.antInput} 
                              type="text" 
                              name="name"
                              value={form.name} 
                              onChange={handleChange}
                            />
                            {errors.name && <span className={styles.error}>{errors.name}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.antFormItem}>
                    <div className={`${styles.antRow} ${styles.antFormItemRow}`}>
                      <div className={`${styles.antCol} ${styles.antFormItemControl}`}>
                        <div className={styles.antFormItemControlInput}>
                          <div className={styles.antFormItemControlInputContent}>
                            <input 
                              type="email" 
                              placeholder="Enter Email" 
                              id="email" 
                              aria-required="true" 
                              className={styles.antInput}
                              name="email" 
                              value={form.email}
                              onChange={handleChange}
                            />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.antFormItem}>
                    <div className={`${styles.antRow} ${styles.antFormItemRow}`}>
                      <div className={`${styles.antCol} ${styles.antFormItemControl}`}>
                        <div className={styles.antFormItemControlInput}>
                          <div className={styles.antFormItemControlInputContent}>
                            <div className={styles.reactTelInput}>
                              <div className={styles.specialLabel}>Phone</div>
                              <div className={styles.flagDropdown}>
                                <select
                                  name="countryCode"
                                  value={form.countryCode}
                                  onChange={handleChange}
                                  className={styles.flagSelect}
                                  title={`${countryCodes.find(c => c.code === form.countryCode)?.name}: ${form.countryCode}`}
                                >
                                  {countryCodes.map((c, index) => (
                                    <option key={`${c.code}-${index}`} value={c.code}>
                                      {c.flag} {c.code}
                                    </option>
                                  ))}
                                </select>
                                <div className={`${styles.flag} ${styles.th}`}>
                                  <div className={styles.arrow}></div>
                                </div>
                              </div>
                              <input 
                                className={styles.formControl} 
                                placeholder="Enter Phone" 
                                type="tel" 
                                name="phoneNumber" 
                                required 
                                value={form.phoneNumber}
                                onChange={handleChange}
                              />
                            </div>
                            {errors.countryCode && <span className={styles.error}>{errors.countryCode}</span>}
                            {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.antFormItem}>
                    <div className={`${styles.antRow} ${styles.antFormItemRow}`}>
                      <div className={`${styles.antCol} ${styles.antFormItemControl}`}>
                        <div className={styles.antFormItemControlInput}>
                          <div className={styles.antFormItemControlInputContent}>
                            <div className={`${styles.antInputTextarea} ${styles.antInputTextareaShowCount} ${styles.antInputTextareaInFormItem}`} data-count="0 / 1000">
                              <textarea 
                                placeholder="Enter Message" 
                                rows="3" 
                                id="message" 
                                aria-required="true" 
                                className={styles.antInput}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.antFormItem}>
                    <div className={`${styles.antRow} ${styles.antFormItemRow}`}>
                      <div className={`${styles.antCol} ${styles.antFormItemControl}`}>
                        <div className={styles.antFormItemControlInput}>
                          <div className={styles.antFormItemControlInputContent}>
                            <label className={styles.checkboxLabel}>
                              <input 
                                type="checkbox" 
                                name="subscribeToNewsletter"
                                checked={form.subscribeToNewsletter}
                                onChange={handleChange}
                                className={styles.checkboxInput}
                              />
                              <span className={styles.checkboxText}>
                                Subscribe to our newsletter
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.mb3}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || "6LdNccMrAAAAAAULnkSnq4QfyceXv0NZRyiJAM-o"}
                      onChange={handleRecaptchaChange}
                      onExpired={handleRecaptchaExpired}
                      theme="light"
                      size="normal"
                    />
                    {errors.recaptcha && <span className={styles.error}>{errors.recaptcha}</span>}
                  </div>
                  
                  {errors.submit && <span className={styles.error}>{errors.submit}</span>}
                  
                  <button 
                    type="submit" 
                    className={`${styles.antBtn} ${styles.antBtnDefault}`}
                    disabled={submitting}
                  >
                    <span>{submitting ? 'Sending...' : 'Get Started'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
