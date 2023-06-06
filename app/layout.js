import './globals.css'
import {Inter} from 'next/font/google'
import Link from 'next/link';

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'UI Kit',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='nav'>
          <Link href="/button">Button</Link>
          <Link href="/colors">Colors</Link>
          <Link href="/typography">Typography</Link>
          <Link href="/#">Button4</Link>
          <Link href="/#">Button5</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>)
}
