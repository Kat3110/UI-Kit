import './globals.css'
import {Encode_Sans_Expanded} from 'next/font/google'


const encode = Encode_Sans_Expanded({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin']
})
export default function RootLayout({children}) {
  return (
    <html lang="en">
    <head>
      <meta name="description" content="UI-kit"></meta>
      <link rel='icon' href='333.png'/>
      <title>UI Kit</title>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
    </head>
    <body className={encode.className}>
    {children}
    </body>
    </html>)
}
