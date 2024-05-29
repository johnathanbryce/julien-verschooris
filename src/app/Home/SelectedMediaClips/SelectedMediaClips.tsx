
import styles from './SelectedMediaClips.module.css'
//internal assets
import clioGrandAward from '../../../../public/images/clioGrandAward.png'
import madeForLove from '../../../../public/images/madeForLove.jpg'
import theOperative from '../../../../public/images/theOperative.jpg'
import appleWatch from '../../../../public/images/appleWatch.png'
import coextinction from '../../../../public/images/coexPoster.jpg'
import natureConservancy from '../../../../public/images/natureConservatory.jpg'
// internal components
import Layout from '@/components/Layout/Layout'
import MediaClip from '@/components/MediaClip/MediaClip';
import VideoClip from '@/components/VideoClip/VideoClip';
import VideoClipSmall from '@/components/VideoClipSmall/VideoClipSmall';
import MediaCarousel from '@/components/MediaCarousel/MediaCarousel';
import MediaClipSmallScreen from '@/components/MediaClipSmallScreen/MediaClipSmallScreen';

// internal lists
import mediaClipPropsList from '../../lists/mediaCipPropsList'

function SelectedMediaClips() {
  return (
    <section className={styles.selected_media} id="reel" >
      <Layout>
        <div className={styles.selected_media_column_gap} >
          <h2> Selected Media Clips </h2>
          <div  className={styles.media_container_highlight}>
            <div className={styles.media_clip_container_highlight}>
              <VideoClip src="/coextinction.mp4" border='none'/>
              <MediaClip
                title='Coextinction Trailer'
                description="Trailer for the Canadian Screen Award nominated & CASMA nominated documentary Coextinction."
                subtitle=""
                credit=""
                publisher=""
                winner={false}
                winnerImageSrc={''}
              />
            </div>
          </div>
          {/*SMALL SCREEN STACKED COLUMN LAYOUT (<1300px screen width): */}
          <div className={styles.media_container_small_screen}>
              <MediaClipSmallScreen 
                  title='Coextinction Trailer'
                  description="Trailer for the Canadian Screen Award nominated & CASMA nominated documentary Coextinction.."
                  imageSrc={coextinction}
                  videoSrc='/coextinction.mp4'
              />
              <MediaClipSmallScreen 
                  title='Made for Love Official Teaser'
                  description="A custom trailer arrangement of Beyonce's 'Crazy in Love', lyrics performed by Ray Romano.."
                  imageSrc={madeForLove}
                  videoSrc='/madeForLove.mp4'
                  isRowReverse={true}
              />
              <MediaClipSmallScreen 
                  title='Apple Watch Series 6'
                  description="A custom trailer arrangement of Kelly Lee Owen's 'On'."
                  imageSrc={appleWatch}
                  videoSrc='/appleWatch.mp4'
                  
              />
              <MediaClipSmallScreen 
                  title='The Operative Trailer'
                  description="A track from Phoenician Order Music catalog used in the trailer."
                  imageSrc={theOperative}
                  videoSrc='/theOperative.mp4'
                  isRowReverse={true}
              />
{/*               <MediaClipSmallScreen 
                  title='Nature Conservancy USA'
                  description="Recent score for The Nature Conservancy, USA"
                  imageSrc={natureConservancy}
                  videoSrc='/natureConservancy.mp4'
              /> */}
          </div>
          {/* ///////////////////////////////////////////////////// */}
          </div>
        </Layout>
        <MediaCarousel carouselType='mediaClips'>
          <div className={styles.media_container}>
            {mediaClipPropsList.map((propsList, index) => {
                return (
                  <div className={styles.media_clip_container} key={index}>
                    <VideoClipSmall src={propsList.video}/>
                    <MediaClip 
                      title={propsList.title} 
                      description={propsList.description} 
                      subtitle={propsList.subtitle} 
                      credit={propsList.credit} 
                      publisher={propsList.publisher} 
                    />
                  </div>
                ) 
              })}
          </div>
        </MediaCarousel>
      </section>
  )
}

export default SelectedMediaClips

{/*               {mediaClipPropsList.map((propsList, index) => {
                  return (
                    <div className={styles.media_clip_container_highlight} key={index}>
                      <VideoClip src={propsList.video}/>
                      <MediaClip title={propsList.title} description={propsList.description} subtitle={propsList.subtitle} credit={propsList.credit} publisher={propsList.publisher} />
                    </div>
                  ) 
                })} */}