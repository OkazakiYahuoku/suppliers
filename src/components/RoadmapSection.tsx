import { roadmap } from "@/lib/data";
import styles from "@/styles/RoadmapSection.module.css";

export function RoadmapSection() {
  return (
    <section className={styles.wrapper} id="roadmap">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Roadmap</p>
          <h2 className={styles.title}>{roadmap.title}</h2>
        </div>
        <div className={styles.grid}>
          {roadmap.steps.map((step) => (
            <div key={step.title} className={styles.card}>
              <div className={styles.timeline}>{step.timeline}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
