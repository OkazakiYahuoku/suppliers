import { navigationLinks } from "@/lib/data";
import styles from "@/styles/Footer.module.css";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Suppliers</span>
          <p className={styles.caption}>
            B2Bサプライヤー向けに、買い手体験を軸にしたマーケティングとトップライン成長を支援します。
          </p>
        </div>
        <nav className={styles.links}>
          {navigationLinks.map((link) => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <small className={styles.small}>© {CURRENT_YEAR} Suppliers. All rights reserved.</small>
      </div>
    </footer>
  );
}
