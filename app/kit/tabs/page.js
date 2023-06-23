"use client"
import styles from './tabs.module.css';
import Tab from '@/components/tab/Tab'

export default function Tabs() {

  return (
    <>
      <h1>Tabs</h1>
      <div className='block'>
        <h2>Tabs with switching animation</h2>
        <hr/>
      </div>
      <div className={styles.box}>
        <Tab />
      </div>
    </>
  );
}
