import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navbar/Navigation'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BripTravel',
  description: 'Agencia de viajes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
