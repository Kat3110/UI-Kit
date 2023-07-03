"use client"
import space from '@/public/space.jpg';
import space1 from '@/public/space1.jpg';
import space2 from '@/public/space2.jpg';
import space3 from '@/public/space3.jpg';
import space4 from '@/public/space4.jpg';
import styles from './slider.module.css';
import Slider from '@/components/slider/Slider'
import SliderText from "@/components/slider-text/SliderText";

export default function SliderPage() {
  const slides = [
    {
      id: 1,
      src: space4,
      alt: 'Slide 1',

    },
    {
      id: 2,
      src: space,
      alt: 'Slide 2',
    },
    {
      id: 3,
      src: space1,
      alt: 'Slide 3',
    },
    {
      id: 4,
      src: space3,
      alt: 'Slide 4',
    },
    {
      id: 5,
      src: space2,
      alt: 'Slide 5',
    },
  ];
  const slidText = [
    {
      id: 1,
      src: space,
      alt: 'Slide 1',
      text: "notes of cosmonaut",
      subtitle: 'journey through universe'
    },
    {
      id: 2,
      src: space1,
      alt: 'Slide 2',
      text: "notes of cosmonaut",
      subtitle: 'journey through universe'
    },
    {
      id: 3,
      src: space2,
      alt: 'Slide 3',
      text: "notes of cosmonaut",
      subtitle: 'journey through universe'
    },
    {
      id: 4,
      src: space3,
      alt: 'Slide 4',
      text: "notes of cosmonaut",
      subtitle: 'journey through universe'
    },
    {
      id: 5,
      src: space4,
      alt: 'Slide 5',
      text: "notes of cosmonaut",
      subtitle: 'journey through universe'
    },
  ];

  return (
    <>
      <h1>slider</h1>
      <div className={styles.box}>
        <h2>Infinite Image slider</h2>
        <hr/>
        <Slider slides={slides}/>
        <h2>Animation of images and slider captions</h2>
        <hr/>
        <SliderText slide={slidText}/>
      </div>
    </>
  );
}
