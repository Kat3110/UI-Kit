"use client"
import Earth from '../components/earth/Earth'
import Link from "next/link";
import Image from "next/image";
import Sputnik from '../public/sp.png'
import nlo from '../public/nlo.png'
import React from "react";


export default function Home() {
  return (
    <div className='home'>
      <Image className='home__img' src={Sputnik} alt='Sputnik'/>
      <div className='home__nlo'>
        <Image src={nlo} alt='nlo'/>
        <div className='home__gradient'></div>
      </div>
      <div className='home__box'>

        <div className='home__title'>
            <span>Move faster&nbsp; </span>with intuitive user interface tools
        </div>
        <p className='home__subtitle'>Offers a&nbsp;complete set of&nbsp;user interface tools that will help you
          implement new features faster. Start with Kit, four fully loaded component libraries, or&nbsp;bring your own
          design system to&nbsp;our production-ready components.</p>
        <Link href="/kit">
          <button title='Get started' className='home__button'>Get started</button>
        </Link>
        <Earth/>
      </div>
    </div>
  );
}