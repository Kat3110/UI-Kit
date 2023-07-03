import './globals.css'

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="UI-kit"></meta>
        <title>UI Kit test</title>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
      </head>
      <body >
        {children}
      </body>
    </html>)
}
