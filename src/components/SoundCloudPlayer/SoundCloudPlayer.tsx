import styles from './SoundCloudPlayer.module.css'
// internal components
import SoundCloudSong from './SoundCloudSong/SoundCloudSong'

function SoundCloudPlayer() {
  return (
    <section className={styles.soundcloud_container}>
      <SoundCloudSong track={`1295410588`} color={`00000`} />
    </section>
  )
}

export default SoundCloudPlayer