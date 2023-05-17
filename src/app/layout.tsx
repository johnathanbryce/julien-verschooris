// global styles 
import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/vars.css'
import { Roboto } from 'next/font/google'
// internal components
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Layout from '@/components/Layout/Layout'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

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
      <body className={roboto.className}> {/*  applies the font to the body */}
        <Header />
          <main>{children}</main>
        <Footer />
       </body>

    </html>
  )
}
