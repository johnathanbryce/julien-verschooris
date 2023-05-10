import styles from './SoundCloudSong.module.css'
import React from 'react';
// external libraries
/*
CUSTOMIZABLE PLAYER OPTIONS: waversurfer.js, ply, howler

*/


interface SoundCloudSongProps {
    track: string,
    color: string | number
}


function SoundCloudSong({track, color}: SoundCloudSongProps) {
    //const trackUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}`;
  return (
/*     <iframe className={styles.soundtrack} width="50%" height="100"  allow="autoplay"
    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}&amp;
    color=${color}
    &show_user=false&hide_related=true`}>
    </iframe> */
    <div className={styles.soundtrack}>

    </div>
  )
}

export default SoundCloudSong