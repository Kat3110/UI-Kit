import Link from 'next/link';
import styles from './kit.module.css';

export default function RootLayout({children}) {
  return (
    <>
      <nav className={styles.nav} >
        <Link href="/">Home</Link>
        <Link href="kit/button">Button</Link>
        <Link href="kit/colors">Colors</Link>
        <Link href="kit/typography">Typography</Link>
        <Link href="/error">Error</Link>
        <Link href="kit/slider">Slider</Link>
        <Link href="kit/tabs">Tabs</Link>
      </nav>
      <div className={styles.kit}>{children}</div>
    </>
  )
}
