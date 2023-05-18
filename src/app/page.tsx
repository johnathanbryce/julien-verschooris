
import styles from '../styles/page.module.css'
// internal components
import Layout from '@/components/Layout/Layout'
// internal pages
import Hero from './Home/Hero/Hero'
import Nominee from './Home/Nominee/Nominee'
import About from './Home/About/About'
import FeaturedWork from './Home/FeaturedWork/FeaturedWork'
import MusicSection from './Home/MusicSection/MusicSection'
import SelectedMediaClips from './Home/SelectedMediaClips/SelectedMediaClips'
import Credits from './Home/Credits/Credits'


export default function Home() {
  return (
    <>
      <Hero />
      <Nominee />
      <div className={styles.full_width_bg_color}>
        <About />
      </div>
      <FeaturedWork />
      <MusicSection />
      <SelectedMediaClips />
      <Credits />      
    </>
  )
}

