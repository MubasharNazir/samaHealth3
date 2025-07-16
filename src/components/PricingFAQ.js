import React, { useState } from "react";
import styles from "../styles/PricingFAQ.module.css";

const faqs = [
  {
    q: "What is therapy and how does it work?",
    a: "Therapy is a process where an individual meets with a trained professional to discuss and work through personal issues. The therapist helps the individual to identify patterns of thoughts and behaviors that may be contributing to their problems and provides guidance and support in developing healthier coping mechanisms."
  },
  {
    q: "What can I expect during my first therapy session?",
    a: "During your first session, you get to introduce yourself to the therapist and together you can decide on the best course of action based their expertise and your context. The therapist will likely ask you about your current concerns and your personal and medical history. The therapist will also explain their approach to therapy and answer any questions you may have."
  },
  {
    q: "How often will I need to attend therapy?",
    a: "The frequency of therapy sessions can vary depending on the individual's needs and goals. Some people may attend weekly sessions, while others may only attend sessions on a monthly basis. It is important to discuss this with your therapist."
  },
  {
    q: "Is therapy confidential?",
    a: "Yes, therapy is confidential, and the therapist is required to keep all information discussed during sessions private, unless the client is at risk of harm to themselves or others."
  },
  {
    q: "How long does therapy take?",
    a: "The length of therapy can vary depending on your goals and needs. Every person is different. Some people may see improvement in a few sessions, while others may need to attend therapy for several months or years."
  },
  {
    q: "Is online therapy as effective as in-person therapy?",
    a: "Online therapy has been shown to be just as effective as in-person therapy in many cases. It can be a convenient and accessible option for individuals who may have difficulty attending in-person sessions."
  },
  
];

const PricingFAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = idx => setOpen(open === idx ? null : idx);

  return (
    <section className={styles.section} id="faqs">
      {/* <div className={styles.pricingHeader}>
        <h2 className={styles.title}>Pricing</h2>
        <p className={styles.subtitle}>
          Our therapists are available across different pricing tiers<br />
          based on their experience, with sessions starting at ₹2,500.
        </p>
      </div> */}
      <div className={styles.faqHeader}>Frequently Asked Questions</div>
      <div className={styles.faqList}>
        {faqs.map((faq, idx) => (
          <div className={styles.faqItem} key={idx}>
            <button className={styles.faqQ} onClick={() => toggle(idx)}>
              {faq.q}
              <span className={styles.arrow}>{open === idx ? "–" : "+"}</span>
            </button>
            {open === idx && <div className={styles.faqA}>{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingFAQ; 