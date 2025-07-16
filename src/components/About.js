import React from "react";
import styles from "../styles/About.module.css";
import { aboutContent } from "../content";

const About = () => (
  <section className={styles.about} id="about">
    <div className={styles.aboutContainer}>
      <div className={styles.aboutImage}>
        <img src={aboutContent.image} alt="About Sama Health" />
      </div>
      <div className={styles.aboutText}>
        <h2>{aboutContent.title}</h2>
        <p>{aboutContent.text}</p>
      </div>
    </div>
  </section>
);

export default About; 