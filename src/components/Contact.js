import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Contact.module.css";
import { contactContent } from "../content";
import Notification from './Notification';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowNotification(true);
    // Here you would handle form submission (e.g., send to API)
  };

  useEffect(() => {
    if (showNotification) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <>
      {showNotification && (
        <Notification
          message="Thank you! We will contact you soon."
          onClose={() => setShowNotification(false)}
          duration={3000}
        />
      )}
      <section className={styles.contact} id="contact">
        <div className={styles.contactContainer}>
          <div className={styles.info}>
            <h2>{contactContent.title}</h2>
            <p>{contactContent.description}</p>
            <ul>
              <li><strong>Address:</strong> {contactContent.address}</li>
              <li><strong>Email:</strong> <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a></li>
              <li><strong>Phone:</strong> <a href={`tel:${contactContent.phone}`}>{contactContent.phone}</a></li>
            </ul>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />
            <button type="submit" disabled={submitted}>
              {submitted ? "Thank you!" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact; 