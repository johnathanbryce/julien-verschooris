import styles from './FeaturedWork.module.css'
import Image from 'next/image'
// internal components
import MainBioImage from '@/components/MainBioImage/MainBioImage'
// internal assets
import mainBioImage from '../../../../public/images/mainBioImage.jpg'

function FeaturedWork() {
  return (
    <section className={styles.featured_work}>
      <MainBioImage />
      <div className={styles.featured_work_content}>
        <h2>Featured Work</h2>
        <div className={styles.video_container}>
          <video className={styles.video_clip} src="/backgroundClip.mp4" controls />  
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork