import styles from './FeaturedWork.module.css'
// internal components
import MainBioImage from '@/components/MainBioImage/MainBioImage'
import VideoClip from '@/components/VideoClip/VideoClip'
import MediaClipSmallScreen from '@/components/MediaClipSmallScreen/MediaClipSmallScreen'
// internal assets
import natureConservatory from '../../../../public/images/natureConservatory.jpg'
import ferrari from '../../../../public/images/ferrari.png'


function FeaturedWork() {
  return (
    <section className={styles.featured_work} id="featured">
      <MainBioImage />
      <h2>Featured Work</h2>
      
      <div className={styles.featured_work_content}>
          <VideoClip src="/ferrari.mp4" border="light" />
      </div>

      {/*SMALL SCREEN STACKED COLUMN LAYOUT (<800px screen width): */}
      <div className={styles.media_container_small_screen}>
        <MediaClipSmallScreen 
          title='Ferrari'
          description="Dive into the heart of racing with the official trailer for 'Ferrari,' enhanced by the electrifying track from Julien, showcasing the legendary tale of passion and innovation."
          imageSrc={ferrari}
          videoSrc='/ferrari.mp4'
        />

      </div>
    </section>
  )
}

export default FeaturedWork