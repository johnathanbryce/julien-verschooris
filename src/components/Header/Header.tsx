import styles from './Header.module.css';
// external libraries
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className={styles.header}>
      <h3> JV. </h3>
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/" spy={true} smooth={true} duration={500} offset={50} > HOME </Link></li>
                <li><Link to="credits" spy={true} smooth={true} duration={500} offset={10} > CREDITS </Link></li>
                <li><Link to="reel" spy={true} smooth={true} duration={500}  offset={10}> REEL </Link></li>
                <li><Link to="about" spy={true} smooth={true} duration={500} offset={10} > ABOUT </Link></li>        
                <li><Link to="contact" spy={true} smooth={true} duration={500} offset={10} > CONTACT </Link></li>
            </ul>
        </nav>
    </header>

  )
}

export default Header

