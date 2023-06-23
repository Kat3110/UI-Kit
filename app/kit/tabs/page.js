"use client"
import styles from './tabs.module.css';
import Tab from '@/components/tab/Tab'

export default function Tabs() {

  return (
    <>
      <h1>Tabs</h1>
      <div className={styles.box}>
        <Tab />
      </div>
    </>
  );
}
