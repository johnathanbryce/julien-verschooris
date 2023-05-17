import styles from './HeroSquare.module.css'

interface HeroSquareProps{
    label: string,
    src: any
}

function HeroSquare({label, src}:HeroSquareProps) {
    // src to scroll to page section
  return (
    <p className={styles.square}>{label}</p>
  )
}

export default HeroSquare