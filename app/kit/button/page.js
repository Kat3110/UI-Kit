'use client'
import {Button} from '@/components/button/Button';


export default function ButtonPage() {
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
          text='Button Size'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
        />
        <Button
          text='Button Size'
          rounded="12px"
          fontS="18px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
        />
        <Button
          text='Button Size'
          rounded="12px"
          size="S"
          fontS="16px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
        />
      </div>
      <h2>Button color</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Button Color'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--light-blue)"
          bg="var(--blue)"
          hoverBg="var(--light-blu)"
          hoverColor="var(--blue)"
        />
        <Button
          text='Button Color'
          rounded="12px"
          size="L"
          fontS="20px"
          color="#f700c2"
          bg="pink"
          hoverBg="green"
          hoverColor="var(--white)"
        />
        <Button
          text='Button Color'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="#FFA26B"
          hoverBg="#66B5F8"
          hoverColor="#df0"
        />
        <Button
          text='Button Color'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="black"
          hoverBg="white"
          hoverColor="black"
        />
      </div>
      <h2>Button outline</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Button Outline'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--blue)"
          bg="transparent"
          hoverColor="#0cff00"
          border="1px solid #6979f887"
          hoverBorder="1px solid #2edd0d91"
        />
        <Button
          text='Button Outline'
          rounded="12px"
          size="L"
          fontS="20px"
          color="#f700c2"
          bg="transparent"
          hoverColor="green"
          border="1px solid pink"
          hoverBorder="1px solid green"
        />
        <Button
          text='Button Outline'
          rounded="12px"
          size="L"
          fontS="20px"
          color="#66B5F8"
          bg="transparent"
          hoverColor="#66B5F8"
          border="1px solid #00ff627d"
          hoverBorder="1px solid #fd07cf"
        />
        <Button
          text='Button Outline'
          rounded="12px"
          size="L"
          fontS="20px"
          color="black"
          bg="transparent"
          hoverColor="red"
          border="1px solid black"
          hoverBorder="1px solid red"
        />
      </div>
      <h2>Button rounded</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Rounded'
          rounded="0"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
        />
        <Button
          text='Rounded'
          rounded="4px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
        />
        <Button
          text='Rounded'
          rounded="10px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
        />
        <Button
          text='Rounded'
          rounded="12px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
        />
        <Button
          text='Rounded'
          rounded="25px"
          size="L"
          fontS="20px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
        />
      </div>
      <h2>Button disabled</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Disabled'
          rounded="12px"
          sizeL
          fontS="20px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
          disabled
        />
      </div>
      <h2>Button icon and text</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text='Button'
          rounded="12px"
          sizeL
          fontS="20px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
          icon="bx bx-planet bx-spin"
          iconIsRight
        />
        <Button
          text='Button'
          rounded="12px"
          sizeL
          fontS="20px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
          icon="bx bx-planet bx-spin"
        />
      </div>
      <h2>Button icon</h2>
      <hr/>
      <div className="block__btn">
        <Button
          text=' '
          rounded="12px"
          sizeL
          fontS="20px"
          color="var(--white)"
          bg="var(--violet)"
          hoverBg="var(--white)"
          hoverColor="var(--violet)"
          icon="bx bx-planet bx-spin"
        />
        <Button
          text=' '
          rounded="12px"
          sizeL
          fontS="20px"
          color="var(--light-blue)"
          bg="var(--blue)"
          hoverBg="var(--light-blu)"
          hoverColor="var(--blue)"
          icon="bx bx-right-arrow-alt"
        />
        <Button
          text=' '
          rounded="12px"
          sizeL
          fontS="20px"
          icon="bx bx-trash bx-tada"
          color="red"
          bg="black"
          hoverBg="red"
          hoverColor="white"
        />
      </div>
    </div>
  </>)
}
