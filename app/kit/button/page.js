"use client"
import {Button} from "@/components/button/Button";


export default function Button() {
  return (
    <>
      <h1>Buttons</h1>
          <Button
            rounded='40px'
            sizeL
            fontS='30px'
            color='var(--yellow)'
            bg='var(--violet)'
            hoverBg='var(--yellow)'
            hoverColor='var(--violet)'
          />
    </>
  )
}
