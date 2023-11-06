import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RetSoft',
  description: 'First page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}
