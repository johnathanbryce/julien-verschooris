import styles from './Button.module.css'
// external libraries
import { Link } from 'react-scroll'

interface ButtonProps{
    isTransparent: boolean
    label: string,
    onClick?: () => void,
    src?: any
}

function Button({ label, isTransparent, onClick, src}: ButtonProps) {
  // src is to scroll to page section
  return (
    <Link to={src} smooth={true} duration={500}>
      <div className={styles.button_container} onClick={onClick}>
        { isTransparent ?
          <button className={styles.button_transparent} aria-label={label}> {label} </button>
          :
          <button className={styles.button_normal} aria-label={label}> {label} </button>
        }
      </div>  
    </Link>   
  
  )
}

export default Button