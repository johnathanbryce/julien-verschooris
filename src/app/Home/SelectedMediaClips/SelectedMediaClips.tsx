import styles from './SelectedMediaClips.module.css'
// internal components
import Layout from '@/components/Layout/Layout'
import MediaClip from '@/components/MediaClip/MediaClip';
import VideoClip from '@/components/VideoClip/VideoClip';
import VideoClipSmall from '@/components/VideoClipSmall/VideoClipSmall';
import MediaCarousel from '@/components/MediaCarousel/MediaCarousel';
// internal lists
import mediaClipPropsList from '../../lists/mediaCipPropsList'

function SelectedMediaClips() {

  return (
    <section className={styles.selected_media} id="selected-media-clips" >
      <Layout>
        <div className={styles.selected_media_column_gap} id="#clips">
          <h2> Selected Media Clips </h2>
          <div  className={styles.media_container_highlight}>
            <div className={styles.media_clip_container_highlight}>
              <VideoClip src="/madeForLove.mp4" border='none'/>
              <MediaClip
                title='Made for Love Official Teaser'
                description="A custom trailer arrangement of Beyoncé's 'Crazy in Love'"
                subtitle="Show: Made for Love"
                credit="Song: Crazy in Love by Beyonce (Trailer Remix)"
                publisher="Publisher: Phoenician Order Music"
              />
            </div>
          </div>
          {/*SMALL SCREEN STACKED COLUMN LAYOUT (<800px screen width): */}
          <div className={styles.media_container_small_screen}>
              {mediaClipPropsList.map((propsList, index) => {
                  return (
                    <div className={styles.media_clip_container_highlight} key={index}>
                      <VideoClip src={propsList.video}/>
                      <MediaClip title={propsList.title} description={propsList.description} subtitle={propsList.subtitle} credit={propsList.credit} publisher={propsList.publisher} />
                    </div>
                  ) 
                })}
            </div>
            {/* ///////////////////////////////////////////////////// */}
          </div>
        </Layout>
        <MediaCarousel>
          <div className={styles.media_container}>
            {mediaClipPropsList.map((propsList, index) => {
                return (
                  <div className={styles.media_clip_container} key={index}>
                    <VideoClipSmall src={propsList.video}/>
                    <MediaClip title={propsList.title} description={propsList.description} subtitle={propsList.subtitle} credit={propsList.credit} publisher={propsList.publisher} />
                  </div>
                ) 
              })}
          </div>
        </MediaCarousel>

      </section>
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