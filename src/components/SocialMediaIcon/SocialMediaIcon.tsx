import React from 'react'
import styles from './SocialMediaIcon.module.css'
import Link from 'next/link'

interface SocialMediaIconProps{
    icon: any,
    src: string
}

function SocialMediaIcon({icon, src}: SocialMediaIconProps) {

  return (
    <a href={src} className={styles.icon} target='_blank' rel="noopener noreferrer"><div className={styles.icon_container}>{icon}</div></a>
  )
}

export default SocialMediaIcon