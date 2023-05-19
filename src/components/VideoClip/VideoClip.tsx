'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './VideoClip.module.css'
// external libraries
import {BsPlayFill, BsPauseFill} from 'react-icons/bs'

interface VideoClipProps{
    src: string,
    border?: 'light' | 'none'
}

function VideoClip({ src, border }: VideoClipProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef: any = useRef(null);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
    setIsVideoPlaying(prevState => !prevState);
  };

  useEffect(() => {
    const video = videoRef.current;
    return () => {
      if (video) {
        video.pause();
      }
    };
  }, []);

  return (
    <div className={styles.video_container}>
      {/* <video ref={videoRef} className={styles.video_clip} src={src} /> */}
      <video ref={videoRef} className={`${border === 'light' ? styles.video_clip_light : styles.video_clip_no_border}`} src={src} controls={isVideoPlaying} />

      <button className={styles.play_button} onClick={toggleVideo}>
        {isVideoPlaying ? (
           <BsPauseFill className={styles.audio_button_pause} /> 
         
        ) : (
          <BsPlayFill className={styles.audio_button} />
        )}
        {/* { isVideoPlaying && <BsPlayFill className={styles.audio_button} />  } */}
      </button>
    </div>
  );
}

export default VideoClip;



/* function VideoClip({src, ref}: VideoClipProps) {
  const videoRef: any = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => {
    const video = ref.current;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
    setIsVideoPlaying(prevState => !prevState);
  }

  useEffect(() => {
    const video = ref.current;
    return () => {
      if (video) {
        video.pause();
      }
    };
  }, []);

  return (
        <div className={styles.video_container}>
          <video className={styles.video_clip} src={src} ref={ref}/> 
          <button className={styles.play_button }onClick={toggleVideo}>
            { isVideoPlaying ? <BsPauseFill className={styles.audio_button}/> : <BsPlayFill className={styles.audio_button}/>}       
          </button> 
        </div>
  )
}

export default VideoClip; */