import styles from './ReelCrafterPlayer.module.css'
// internal components
import ReelCrafterSong from './ReelCrafterSong/ReelCrafterSong'

function SoundCloudPlayer() {
  return (
    <section className={styles.soundcloud_container}>
      <ReelCrafterSong src={``} color={``} />
    </section>
  )
}

export default SoundCloudPlayer