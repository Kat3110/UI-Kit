"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './kit.module.css';

export default function RootLayout({ children }) {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleKitClick = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  return (
    <>
      <button
        className={styles.menu}
        onClick={toggleMenu}
        title="menu"
      >
        <i className='bx bx-menu-alt-left'></i>
      </button>
      <nav  className={`${styles.nav} ${isActive ? styles.active : ''}`}>
        <button title='close' className={styles.close} onClick={toggleMenu}>
          <i className='bx bx-x'></i>
        </button>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="kit/button">Button</Link>
        <Link className={styles.link} href="kit/colors">Colors</Link>
        <Link className={styles.link} href="kit/typography">Typography</Link>
        <Link className={styles.link} href="/error">Error</Link>
        <Link className={styles.link} href="kit/slider">Slider</Link>
        <Link className={styles.link} href="kit/tabs">Tabs</Link>
        <Link className={styles.link} href="kit/cards">Card</Link>
      </nav>
      <div className={styles.kit} onClick={handleKitClick}>{children}</div>
    </>
  );
}