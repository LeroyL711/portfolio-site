import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leroy Lau | CST Student',
  description: 'A student at BCIT in the CST Program',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
