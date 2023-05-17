import styles from './ReelCrafterSong.module.css'
// external libraries
/*
reelcrafter embed: https://help-v2.reelcrafter.com/article/117-creating-an-embedded-player

*/

interface SoundCloudSongProps {
    src: string,
    color: string | number
}


function SoundCloudSong({src, color}: SoundCloudSongProps) {
  return (

    <div className={styles.soundtrack}>

    </div>
  )
}

export default SoundCloudSong