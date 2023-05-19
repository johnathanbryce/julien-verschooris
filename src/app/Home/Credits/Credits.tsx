'use client'
import styles from './Credits.module.css'
import Image from 'next/image'
import {useState} from 'react'
// internal components
import Layout from '@/components/Layout/Layout'
import MediaCarousel from '@/components/MediaCarousel/MediaCarousel'
import CreditExpandable from './CreditExpandable/CreditExpandable'
// internal lists
import creditsPosterList from '../../lists/creditsPosterList';

import coexPoster from '../../../../public/images/coexPoster.jpg'

function Credits() {
  const [isExpandedFilm, setIsExpandedFilm] = useState(false);
  const [isExpandedTrailers, setIsExpandedTrailers] = useState(false);
  const [isExpandedAwards, setIsExpandedAwards] = useState(false);

  const toggleExpandFilm = () =>{
    console.log('film')
    setIsExpandedFilm(prevState => !prevState)
  }

  const toggleExpandTrailers = () =>{
    console.log('trailer')
    setIsExpandedTrailers(prevState => !prevState)
  }

  const toggleExpandAwards = () =>{
    console.log('awards')
    setIsExpandedAwards(prevState => !prevState)
  }
  return (
    <section className={styles.credits} id="credits">
      <Layout>
        <div className={styles.credits_container}>
          <h2> Credits </h2>
        </div>
        <div className={styles.credits_flex_container}>
          <p> Look up "accordian" on youtube/chat gpt</p>
          <p> Will have to move CreditExpandable sections (film/trailer/movies) to a .list file and then map over it in an "Accordian" component alongside AccordianItem"</p>
          <CreditExpandable title={'Film'}  onClick={toggleExpandFilm} isExpanded={isExpandedFilm}>
            <div>
              <h6> Features </h6>
              <p> It's Just Parkinson's - 2022</p>
              <p> Ghosts of Christmas Past - 2021</p>
              <p> Coextinction - 2021</p>
              <p> Through the Tear - 2020</p>
              <p> Dead Dicks - 2019</p>
            </div>
            <div>
              <h6> Features </h6>
              <p> It's Just Parkinson's - 2022</p>
              <p> Ghosts of Christmas Past - 2021</p>
              <p> Coextinction - 2021</p>
              <p> Through the Tear - 2020</p>
              <p> Dead Dicks - 2019</p>
            </div>
          </CreditExpandable>

          <CreditExpandable title={'Trailers'} onClick={toggleExpandTrailers} isExpanded={isExpandedTrailers}>
            <div>
                <h6> Features </h6>
                <p> It's Just Parkinson's - 2022</p>
                <p> Ghosts of Christmas Past - 2021</p>
                <p> Coextinction - 2021</p>
                <p> Through the Tear - 2020</p>
                <p> Dead Dicks - 2019</p>
              </div>
              <div>
                <h6> Features </h6>
                <p> It's Just Parkinson's - 2022</p>
                <p> Ghosts of Christmas Past - 2021</p>
                <p> Coextinction - 2021</p>
                <p> Through the Tear - 2020</p>
                <p> Dead Dicks - 2019</p>
              </div>
          </CreditExpandable>

          <CreditExpandable title={'Awards'} onClick={toggleExpandAwards} isExpanded={isExpandedAwards}>
            <div>
              <h6> Features </h6>
              <p> It's Just Parkinson's - 2022</p>
              <p> Ghosts of Christmas Past - 2021</p>
              <p> Coextinction - 2021</p>
              <p> Through the Tear - 2020</p>
              <p> Dead Dicks - 2019</p>
            </div>
            <div>
              <h6> Features </h6>
              <p> It's Just Parkinson's - 2022</p>
              <p> Ghosts of Christmas Past - 2021</p>
              <p> Coextinction - 2021</p>
              <p> Through the Tear - 2020</p>
              <p> Dead Dicks - 2019</p>
            </div>
          </CreditExpandable>
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