'use client'
import {Button} from '@/components/button/Button';
import {useState} from 'react';


export default function ButtonPage() {

  function handleClick() {
    alert('Button clicked!');
  }

  return (<>
    <h1>Buttons</h1>
    <div className="block">
      <h2>Button default</h2>
      <hr/>
      <div className="block__btn">
        <Button/>
      </div>
      <h2>Button size</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Primary'
          rounded="12px"
          size="L"
          fontS="25px"
          color="var(--white)"
          bg="var(--blue)"
          hoverBg="#6979f899"
        />
        <Button
          text='Secondary'
          rounded="12px"
          fontS="20px"
          color="var(--white)"
          bg="#be52f2"
          hoverBg='#be52f299'
        />
        <Button
          text='Success'
          rounded="12px"
          size="S"
          fontS="18px"
          color="var(--white)"
          bg="#00c48c"
          hoverBg="#00c48c99"
        />
      </div>
      <h2>Button color</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Primary'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="var(--blue)"
          hoverBg="#6979f899"
        />
        <Button
          text='Secondary'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#be52f2"
          hoverBg='#be52f299'
        />
        <Button
          text='Success'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#00c48c"
          hoverBg="#00c48c99"
        />
        <Button
          text='Info'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#0084f4"
          hoverBg="#0084f499"
        />
        <Button
          text='Warning'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#ffa26b"
          hoverBg="#ffa26b99"
        />
        <Button
          text='Danger'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#ff647c"
          hoverBg="#ff647c99"
        />
      </div>
      <h2>Button outline</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Primary'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--black)"
          hoverColor="var(--white)"
          bg="transparent"
          hoverBg="#6979f899"
          hoverBorder="1px solid #6979f899"
          border="1px solid #6979f899"
        />
        <Button
          text='Secondary'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--black)"
          hoverColor="var(--white)"
          bg="transparent"
          hoverBg='#be52f299'
          hoverBorder="1px solid #be52f299"
          border="1px solid #be52f299"
        />
        <Button
          text='Success'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--black)"
          hoverColor="var(--white)"
          bg="transparent"
          hoverBg='#00c48c99'
          hoverBorder="1px solid #00c48c99"
          border="1px solid #00c48c99"
        />
        <Button
          text='Info'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--black)"
          hoverColor="var(--white)"
          bg="transparent"
          hoverBg='#0084f499'
          hoverBorder="1px solid #0084f499"
          border="1px solid #0084f499"
        />
        <Button
          text='Warning'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--black)"
          hoverColor="var(--white)"
          bg="transparent"
          hoverBg='#ffa26b99'
          hoverBorder="1px solid #ffa26b99"
          border="1px solid #ffa26b99"
        />
        <Button
          text='Danger'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--black)"
          hoverColor="var(--white)"
          bg="transparent"
          hoverBg='#ff647c99'
          hoverBorder="1px solid #ff647c99"
          border="1px solid #ff647c99"
        />
      </div>
      <h2>Button rounded</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Primary'
          rounded="0"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="var(--blue)"
          hoverBg="#6979f899"
        />
        <Button
          text='Secondary'
          rounded="4px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#be52f2"
          hoverBg='#be52f299'
        />
        <Button
          text='Success'
          rounded="8px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#00c48c"
          hoverBg="#00c48c99"
        />
        <Button
          text='Info'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#0084f4"
          hoverBg="#0084f499"
        />
        <Button
          text='Warning'
          rounded="18px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#ffa26b"
          hoverBg="#ffa26b99"
        />
        <Button
          text='Danger'
          rounded="25px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#ff647c"
          hoverBg="#ff647c99"
        />
      </div>
      <h2>Button disabled</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Primary'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="var(--blue)"
          hoverBg="#6979f899"
          disabled
        />
        <Button
          text='Secondary'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--black)"
          hoverColor="var(--white)"
          bg="transparent"
          hoverBg='#be52f299'
          border="1px solid #be52f299"
          disabled
        />
      </div>
      <h2>Button icon and text</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Primary'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="var(--blue)"
          hoverBg="#6979f899"
          icon="bx bx-planet"
          iconIsRight
        />
        <Button
          text='Secondary'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--black)"
          hoverColor="var(--white)"
          bg="transparent"
          hoverBg='#be52f299'
          border="1px solid #be52f299"
          icon="bx bx-star"
        />
      </div>
      <h2>Button icon</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text=' '
          rounded="12px"
          fontS="16px"
          color="var(--white)"
          bg="var(--blue)"
          hoverBg="#6979f899"
          icon="bx bx-planet bx-spin"
        />
        <Button
          text=' '
          rounded="12px"
          fontS="16px"
          color="var(--black)"
          hoverColor="var(--white)"
          bg="transparent"
          hoverBg='#be52f299'
          border="1px solid #be52f299"
          icon="bx bx-right-arrow-alt"
        />
        <Button
          text=' '
          rounded="12px"
          fontS="16px"
          icon="bx bx-trash bx-tada"
          color="var(--white)"
          bg="#00c48c"
          hoverBg="#00c48c99"
        />
      </div>
      <h2>Button Click</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Click Me'
          rounded="12px"
          size="L"
          fontS="25px"
          color="var(--white)"
          bg="var(--blue)"
          hoverBg="#6979f899"
          click={handleClick}
        />
      </div>
    </div>
  </>)
}
