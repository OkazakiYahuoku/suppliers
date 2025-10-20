import { contentCTA, hero, heroHighlights } from "@/lib/data";
import styles from "@/styles/HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} id="vision">
      <div className={styles.copy}>
        <span className={styles.eyebrow}>{hero.eyebrow}</span>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.description}>{hero.description}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={contentCTA.primaryHref} rel="noreferrer" target="_blank">
            {contentCTA.primaryLabel}
          </a>
          <a className={styles.secondary} href={contentCTA.secondaryHref} rel="noreferrer" target="_blank">
            {contentCTA.secondaryLabel}
          </a>
        </div>
      </div>
      <div className={styles.grid}>
        {heroHighlights.map((item) => (
          <div key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
