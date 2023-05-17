import styles from './Button.module.css'

interface ButtonProps{
    isTransparent: boolean
    label: string,
    onClick?: () => void
}

function Button({ label, isTransparent, onClick}: ButtonProps) {
  return (
    <div className={styles.button_container} onClick={onClick}>
      { isTransparent ?
        <button className={styles.button_transparent}> {label} </button>
        :
        <button className={styles.button_normal}> {label} </button>
      }
    </div>    
  )
}

export default Button