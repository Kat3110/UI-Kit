"use client"
import {useState} from 'react';
import Image from 'next/image';
import styles from './slider.module.css';

function Slider({slides}) {
  const [counter, setCounter] = useState(0);

  function handlePrevClick() {
    setCounter((prevCounter) => (prevCounter - 1 + slides.length) % slides.length);
  }

  function handleNextClick() {
    setCounter((prevCounter) => (prevCounter + 1) % slides.length);
  }

  return (
    <>
      <div className={styles.wrap}>
        <section className={styles.slider}>
          {slides.map((slide, index) => (
            <div className={index === counter ? `${styles.current}` : `${styles.item}`} key={slide.id}>
              <Image className={styles.image} src={slide.src} alt={slide.alt}/>
            </div>
          ))}
          <button type="button"
                  className={`${styles.btn} ${styles.prev}`}
                  onClick={handlePrevClick}
                  title="prev"
          >
            <i className='bx bx-chevron-left'></i>
          </button>
          <button type="button"
                  className={`${styles.btn} ${styles.next}`}
                  onClick={handleNextClick}
                  title="next"
          >
            <i className='bx bx-chevron-right'></i>
          </button>
        </section>
      </div>
    </>
  );
}

export default Slider;