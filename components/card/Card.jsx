"use client"
import styles from "./card.module.css";
import Image from "next/image";


export default function Card({
                               title,
                               subtitle,
                               description,
                               image,
                               rotate
}) {
  return (
    <div className={`${styles.card} ${rotate ? styles.rotate : ''}`}>
      <div className={styles.container}>
        <div className={styles.front}>
          <Image className={styles.image} src={image} alt='Travel' />
          <div className={styles.inner}>
            <p className={styles.title}>{title}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.inner}>
            <p>{subtitle}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
