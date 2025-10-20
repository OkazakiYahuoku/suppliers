import { kpis } from "@/lib/data";
import styles from "@/styles/KpiGrid.module.css";

export function KpiGrid() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {kpis.map((item) => (
          <div key={item.label} className={styles.card}>
            <p className={styles.label}>{item.label}</p>
            <p className={styles.value}>{item.value}</p>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
