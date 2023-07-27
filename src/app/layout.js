import './globals.scss'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to Listicle',
  description: 'Listicle is a website for your needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
