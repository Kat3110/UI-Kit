import styles from './typography.module.css';

export function Typography({title, subtitle, size, name}) {

  return (
    <div>
      <div className={`${styles.card} && ${name}`}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.subtitle}>{subtitle}<br />{size}</span>
      </div>
    </div>
  )
}
