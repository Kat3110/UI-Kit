"use client"
import Earth from '../components/earth/Earth'
import Link from "next/link";


export default function Home() {
  return (
    <div className='home'>
      <div className='home__box'>
        <div className='home__title'><span>Move faster </span>with intuitive user interface tools</div>
        <p className='home__subtitle'>Offers a complete set of user interface tools that will help you implement new
          features faster. Start with Kit,
          four fully loaded component libraries, or bring your own design system to our production-ready components.</p>
        <Link href="/kit">
          <button className='home__button'>Get started</button>
        </Link>
        <Earth/>
      </div>
    </div>
  );
}