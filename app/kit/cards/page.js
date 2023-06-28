"use client"
import Card from "@/components/card/Card";
import Space1 from '../../../public/space.jpg'
import Space from '../../../public/space3.jpg'


export default function Cards() {
  return (
    <>
      <h1>Card</h1>
      <div className='block'>
        <h2>Card flip with 3D effect</h2>
        <hr/>
        <Card
          title='Space'
          description="Cosmonaut's diary"
          subtitle="The view from porthole is something incredible. I see vast emptiness of space and beauty of our planet"
          image={Space}
          rotate
        />
        <Card
          title='Space'
          description="Important reminder"
          subtitle="The earth is our home, we must protect it and preserve it for future generations."
          image={Space1}
        />
      </div>
    </>
  )
}
