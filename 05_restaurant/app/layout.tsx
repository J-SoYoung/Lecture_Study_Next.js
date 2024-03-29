import './globals.css'
import type { Metadata } from 'next'
import { Inter,Anek_Bangla } from 'next/font/google'
import NavBar from './components/NavBar'
import AuthContext from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })
const anek_bangla = Anek_Bangla({
  weight: ['400', '800'],
  subsets:['latin'],
  display:'swap'
})

export const metadata: Metadata = {
  title: 'RadiantResto',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={anek_bangla.className}>
        <main className="bg-gray-100 min-h-screen w-screen">
          <AuthContext>
            <main className="max-w-screen-2xl m-auto bg-white">
              <NavBar/>
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  )
}
