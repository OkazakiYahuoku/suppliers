import { journey } from "@/lib/data";
import styles from "@/styles/JourneySection.module.css";

export function JourneySection() {
  return (
    <section className={styles.wrapper} id="journey">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Journey</p>
          <h2 className={styles.title}>{journey.title}</h2>
          <p className={styles.description}>{journey.description}</p>
        </div>
        <div className={styles.timeline}>
          {journey.stages.map((stage) => (
            <div key={stage.stage} className={styles.stageCard}>
              <span className={styles.stageBadge}>{stage.stage}</span>
              <p className={styles.question}>{stage.question}</p>
              <p className={styles.asset}>{stage.asset}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
