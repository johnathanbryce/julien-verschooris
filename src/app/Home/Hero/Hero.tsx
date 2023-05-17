import styles from './Hero.module.css'
import Layout from '@/components/Layout/Layout'
// internal components
import SocialMediaIcon from '@/components/SocialMediaIcon/SocialMediaIcon';
import Button from '@/components/Button/Button';
// external libraries
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


function Hero() {
  return (
      <section className={styles.hero}>
        <video className={styles.background_clip} src="/backgroundClip.mp4" autoPlay loop muted></video>
        <div className={styles.overlay}></div>
        <Layout>
          <div className={styles.content_container}>
            <div className={styles.intro_content_wrapper}>
              <h1><span className={styles.firstname}>JULIEN</span> VERSCHOORIS </h1>
              <p> A multi award-winning, CASMA-nominated composer, scoring features, and short films as well as commercial music for trailers and branding placements.</p>
              <Button label={'Learn More'} isTransparent={true} />
            </div>
          </div>

          <div className={styles.icons_container}>
              <SocialMediaIcon icon={<FaFacebookF />} src='https://www.facebook.com/' />
              <SocialMediaIcon icon={<BsTwitter />} src='https://www.twitter.com/'/>       
          </div>

          <div>
            
          </div>

        </Layout>
      </section>

  )
}

export default Hero