import styles from './HeroSquare.module.css'
// external libraries
import { Link } from 'react-scroll'

interface HeroSquareProps{
    label: string,
    src: string
}

function HeroSquare({label, src}:HeroSquareProps) {
  // src is to scroll to page section
  return (
    <Link to={src} smooth={true} duration={500} className={styles.square}><p>{label}</p></Link>
  )
}

export default HeroSquare