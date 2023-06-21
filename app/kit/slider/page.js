"use client"
import {useState} from 'react';
import Image from 'next/image';
import travelling from '@/public/travelling.jpg';
import travelling1 from '@/public/travelling1.jpeg';
import travelling2 from '@/public/travelling2.jpg';
import travelling3 from '@/public/travelling3.jpg';
import travelling4 from '@/public/travelling4.jpg';
import styles from './slider.module.css';

function Slider() {
  const [counter, setCounter] = useState(0);

  function handlePrevClick() {
    setCounter((prevCounter) => (prevCounter - 1 + slides.length) % slides.length);
  }

  function handleNextClick() {
    setCounter((prevCounter) => (prevCounter + 1) % slides.length);
  }

  const slides = [
    {
      id: 1,
      src: travelling,
      alt: 'Slide 1',
    },
    {
      id: 2,
      src: travelling1,
      alt: 'Slide 2',
    },
    {
      id: 3,
      src: travelling2,
      alt: 'Slide 3',
    },
    {
      id: 4,
      src: travelling3,
      alt: 'Slide 4',
    },
    {
      id: 5,
      src: travelling4,
      alt: 'Slide 5',
    },
  ];

  return (
    <>
      <h1>slider</h1>
      <div className={styles.box}>
        <h2>Infinite Image slider</h2>
        <hr/>
        <div className={styles.wrap}>
          <section className={styles.slider}>
            {slides.map((slide, index) => (
              <div className={index === counter ? `${styles.current}` : `${styles.item}`} key={slide.id}>
                <Image className={styles.image} src={slide.src} alt={slide.alt}/>
              </div>
            ))}
            <button type="button" className={`${styles.btn} ${styles.prev}`} onClick={handlePrevClick}>
              <i className='bx bx-chevron-left'></i>
            </button>
            <button type="button" className={`${styles.btn} ${styles.next}`} onClick={handleNextClick}>
              <i className='bx bx-chevron-right'></i>
            </button>
          </section>
        </div>


        <h2>Animation of images and slider captions</h2>
        <hr/>
      </div>
    </>
  );
}

export default Slider;