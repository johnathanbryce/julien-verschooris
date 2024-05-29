import styles from './ReelCrafterPlayer.module.css'

function ReelCrafterPlayer() {
  return (
    <section className={styles.reelcraft_container}>
      <iframe
      className={styles.iframe_container}
      width="100%"
      title="Julien's Scores Compilation"
      src="https://play.reelcrafter.com/embed/a7d397b8-f5aa-4f16-98ed-ffe810f0555d">
    </iframe>
    </section>
  )
}

export default ReelCrafterPlayer