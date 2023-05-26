
'use client'
import styles from '../styles/page.module.css'
// internal pages
import Hero from './Home/Hero/Hero'
import Nominee from './Home/Nominee/Nominee'
import About from './Home/About/About'
import FeaturedWork from './Home/FeaturedWork/FeaturedWork'
import MusicSection from './Home/MusicSection/MusicSection'
import SelectedMediaClips from './Home/SelectedMediaClips/SelectedMediaClips'
import Credits from './Home/Credits/Credits'
// internal components
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import WebsiteCredit from '@/components/WebsiteCredit/WebsiteCredit'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Nominee />
      <div className={styles.full_width_bg_color}>
        <About />
      </div>
      <FeaturedWork />
      <div className={styles.full_width_bg_color}>
        <MusicSection />
      </div>
      <SelectedMediaClips/>
      <div className={styles.full_width_bg_color}>
        <Credits/> 
      </div>
      <div className={styles.full_width_bg_color}>
        <div className={styles.horizontal_line_break}></div>
      </div>
      <Footer /> 
      <WebsiteCredit />  
    </main>
  )
}

