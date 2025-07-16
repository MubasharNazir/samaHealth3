import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../styles/ConnectTherapist.module.css";

const steps = [
  {
    title: "1. Register",
    desc: "Download the app and complete your free registration"
  },
  {
    title: "2. Choose a therapist",
    desc: "Take a free 30 minute call with any of Sama Health's therapists to assess if they are the right fit for you."
  },
  {
    title: "3. Start your journey",
    desc: "Pick a therapist and session time that works for your schedule & get started with online therapy."
  }
];

const ConnectTherapist = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h2 className={styles.heading}>How to get started</h2>
        <div className={styles.stepsRow}>
          {steps.map((step, i) => (
            <div className={styles.step} key={i}>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDesc}>{step.desc}</div>
            </div>
          ))}
        </div>
        <button className={styles.ctaBtn} onClick={() => navigate('/book-call')}>Book a free call with Sama Health</button>
      </div>
    </section>
  );
};

export default ConnectTherapist; 