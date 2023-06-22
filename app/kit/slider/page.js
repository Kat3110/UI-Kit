"use client"
import travelling from '@/public/travelling.jpg';
import travelling1 from '@/public/travelling1.jpeg';
import travelling2 from '@/public/travelling2.jpg';
import travelling3 from '@/public/travelling3.jpg';
import travelling4 from '@/public/travelling4.jpg';
import styles from './slider.module.css';
import Slider from '@/components/slider/Slider'
import SliderText from "@/components/slider-text/SliderText";

export default function Slider() {
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
  const slidText = [
    {
      id: 1,
      src: travelling,
      alt: 'Slide 1',
      text: "traveler's diary",
      subtitle: ' journey begins'
    },
    {
      id: 2,
      src: travelling1,
      alt: 'Slide 2',
      text: "traveler's diary",
      subtitle: ' journey begins'
    },
    {
      id: 3,
      src: travelling2,
      alt: 'Slide 3',
      text: "traveler's diary",
      subtitle: ' journey begins'
    },
    {
      id: 4,
      src: travelling3,
      alt: 'Slide 4',
      text: "traveler's diary",
      subtitle: ' journey begins'
    },
    {
      id: 5,
      src: travelling4,
      alt: 'Slide 5',
      text: "traveler's diary",
      subtitle: ' journey begins'
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
