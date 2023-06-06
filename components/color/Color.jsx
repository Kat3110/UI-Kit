'use client'
import styles from './color.module.css';
import { useState, useEffect } from 'react';

export function Color({ color, isGradient }) {
  const [firstColor, setFirstColor] = useState('');
  const [secondColor, setSecondColor] = useState('');
  const [angleInPercent, setAngleInPercent] = useState('');

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isGradient) {
      const regex = /linear-gradient\((\d+)deg,\s*(#\w+)\s+(\d+)%,\s*(#\w+)\s+(\d+)%\)/;
      const matches = color.match(regex);
      if (matches) {
        const angleInPercent = parseInt(matches[1]) / 360 * 100;
        const firstColor = matches[2];
        const secondColor = matches[4];
        setFirstColor(firstColor)
        setSecondColor(secondColor)
        setAngleInPercent(angleInPercent)
      }
    }
  }, [isGradient, color]);

  const handleCopyClick = (c) => {
    navigator.clipboard.writeText(c).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    });
  };

  return (
    <div className={`${styles.card} ${isGradient ? styles.gradient : ''}`}>
      <div className={styles.color} style={{ background: `${color}` }}>
        <i
          title={isCopied ? 'Copied!' : 'Copy'}
          className={`bx bx-copy bx-tada ${styles.icon} ${isCopied ? `${styles.copy}` : `${styles.notcopy}`}`}
          onClick={() => {handleCopyClick(color)}}
        />
      </div>
      <div className={styles.data}>
        {isGradient ? null : color}
        {isGradient && (
          <>
            <span className={styles.text}>
              {firstColor}
            </span>
            <span>
              {angleInPercent}
            </span>
            <span>
              {secondColor}
            </span>
          </>
        )}
      </div>
    </div>
  )
}
