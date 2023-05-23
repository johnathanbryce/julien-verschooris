import styles from './MainBioImage.module.css'
import Image from 'next/image'
// internal components
import Layout from '../Layout/Layout'
// internal assets
import mainBioImage from '../../../public/images/mainBioImage.jpg'

function MainBioImage() {
  return (
    <div className={styles.image}>
        <div className={styles.image_container}>
          <Image
            className={`${styles.bio_image} ${styles.box_image}`}      
            src={mainBioImage}
            alt="the icon of the CASMA Nominee 2022 award"
          />
          <div className={styles.box_underlay}></div>
        </div>
    </div>
  )
}

export default MainBioImage

