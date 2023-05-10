// global styles 
import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/vars.css'
import { Inter } from 'next/font/google'
// internal components
import Layout from '@/components/Layout/Layout'

const inter = Inter({ subsets: ['latin'] })

// global meta tags
export const metadata = {
  title: 'Julien Verschooris',
  description: 'A portfolio website for composer Julien Verschooris',
  keywords: 'composer, julien vershooris, music'
}

// main layout component - anything you want on EVERY page

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
       </body>
    </html>
  )
}
