"use client"
import Card from "@/components/card/Card";
import Space1 from '../../../public/space.jpg'
import Space from '../../../public/space3.jpg'


export default function CardPage() {
  return (
    <>
      <h1>Card</h1>
      <div className='block'>
        <h2>Card flip with 3D&nbsp;effect</h2>
        <hr/>
        <div className='block__card'>
          <Card
            title='Space'
            description='Cosmonaut&rsquo;s diary'
            subtitle='The view from porthole is&nbsp;something incredible. I&nbsp;see vast emptiness of&nbsp;space and beauty of&nbsp;our planet'
            image={Space}
            rotate
          />
          <Card
            title='Space'
            description='Important reminder'
            subtitle='The earth is&nbsp;our home, we&nbsp;must protect it&nbsp;and preserve it&nbsp;for future generations.'
            image={Space1}
          />
        </div>
      </div>
    </>
  )
}
