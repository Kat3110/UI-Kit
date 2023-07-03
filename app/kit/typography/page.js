"use client"
import styles from "./typography.module.css";
import { Typography } from "@/components/typography/Typography";

const cards = [
  {
    id: 1,
    title: 'Heading 1',
    subtitle: 'SE Pro Display SB',
    size: '34px L41', 
    name: 'heading-1'
  },
  {
    id: 2,
    title: 'Heading 2',
    subtitle: 'SE Pro Display SB',
    size:'22px L28',
    name: 'heading-2'
  },
  {
    id: 3,
    title: 'Heading 3',
    subtitle: 'SE Pro Text SB',
    size: '17px L22',
    name: 'heading-3'
  },
  {
    id: 4,
    title: 'Heading 4',
    subtitle: 'SE Pro Text M',
    size:'15px L20',
    name: 'heading-4'
  },
  {
    id: 5,
    title: 'BUTTON 1',
    subtitle: 'SE Pro Text SB',
    size:'17px L22',
    name: 'button-1'
  },
  {
    id: 6,
    title: 'BUTTON 2',
    subtitle: 'SE Pro Text M',
    size:'12px L16',
    name: 'button-2'
  },
  {
    id: 7,
    title: 'CAPTION 1',
    subtitle: 'SE Pro Text M',
    size:'12px L16',
    name: 'caption-1'
  },
  {
    id: 8,
    title: 'CAPTION 2',
    subtitle: 'SE Pro Text M',
    size:'11px L13',
    name: 'caption-2'
  },
  {
    id: 9,
    title: 'Body 1',
    subtitle: 'SE Pro Text R',
    size:'15px L20',
    name: 'body-1'
  },
  {
    id: 10,
    title: 'Body 2',
    subtitle: 'SE Pro Text R',
    size:'13px L18',
    name: 'body-2'
  },
  {
    id: 11,
    title: 'Small Text',
    subtitle: 'SE Pro Text R',
    size:'11px L13',
    name: 'small-text'
  },
  {
    id: 12,
    title: '',
    subtitle: '',
    size: '',
    name: ''
  }
];

export default function TypographyPage() {
  return (
    <>
      <h1>Typography</h1>
      <div className='block'>
        <div className={styles.header}>
          <span className={styles.title}>ESE</span>
          <span className={styles.subtitle}>Encode Sans Expanded</span>
        </div>
        <div className={`${styles.cards}`}>
          {cards.map((card) => (
            <Typography
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              size={card.size}
              name={card.name}
            />
          ))}
        </div>
      </div>
    </>
  )
}
