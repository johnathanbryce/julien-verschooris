'use client'
import styles from './FeaturedWork.module.css'
// internal components
import MainBioImage from '@/components/MainBioImage/MainBioImage'
import VideoClip from '@/components/VideoClip/VideoClip'
import MediaClipSmallScreen from '@/components/MediaClipSmallScreen/MediaClipSmallScreen'
// internal assets
import natureConservatory from '../../../../public/images/natureConservatory.jpg'

function FeaturedWork() {
  return (
    <section className={styles.featured_work} id="featured">
      <MainBioImage />
      <h2>Featured Work</h2>
      
      <div className={styles.featured_work_content}>
          <VideoClip src="/natureConservatory.mp4" border="light" />
      </div>

      {/*SMALL SCREEN STACKED COLUMN LAYOUT (<800px screen width): */}
      <div className={styles.media_container_small_screen}>
        <MediaClipSmallScreen 
          title='Nature Conservancy USA'
          description="Recent score for The Nature Conservancy USA."
          imageSrc={natureConservatory}
          videoSrc='/natureConservatory.mp4'
        />

      </div>
    </section>
  )
}

export default FeaturedWork