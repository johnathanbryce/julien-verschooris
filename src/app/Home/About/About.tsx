'use client'
import {useState} from 'react'
import styles from './About.module.css'
import Image from 'next/image'
// internal components
import Layout from '@/components/Layout/Layout'
import Button from '@/components/Button/Button'
import MainBioImage from '@/components/MainBioImage/MainBioImage'
// internal assets
import mainBioImage from '../../../../public/images/mainBioImage.jpg'

function About() {
  const [expandReadMore, setExpandReadMore] = useState(false);

  const toggleReadMore = () =>{
      setExpandReadMore(prevState => !prevState)
  }
  
  const firstParagraph=`Julien Verschooris is a multi award-winning, CASMA-nominated composer, scoring features, and short films as well as commercial music for trailers and branding placements. Being of half-Chinese and half-French descent, Julien weaves musical attitudes from his intersecting cultures into his compositions. His first feature, Dead Dicks won the 2019 Fantasia Audience Award. He has also composed music for various trailer, TV spots, and brand placements for the likes of HBO Max, Apple, and Hulu, winning a prestigious Grand Clio for his work on the Made For Love trailer. His score for the award-winning documentary Coextinction was recently nominated in the category of "Best Original Music Score" at the Jackson Wild Media Awards, competing against the likes of Academy-Award Winner Steven Price, and Blue Planet 2 composer Jacob Shea.`
  const secondParagraph = `Julien seeks to provide an emotional and immersive experience into the filmmaker's world & narrative. Through music, he personifies the unique subtexts embedded within the narrative, and the environments in which they exist in order to create an inseparable association between story & score. `
  const thirdParagraph = `With little in the way of formal classical influence, Julien's inspiration of sound is unmoderated. He blends computer technologies, classical composition, various percussion, contemporary pop, vocal textures, eastern influences, and extended instrument techniques allowing him to meet the artistic vision of the varied filmmakers and collaborators he works with. `
  
  return (
    <Layout>
    <section className={styles.about}>
      <div>
        <h2> About Julien </h2>
          <div className={styles.about_text_container}>
            <p> {firstParagraph} </p>
            {expandReadMore &&
              <div className={styles.about_text_container}>
                <p>{secondParagraph} </p>
                <p>{thirdParagraph}</p>
              </div>
            }
          <Button label={expandReadMore ? 'Read Less' : 'Read More'} onClick={toggleReadMore} isTransparent={true}/>
          </div>
      </div>
      <div className={styles.image_container}>
          <Image
            className={`${styles.bio_image} ${styles.box_image}`}      
            src={mainBioImage}
            alt="the icon of the CASMA Nominee 2022 award"
          />
          <div className={styles.box_underlay}></div>
      </div>
    </section>
    </Layout>

  )
}

export default About