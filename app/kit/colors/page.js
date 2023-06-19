"use client";
import {Color} from "@/components/color/Color";
import styles from './colors.module.css';

const cards = [
  {
    id: 1,
    background: '#BE52F2',
    title: 'PRIMARY colors'
  },
  {
    id: 2,
    background: '#DBA5F5',
    title: 'PRIMARY colors'
  },
  {
    id: 3,
    background: '#EEDFF2',
    title: 'PRIMARY colors'
  },
  {
    id: 4,
    background: '#6979F8',
    title: 'Accent colors'
  },
  {
    id: 5,
    background: '#A5AFFB',
    title: 'Accent colors'
  },
  {
    id: 6,
    background: '#E5E7FA',
    title: 'Accent colors'
  },
  {
    id: 7,
    background: '#FFCF5C',
    title: 'Semantic colors'
  },
  {
    id: 8,
    background: '#FFE29D',
    title: 'Semantic colors'
  },
  {
    id: 9,
    background: '#FFF8E7',
    title: 'Semantic colors'
  },
  {
    id: 10,
    background: '#FFA26B',
    title: 'Semantic colors'
  },
  {
    id: 11,
    background: '#FFC7A6',
    title: 'Semantic colors'
  },
  {
    id: 12,
    background: '#FFE8DA',
    title: 'Semantic colors'
  },
  {
    id: 13,
    background: '#0084F4',
    title: 'Semantic colors'
  },
  {
    id: 14,
    background: '#66B5F8',
    title: 'Semantic colors'
  },
  {
    id: 15,
    background: '#D5E9FA',
    title: 'Semantic colors'
  },
  {
    id: 16,
    background: '#00C48C',
    title: 'Semantic colors'
  },
  {
    id: 17,
    background: '#7DDFC3',
    title: 'Semantic colors'
  },
  {
    id: 18,
    background: '#D5F2EA',
    title: 'Semantic colors'
  },
  {
    id: 19,
    background: '#FF647C',
    title: 'Semantic colors'
  },
  {
    id: 20,
    background: '#FDAFBB',
    title: 'Semantic colors'
  },
  {
    id: 21,
    background: '#FBE4E8',
    title: 'Semantic colors'
  },
  {
    id: 22,
    background: '#1A051D',
    title: 'Neutral colors'
  },
  {
    id: 23,
    background: '#3F3356',
    title: 'Neutral colors'
  },
  {
    id: 24,
    background: '#D0C9D6',
    title: 'Neutral colors'
  },
  {
    id: 25,
    background: '#ECE9F1',
    title: 'Neutral colors'
  },
  {
    id: 26,
    background: '#F7F5F9',
    title: 'Neutral colors'
  },
  {
    id: 27,
    background: '#FFFFFF',
    title: 'Neutral colors'
  },
  {
    id: 28,
    background: 'linear-gradient(225deg, #BD7AE3 0%, #8461C9 100%)',
    title: 'Gradient'
  },
  {
    id: 29,
    background: 'linear-gradient(225deg, #CDDDF4 3%, #CDBAFA 100%)',
    title: 'Gradient'
  },
];

export default function Colors() {
  const primaryColors = cards.filter(card => card.title === 'PRIMARY colors');
  const accentColors = cards.filter(card => card.title === 'Accent colors');
  const semanticColors = cards.filter(card => card.title === 'Semantic colors');
  const neutralColors = cards.filter(card => card.title === 'Neutral colors');
  const gradientColors = cards.filter(card => card.title === 'Gradient');

  return (
    <>
      <h1>Сolors</h1>
      <div className='block'>
        <div className={styles.card}>
          <h2>primary colors</h2>
          <hr/>
          <div className={styles.box}>
            {primaryColors.map((card) => (
              <Color
                key={card.id}
                color={card.background}
              />
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2>accent colors</h2>
          <hr/>
          <div className={styles.box}>
            {accentColors.map((card) => (
              <Color
                key={card.id}
                color={card.background}
              />
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2>semantic colors</h2>
          <hr/>
          <div className={styles.box}>
            {semanticColors.map((card) => (
              <Color
                key={card.id}
                color={card.background}
              />
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2>neutral colors</h2>
          <hr/>
          <div className={styles.box}>
            {neutralColors.map((card) => (
              <Color
                key={card.id}
                color={card.background}
              />
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2>gradient</h2>
          <hr/>
          <div className={styles.box}>
            {gradientColors.map((gradient) => (
              <Color
                key={gradient.id}
                color={gradient.background}
                isGradient
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}