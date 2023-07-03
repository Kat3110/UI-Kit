"use client"
import {Button} from "@/components/button/Button";


export default function Button() {
  return (
    <>
      <h1>Buttons</h1>
      <div className="block">
        <h2>Button default</h2>
        <hr/>
        <div className='block__btn'>
          <Button />
        </div>
        <h2>Button size</h2>
        <hr/>
        <div className='block__btn'>
          <Button
            rounded='12px'
            size='L'
            fontS='20px'
            color='var(--white)'
            bg='var(--violet)'
            hoverBg='var(--white)'
            hoverColor='var(--violet)'
          />
          <Button
            rounded='12px'
            fontS='18px'
            color='var(--white)'
            bg='var(--violet)'
            hoverBg='var(--white)'
            hoverColor='var(--violet)'
          />
          <Button
            rounded='12px'
            size='S'
            fontS='16px'
            color='var(--white)'
            bg='var(--violet)'
            hoverBg='var(--white)'
            hoverColor='var(--violet)'
          />
        </div>
        <h2>Button disabled</h2>
        <hr/>
        <div className='block__btn'>
          <Button
            rounded='12px'
            sizeL
            fontS='20px'
            color='var(--white)'
            bg='var(--violet)'
            hoverBg='var(--white)'
            hoverColor='var(--violet)'
            disabled
          />
        </div>
        <h2>Button icon</h2>
        <hr/>
        <div className='block__btn'>
          <Button
            rounded='12px'
            sizeL
            fontS='20px'
            color='var(--white)'
            bg='var(--violet)'
            hoverBg='var(--white)'
            hoverColor='var(--violet)'
            icon='bx bx-planet bx-spin'
          />
        </div>
      </div>
    </>
  )
}
