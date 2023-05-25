'use client'
import { useState } from 'react'
import styles from './MediaClipSmallScreen.module.css'
import Image from 'next/image'
// internal components
import VideoModal from '../VideoModal/VideoModal'
// external libraries
import {BsPlayFill} from 'react-icons/bs'

interface MediaClipSmallScreenProps {
    propsList?: any,
    title: string,
    description?: string,
    imageSrc: any,
    videoSrc: string,
    isRowReverse?: boolean,
    winner?: any,
    winnerImageSrc?: any
}

function MediaClipSmallScreen({ title, description, imageSrc, isRowReverse,  videoSrc,  winner, winnerImageSrc}: MediaClipSmallScreenProps) {
  const [isVideoModalActive, setIsVideoModalActive] = useState(false);

  const onClickOpenVideoModal = () => {
    console.log('open video')
    setIsVideoModalActive(true);                                               
  }

  const onClickCloseVideoModal = () => {
    console.log('close video')
    setIsVideoModalActive(false);                                               
  }

  return (
    <div className={isRowReverse ? styles.clip_container_row_reverse : styles.clip_container}>
        <div className={styles.image_container}>
            <Image src={imageSrc} alt="" className={styles.image}/>
        </div>
      <div className={styles.text_container}>
        <h5> {title}</h5>
        <p> {description} </p>
        <div className={styles.watch_container}>
          <p className={styles.watch_here} onClick={onClickOpenVideoModal}> WATCH HERE </p>
          <BsPlayFill className={styles.watch_button}/>
        </div>
        { isVideoModalActive && <VideoModal videoSrc={videoSrc} onClickCloseModal={onClickCloseVideoModal} />}
        
      </div>
      {winner ? <Image src={winnerImageSrc} alt="Nominee Image" className={styles.winner_image} /> : (null)}
    </div>
  )
}

export default MediaClipSmallScreen;