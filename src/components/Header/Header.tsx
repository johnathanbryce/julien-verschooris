import styles from './Header.module.css';
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <ul>
                <li><Link href='/'> Home </Link></li>
                <li><Link href='/about'> About </Link></li>
                <li><Link href='/reel'> Reel </Link></li>
                <li><Link href='/music'> Music </Link></li>
                <li><Link href='/credits'> Credits </Link></li>
                <li><Link href='/contact'> Contact </Link></li>
            </ul>
        </nav>
    </header>

  )
}

export default Header

