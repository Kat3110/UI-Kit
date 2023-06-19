// "use client"
// import styles from "./slider.module.css";
// import Image from 'next/image';
// import Acc from "@/public/121.png";
//
// export default function Slider() {
//
//
//   const sliderBox = document.querySelector('.slider');
//   const slides = sliderBox.querySelectorAll('.item');
//   const btnPrev = sliderBox.querySelector('.prev');
//   const btnNext = sliderBox.querySelector('.next');
//
//   let counter = 0;
//
//   btnNext.addEventListener('click', function() {
//     slides[counter].classList.toggle('current');
//     counter++;
//     if (counter >= slides.length) {
//       counter = 0;
//     }
//     slides[counter].classList.toggle('current');
//   });
//
//   btnPrev.addEventListener('click', function() {
//     slides[counter].classList.toggle('current');
//     counter--;
//     if (counter < 0) {
//       counter = slides.length - 1;
//     }
//     slides[counter].classList.toggle('current');
//   });
//   return (
//     <div className="wrap">
//       <section className="slider">
//         <div className="item current">
//           <Image className={styles.image} src={Acc} alt="slide"/>
//         </div>
//         <div className="item">
//           <Image className={styles.image} src={Acc} alt="slide"/>
//         </div>
//         <div className="item">
//           <Image className={styles.image} src={Acc} alt="slide"/>
//         </div>
//
//         <button type="button" className="btn prev">
//           <Image src={Acc} alt="prev"/>
//         </button>
//         <button type="button" className="btn next">
//           <Image src={Acc} alt="next"/>
//         </button>
//       </section>
//     </div>
//   )
// }
"use client"
import { useState } from 'react';
import Image from 'next/image';
import Acc from '@/public/121.png';
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
      src: Acc,
      alt: 'Slide 1',
    },
    {
      id: 2,
      src: Acc,
      alt: 'Slide 2',
    },
    {
      id: 3,
      src: Acc,
      alt: 'Slide 3',
    },
  ];

  return (
    <div className="wrap">
      <section className="slider">
        {slides.map((slide, index) => (
          <div className={index === counter ? 'item current' : 'item'} key={slide.id}>
            <Image className={styles.image} src={slide.src} alt={slide.alt} />
          </div>
        ))}
        <button type="button" className="btn prev" onClick={handlePrevClick}>
          <Image src={Acc} alt="prev" />
        </button>
        <button type="button" className="btn next" onClick={handleNextClick}>
          <Image src={Acc} alt="next" />
        </button>
      </section>
    </div>
  );
}

export default Slider;