import styles from './MediaClip.module.css'
import Image from 'next/image'

interface MediaClipProps {
    propsList?: any,
    title: string,
    description: string,
    publisher: string,
    subtitle?: string,
    credit?: string,
    winner?: any,
    winnerImageSrc?: any
}

function MediaClip({ title, description, publisher, subtitle, credit, winner, winnerImageSrc}: MediaClipProps) {
  return (
    <div className={styles.clip_container}>
      <div className={styles.text_container}>
        <h4> {title}</h4>
        <p> {description} </p>
        <p> {subtitle}</p>
        <p> {credit}</p>
        <p> {publisher}</p>
      </div>
      {winner ? <Image src={winnerImageSrc} alt="Nominee Image" className={styles.winner_image} height={200} width={200} /> : (null)}
    </div>
  )
}

export default MediaClip