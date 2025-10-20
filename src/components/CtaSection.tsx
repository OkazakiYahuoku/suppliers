import { contentCTA } from "@/lib/data";
import styles from "@/styles/CtaSection.module.css";

export function CtaSection() {
  return (
    <section className={styles.wrapper} id="cta">
      <div className={styles.inner}>
        <h2 className={styles.title}>{contentCTA.title}</h2>
        <p className={styles.description}>{contentCTA.description}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={contentCTA.primaryHref} rel="noreferrer" target="_blank">
            {contentCTA.primaryLabel}
          </a>
          <a className={styles.secondary} href={contentCTA.secondaryHref} rel="noreferrer" target="_blank">
            {contentCTA.secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
