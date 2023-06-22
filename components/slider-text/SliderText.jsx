"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './slider-text.module.css';

function SliderText({ slide }) {
  const [counter, setCounter] = useState(0);

  function handlePrevClick() {
    setCounter((prevCounter) => (prevCounter - 1 + slide.length) % slide.length);
  }

  function handleNextClick() {
    setCounter((prevCounter) => (prevCounter + 1) % slide.length);
  }

  return (
    <>
      <div className={styles.wrap}>
        <section className={styles.slider}>
          <h2 className={styles.hidden}>Мы предлагаем</h2>

          {slide.map((slide, index) => (
            // <div
            //   key={index}
            //   className={`${styles.item} ${index === counter ? styles.current : ''}`}
            //   style={{ transform: `translate(${100 * (index - counter)}%)` }}
            // >
            //   <Image
            //     className={styles.img}
            //     src={slide.src}
            //     alt={slide.alt}
            //   />
            //   <h3 className={styles.title}>
            //     {slide.text}
            //     {slide.text.map((line, i) => (
            //       <span key={i} className={styles.line}>{line}</span>
            //     ))}
            //   </h3>
            // </div>
            <div
              className={index === counter ? `${styles.current}` : `${styles.item}`}
              key={slide.id}
            >
              <Image
                className={styles.img}
                src={slide.src}
                alt={slide.alt}
              />
              <h3 className={styles.title}>
                <span className={styles.line}>
                  {slide.text}
                  <br />
                  <span className={styles.subtitle}>
                    {slide.subtitle}
                  </span>

                </span>
              </h3>
            </div>
          ))}

          <button
            type="button"
            className={`${styles.btn} ${styles.prev}`}
            onClick={handlePrevClick}
            disabled={counter === 0}
          >
            <i className='bx bx-chevron-left'></i>
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.next}`}
            onClick={handleNextClick}
            disabled={counter === slide.length - 1}
          >
            <i className='bx bx-chevron-right'></i>
          </button>
        </section>
      </div>
    </>
  );
}

export default SliderText;