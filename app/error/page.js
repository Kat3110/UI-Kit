"use client"
import {useEffect} from "react";
import styles from "./error.module.css";
import Image from 'next/image';
import Acc from '@/public/121.png'
import Setting from '@/public/2.png'
import Wifi from '@/public/wifi.png'
import Icon from '@/public/333.png'
import Cube from '@/public/444.png'
import IMG1 from '@/public/rtij95.png'
import IMG2 from '@/public/123212.png'
import IMG3 from '@/public/54y4grfew.png'

export default function Error() {

  useEffect(() => {
    const parallaxBox = document.querySelector(`.${styles.parallax}`);
    const layers = document.querySelectorAll(`.${styles.layer}`);


    const parallax = (evt) => {
      const parallaxWidth = parallaxBox.offsetWidth;
      const parallaxHeight = parallaxBox.offsetHeight;
      const coordX = evt.clientX - parallaxWidth / 2;
      const coordY = evt.clientY - parallaxHeight / 2;

      layers.forEach((layer) => {
        const layerSpeed = layer.dataset.speed;
        const x = (coordX * layerSpeed).toFixed(2);
        const y = (coordY * layerSpeed).toFixed(2);
        layer.style.transform = `translate(${x}px, ${y}px)`;
      });

    };

    const stopParallax = (evt) => {
      layers.forEach((layer) => {
        layer.removeAttribute('style');
      })
    }

    parallaxBox.addEventListener('mousemove', (e) => {
      parallax(e)
    })
    parallaxBox.addEventListener('mouseleave', (e) => {
      stopParallax(e)
    });
  })

  return (
    <>
      <section className={`${styles.error} ${styles.parallax}`}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.description}>
          GO TO <a href="/">MAIN</a> PAGE
        </p>
        <div className={styles.box}>
          <div className={`${styles.layer} ${styles.layer3}`} data-speed="0.04">
            <Image className={styles.image} src={Acc} alt="/"/>
          </div>
          <div className={`${styles.layer} ${styles.layer4}`} data-speed="0.10">
            <Image className={styles.image} src={Setting} alt="/"/>
          </div>
          <div className={`${styles.layer} ${styles.layer5}`} data-speed="0.10">
            <Image className={styles.image} src={Wifi} alt="/"/>
          </div>
          <div className={`${styles.layer} ${styles.layer6}`} data-speed="0.02">
            <Image className={styles.image} src={Icon} alt="/"/>
          </div>
          <div className={`${styles.layer} ${styles.layer7}`} data-speed="0.03">
            <Image className={styles.image} src={Cube} alt="/"/>
          </div>
          <div className={`${styles.transform} ${styles.transform1}`} data-speed="0.02">
            <Image className={styles.image} src={IMG1} alt="/"/>
          </div>
          <div className={`${styles.transform} ${styles.transform3}`} data-speed="0.01">
            <Image className={styles.image} src={IMG2} alt="/"/>
          </div>
          <div className={`${styles.transform} ${styles.transform2}`} data-speed="0.03">
            <Image className={styles.image} src={IMG3} alt="/"/>
          </div>
        </div>
      </section>
    </>
  )
}
