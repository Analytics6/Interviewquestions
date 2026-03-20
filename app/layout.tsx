import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloud Interview Academy | Interview Questions & Certifications',
  description: 'Master cloud technologies with our comprehensive interview questions and certification programs.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <NavigationBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
