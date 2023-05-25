'use client'
import { useState } from 'react';
import styles from './Hero.module.css'
import Layout from '@/components/Layout/Layout'
// internal components
import SocialMediaIcon from '@/components/SocialMediaIcon/SocialMediaIcon';
import Button from '@/components/Button/Button';
import HeroSquare from './HeroSquare/HeroSquare';
// external libraries
import {SiImdb} from 'react-icons/si'
import {TbBrandSpotify} from 'react-icons/tb'
import {FaInstagram} from 'react-icons/fa'
import {BsPlayFill, BsPauseFill} from 'react-icons/bs'// external libraries
import { Link } from 'react-scroll'

function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const toggleAudio = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  return (

      <section className={styles.hero}>
        <video className={styles.background_clip} src="/backgroundClip.mp4" muted={isMuted} autoPlay playsInline loop preload='auto'/>  
        {/* <div className={styles.overlay}></div> */}
        <Layout>
          <button onClick={toggleAudio} className={styles.audio_button_container}>
            { isPaused ? <BsPauseFill className={styles.audio_button}/> : <BsPlayFill className={styles.audio_button}/>}       
          </button>
          <div className={styles.content_container}>
            <div className={styles.intro_content_wrapper}>
              <h1 className={styles.fade_in}><span className={styles.firstname}>JULIEN</span> VERSCHOORIS </h1>
              <p> A multi award-winning, CASMA-nominated composer, scoring features, and short films as well as commercial music for trailers and branding placements.</p>
              <div className={styles.btn_container}><Button label={'Learn More'} src="about"isTransparent={true} /></div>
            </div>
          </div>

          <div className={styles.bottom_container}>
            <div className={styles.icons_container}>
              <SocialMediaIcon icon={<SiImdb />} src='https://www.imdb.com/name/nm8653985/' />
              <SocialMediaIcon icon={<TbBrandSpotify />} src='https://open.spotify.com/artist/0vJxBMqJnP2vbqFAxUWR9t?si=UDb8Xds6RReXtgMMnZ0jmw'/>   
              <SocialMediaIcon icon={<FaInstagram />} src='https://www.instagram.com/julienverschooris/'/> 
            </div>
            <div className={styles.squares_container}>
              <HeroSquare label="VIEW WORK" src='featured'/>
              <HeroSquare label="LISTEN TO MUSIC" src='music' />
              <HeroSquare label="LEARN MORE" src='about'/>
            </div>      
          </div>
          </Layout>     
      </section>
  )
}

export default Hero