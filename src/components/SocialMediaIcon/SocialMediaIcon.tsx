import React from 'react'
import styles from './SocialMediaIcon.module.css'
import Link from 'next/link'

interface SocialMediaIconProps{
    icon: any,
    src: string,
    label: string,
}

function SocialMediaIcon({icon, src, label}: SocialMediaIconProps) {

  return (
    <Link href={src} className={styles.icon} aria-label={label}target='_blank' rel="noopener noreferrer">
      <div className={styles.icon_container}>{icon}</div>
    </Link>
  )
}

export default SocialMediaIcon