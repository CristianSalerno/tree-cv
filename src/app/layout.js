import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cristian Salerno',
  description: 'Cristian Salerno - Software Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-amber-200 ${inter.className} min-h-screen min-w-full`}>{children}</body>
    </html>
  )
}
