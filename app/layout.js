import './globals.css'
import {Inter} from 'next/font/google'
import Link from 'next/link';

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>UI Kit test</title>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
      </head>
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
