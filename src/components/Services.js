import React from "react";
import styles from "../styles/Services.module.css";
import { servicesContent } from "../content";

const Services = () => (
  <section className={styles.services} id="services">
    <h2 className={styles.title}>Our Services</h2>
    <div className={styles.grid}>
      {servicesContent.map((service, idx) => (
        <div className={styles.card} key={idx}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services; 