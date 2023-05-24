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
      <video ref={videoRef} playsInline className={`${border === 'light' ? styles.video_clip_light : styles.video_clip_no_border}`} src={src} controls={isVideoPlaying} />
      <button className={styles.play_button} onClick={toggleVideo}>
        {isVideoPlaying ? (
           <BsPauseFill className={styles.audio_button_pause} /> 
        ) : (
          <BsPlayFill className={styles.audio_button} />
        )}
      </button>
    </div>
  );
}

export default VideoClip;


