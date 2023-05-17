import styles from './Header.module.css';
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <h3> JV. </h3>
        <nav className={styles.navbar}>
            <ul>
                <li><Link href='/'> HOME </Link></li>
                <li><Link href='/'> CREDITS </Link></li>
                <li><Link href='/'> REEL </Link></li>
                <li><Link href='/'> ABOUT </Link></li>        
                <li><Link href='/'> CONTACT </Link></li>
            </ul>
        </nav>
    </header>

  )
}

export default Header

