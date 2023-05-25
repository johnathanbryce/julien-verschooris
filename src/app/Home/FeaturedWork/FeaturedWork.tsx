'use client'
import styles from './FeaturedWork.module.css'
// internal components
import MainBioImage from '@/components/MainBioImage/MainBioImage'
import VideoClip from '@/components/VideoClip/VideoClip'
import MediaClipSmallScreen from '@/components/MediaClipSmallScreen/MediaClipSmallScreen'
// internal assets
import coextinctionPoster from '../../../../public/images/coexPoster.jpg'

function FeaturedWork() {
  return (
    <section className={styles.featured_work} id="featured">
      <MainBioImage />
      <h2>Featured Work</h2>
      <div className={styles.featured_work_content}>
          <VideoClip src="/coextinction.mp4" border="light" />

      </div>
      {/*SMALL SCREEN STACKED COLUMN LAYOUT (<800px screen width): */}
      <div className={styles.media_container_small_screen}>
        <MediaClipSmallScreen 
          title='Coextinction Trailer'
          description="A track from Phoenician Order Music catalog used in the the documentary 'Coextinction'."
          imageSrc={coextinctionPoster}
          videoSrc='/coextinction.mp4'
        />

      </div>
    </section>
  )
}

export default FeaturedWork