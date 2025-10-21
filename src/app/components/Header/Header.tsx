// Header.tsx
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/logo.png" // שימי לב: שם קובץ בתיקיית public
          alt="לוגו של האתר"
          width={120}
          height={60}
        />
      </div>
      <nav className={styles.nav}>Navigation</nav>
      <div className={styles.profile}>Profile</div>
    </header>
  );
}
