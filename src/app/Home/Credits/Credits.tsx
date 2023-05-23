'use client'
import styles from './Credits.module.css'
import Image from 'next/image'
// internal components
import Layout from '@/components/Layout/Layout'
import MediaCarousel from '@/components/MediaCarousel/MediaCarousel'
import CreditsAccordion from './CreditExpandable/CreditsAccordian'
// lists
import creditsPosterList from '../../lists/creditsPosterList';

function Credits() {
  return (
    <section className={styles.credits} id="credits">
      <Layout>
        <div className={styles.credits_container}>
          <h2> Credits </h2>
        </div>
        <div className={styles.credits_flex_container}>
            <CreditsAccordion title={'Film'}>
              <div className={styles.credit_expandable_wrapper}>
                <div>
                  <h6 className={styles.highlight}>Features</h6>
                  <p> It's Just Parkinson's - 2022</p>
                  <p> Ghosts of Christmas Past - 2021</p>
                  <p> Coextinction - 2021 </p>
                  <p> Through the Tear - 2020</p>
                  <p> Dead Dicks - 2019</p>
                </div>
                <div>
                  <h6 className={styles.highlight}>Shorts</h6>
                  <p> Flyer Boys - 2022</p>
                  <p> Where I'll Find You - 2022</p>
                  <p> Dream - 2021 </p>
                  <p> 8+ Weeks - 2020</p>
                  <p> Whenever You're Ready - 2020</p>
                </div>
              </div>
            </CreditsAccordion>
            <CreditsAccordion title={'Trailers'}>
              <div className={styles.credit_expandable_wrapper}>
                <p> iOS Reveal - 2022 <span className={styles.highlight}>Apple</span></p>
                <p> Made for Love - 2021 <span className={styles.highlight}>HBO Max</span></p>
                <p> Apple Watch Reveal - 2020 <span className={styles.highlight}>Apple</span></p>
                <p> A Teacher - 2020 <span className={styles.highlight}>FX</span></p>
                <p> The Operative - 2019 <span className={styles.highlight}>Vertical Entertainment</span></p>      
              </div>       
            </CreditsAccordion>
            <CreditsAccordion title={'Awards'}>
              <div className={styles.credit_expandable_wrapper}>
                <div>
                  <h6 className={styles.highlight}>Independent Horror Movie Awards</h6>
                  <p> Blood & Guts - Best Music 2019 (Winner) </p>
                </div>      
                <div>
                  <h6 className={styles.highlight}>Clio Music Awards</h6>
                  <p> Made For Love (Trailer) - Grand Clio (Winner) </p>
                </div> 
                <div>
                  <h6 className={styles.highlight}>Jackson Wild Media Awards</h6>
                  <p> Coextinction - Best Original Score (Nominee)</p>
                </div> 
                <div>
                  <h6 className={styles.highlight}>Canadian Screen Media Awards</h6>
                  <p> Coextinction - Best Original Score for a Documentary Feature (Nominee)</p>
                </div>    
              </div> 
            </CreditsAccordion>

        </div>
      </Layout>

      <MediaCarousel carouselType='posters'>
      <div className={styles.media_container}>
        {creditsPosterList.map((propsList, index) => {
                  return (
                    <div className={styles.media_clip_container} key={index}>
                      <Image src={propsList} alt={''} className={styles.poster_image} />
                    </div>
                  ) 
        })}
      </div>

      </MediaCarousel>

    </section>
  )
}

export default Credits