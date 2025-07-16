import React from "react";
import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    quote:
      "“Being in Dubai, I never thought I’d find a therapist who spoke my language—literally and emotionally. This has been more healing than I expected.”",
    author: ""
  },
  {
    quote:
      "“I booked my first session in between meetings. That’s how easy it was. And it actually helped me get through the week.”",
    author: ""
  },
  {
    quote:
      "“I live in Dubai and thought therapy would be expensive or confusing. But this was easy. And honestly, it felt safe.”",
    author: ""
  },
  {
    quote:
      "“I am someone who finds it very hard to describe how I am feeling. I always thought therapy wont work for me because of this reason. My Sama Health therapist made me draw with my left hand, to help me connect with my emotions and express what I was feeling.”",
    author: ""
  },
  {
    quote:
      "“I had reached the point where stress was starting to impact every aspect of my life. After sessions with my therapist, I usually feel calm and relaxed.”",
    author: ""
  },
  {
    quote:
      "“Sama Health's therapists are so empathetic and skilled. I feel heard and understood in every session. Therapy has become a safe space for me to grow and heal.”",
    author: ""
  }
];

const Testimonials = () => (
  <section className={styles.section} id="testimonials">
    <h2 className={styles.heading}>What clients say about Sama Health</h2>
    <div className={styles.grid}>
      {testimonials.map((t, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.quote}>{t.quote}</div>
          <div className={styles.author}>{t.author}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 