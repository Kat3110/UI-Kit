import Link from 'next/link';
import styles from './kit.module.css';

export default function RootLayout({children}) {
  return (
    <>
      <nav className={styles.nav} >
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="kit/button">Button</Link>
        <Link className={styles.link} href="kit/colors">Colors</Link>
        <Link className={styles.link} href="kit/typography">Typography</Link>
        <Link className={styles.link} href="/error">Error</Link>
        <Link className={styles.link} href="kit/slider">Slider</Link>
        <Link className={styles.link} href="kit/tabs">Tabs</Link>
      </nav>
      <div className={styles.kit}>{children}</div>
    </>
  )
}
