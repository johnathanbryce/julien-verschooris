import styles from './MainBioImage.module.css'
import Image from 'next/image'
// internal components
import Layout from '../Layout/Layout'
// internal assets
import mainBioImage from '../../../public/images/mainBioImage.jpg'


function MainBioImage() {
  return (
    <Layout>
      <div className={styles.image_container}>
        <Image
          className={styles.bio_image}      
          src={mainBioImage}
          alt="the icon of the CASMA Nominee 2022 award"
        />
      </div>
    </Layout>
  )
}

export default MainBioImage