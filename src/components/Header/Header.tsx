'use client'
import {useState, useEffect, useRef} from 'react'
import styles from './Header.module.css';
// external libraries
import { Link } from 'react-scroll'

const Header = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  // dropdown navbar menu on smaller screens:
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  // toggle dropdown navbar menu on smaller screens:
  const toggleDropdown = () => {
      setIsDropdownActive((prev) => !prev); /* relies on prior state so dont change it to just !isDropdownActive */
  }

  // closes dropdown menu on nav item click
  const onNavItemClickCloseDropdown = () =>{
      setIsDropdownActive(false)
  }

  // closes dropdown menu when clicking outside the dropdown menu
  useEffect(() => {
      const closeDropdownHandler = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
              setIsDropdownActive(false)
          }
      }
      document.addEventListener('mousedown', closeDropdownHandler)

    return () => {
      document.removeEventListener('mousedown', closeDropdownHandler)
    }
  }, [])

  return (
    <header className={styles.header} ref={dropdownRef}>
      <h3> JV. </h3>
      <div className={`${styles.hamburger} ${isDropdownActive ? styles.hamburger_active : '' }`} onClick={toggleDropdown}>
          <div className={styles.bar} ></div>
          <div className={styles.bar} ></div>
          <div className={styles.bar} ></div>
      </div>
      <nav className={styles.navbar}>
        <ul>
            <li><Link to="about" spy={true} smooth={true} duration={500} offset={10} > ABOUT </Link></li> 
            <li><Link to="music" spy={true} smooth={true} duration={500} offset={10} > MUSIC </Link></li>
            <li><Link to="reel" spy={true} smooth={true} duration={500}  offset={10}> REEL </Link></li>  
            <li><Link to="credits" spy={true} smooth={true} duration={500} offset={10} > CREDITS </Link></li>     
            <li><Link to="contact" spy={true} smooth={true} duration={500} offset={10} > CONTACT </Link></li>
        </ul>
      </nav>

      { isDropdownActive && 
        <nav className={styles.navbar_dropdown}>
        <ul>
            <li><Link to="about" onClick={onNavItemClickCloseDropdown}spy={true} smooth={true} duration={500} offset={10} > ABOUT </Link></li> 
            <li><Link to="music" onClick={onNavItemClickCloseDropdown} spy={true} smooth={true} duration={500} offset={10} > MUSIC </Link></li>
            <li><Link to="reel" onClick={onNavItemClickCloseDropdown} spy={true} smooth={true} duration={500}  offset={10}> REEL </Link></li>  
            <li><Link to="credits" onClick={onNavItemClickCloseDropdown} spy={true} smooth={true} duration={500} offset={10} > CREDITS </Link></li>     
            <li><Link to="contact" onClick={onNavItemClickCloseDropdown} spy={true} smooth={true} duration={500} offset={10} > CONTACT </Link></li>
        </ul>
      </nav>
      }
    </header>

  )
}

export default Header

