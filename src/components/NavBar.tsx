import Link from "next/link";
import { navigationLinks } from "@/lib/data";
import styles from "@/styles/NavBar.module.css";

export function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/">
          Suppliers
        </Link>
        <nav className={styles.nav}>
          {navigationLinks.map((link) => (
            <a key={link.href} className={styles.navItem} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
