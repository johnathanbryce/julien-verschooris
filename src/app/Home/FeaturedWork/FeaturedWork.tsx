'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './FeaturedWork.module.css'
// internal components
import MainBioImage from '@/components/MainBioImage/MainBioImage'
import VideoClip from '@/components/VideoClip/VideoClip'

function FeaturedWork() {
  return (
    <section className={styles.featured_work} id="featured">
      <MainBioImage />
      <div className={styles.featured_work_content}>
        <h2>Featured Work</h2>
      <VideoClip src="/backgroundClip.mp4" border="light" />
      </div>
    </section>
  )
}

export default FeaturedWork