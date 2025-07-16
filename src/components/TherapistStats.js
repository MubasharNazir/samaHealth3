import React from "react";
import styles from "../styles/TherapistStats.module.css";

const stats = [
  {
    value: "",
    label: "McKinsey (2022) found that 66% of Middle East workers (many likely migrants) have experienced symptoms of poor mental health in their lifetime; ~33% report burnout"
  },
  {
    value: "",
    label: "In GCC countries, an estimated 80% of mental health conditions go undiagnosed, significantly higher than 50% in other high-income nations"
  },
  {
    value: "",
    label: "South Asian migrants in the GCC often lack social support, and mental illness remains taboo in many South Asian communities"
  }
];

const TherapistStats = () => (
  <section className={styles.section}>
    <div className={styles.box}>
      <h2 className={styles.heading}>Why We Exist</h2>
      <div className={styles.statsRow}>
        {stats.map((stat, i) => (
          <div className={styles.stat} key={i}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
            {i < stats.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TherapistStats; 