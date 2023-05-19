import styles from './MediaClip.module.css'

interface MediaClipProps {
    propsList?: any,
    title: string,
    description: string,
    publisher: string,
    subtitle?: string,
    credit?: string,
    winner?: boolean,
    winnerImageSrc?: any
}

function MediaClip({ title, description, publisher, subtitle, credit, winner, winnerImageSrc}: MediaClipProps) {
  return (
    <div>
      <div className={styles.text_container}>
        <h4> {title}</h4>
        <p> {description} </p>
        <p> {subtitle}</p>
        <p> {credit}</p>
        <p> {publisher}</p>
      </div>
      {!winner && <p> winner stuff</p>}
    </div>
  )
}

export default MediaClip