import AuthModal from '@/components/AuthModal'
import './globals.scss'
import { Rubik } from 'next/font/google'
import Providers from './providers'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to Listicle',
  description: 'Listicle is a website for your needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>
          <AuthModal />

          <main className='main'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
