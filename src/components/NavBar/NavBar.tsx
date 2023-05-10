import styles from './NavBar.module.css';
import Link from 'next/link'

const Nav = () => {
  return (
    <header className={styles.header}>
        <nav>
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

export default Nav

