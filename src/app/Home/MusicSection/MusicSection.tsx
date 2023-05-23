import styles from './MusicSection.module.css'
// internal components
import Layout from '@/components/Layout/Layout'
import ReelCrafterPlayer from '@/components/ReelCrafterPlayer/ReelCrafterPlayer'

function MusicSection() {
  return (
    <Layout>
      <section className={styles.music} id="music">
        <h2> Julien Verschooris' Music </h2>
        <ReelCrafterPlayer />
      </section>
    </Layout>
  )
}

export default MusicSection