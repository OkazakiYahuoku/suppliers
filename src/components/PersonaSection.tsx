import { persona } from "@/lib/data";
import styles from "@/styles/PersonaSection.module.css";

export function PersonaSection() {
  return (
    <section className={styles.wrapper} id="persona">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.label}>Persona</p>
          <h2 className={styles.title}>{persona.title}</h2>
          <p className={styles.description}>{persona.description}</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>主要ニーズ</h3>
            <ul className={styles.list}>
              {persona.primaryNeeds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>直面する課題</h3>
            <ul className={styles.list}>
              {persona.pains.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
