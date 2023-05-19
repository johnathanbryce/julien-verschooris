import styles from './SelectedMediaClips.module.css'
// internal components
import Layout from '@/components/Layout/Layout'
import MediaClip from '@/components/MediaClip/MediaClip';
import VideoClip from '@/components/VideoClip/VideoClip';
import MediaCarousel from '@/components/MediaCarousel/MediaCarousel';
// internal lists
import mediaClipPropsList from '../../lists/mediaCipPropsList'

function SelectedMediaClips() {
  return (
    <Layout>
    <section className={styles.selected_media} id="selected-media-clips">
      <h2> Selected Media Clips </h2>
      <div id="#clips" className={styles.media_container}>
        <div className={styles.media_clip_container_highlight}>
          <VideoClip src="/madeForLove.mp4" border='none'/>
          <MediaClip
            title='Made for Love Official Teaser'
            description="A custom trailer arrangement of Beyoncé's 'Crazy in Love'"
            subtitle="Show: Made for Love"
            credit="Song: Crazy in Love by Beyonce (Trailer Remix)"
            publisher="Publisher: Phoenician Order Music"
            winner={true} 
            winnerImageSrc=''
          />
        </div>
        <MediaCarousel itemsInView={2}>
          {mediaClipPropsList.map((propsList) => {
            return (
              <div>
                <VideoClip src={propsList.video}/>
                <MediaClip title={propsList.title} description={propsList.description} subtitle={propsList.subtitle} credit={propsList.credit} publisher={propsList.publisher} />
              </div>
            ) 
          })}
        </MediaCarousel>
      </div>
    </section>
    </Layout>
  )
}

export default SelectedMediaClips

{/* <div className={styles.media_clip_container}>
1
        </div>
        <div className={styles.media_clip_container}>
2
        </div>
        <div className={styles.media_clip_container}>
3
        </div>
        <div className={styles.media_clip_container}>
4
        </div> */}