import React, { useRef, useEffect } from 'react';
import styles from './MediaCarousel.module.css'
// external libraries
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface MediaCarouselProps {
  children?: any,
  carouselType: 'mediaClips' | 'posters'
}

const MediaCarousel = ({ children, carouselType }: MediaCarouselProps) => {
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);;

  let animationFrameId: number | null = null;

  const handleMouseDownScrollLeft = () => {
    animationFrameId = requestAnimationFrame(scrollContainerLeft);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseUp);
  };

  const handleMouseDownScrollRight = () => {
    animationFrameId = requestAnimationFrame(scrollContainerRight);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseUp);
  };

  const handleMouseUp = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('mouseleave', handleMouseUp);
  };

  useEffect(() => {
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);
  
  const scrollContainerLeft = () =>{
    if (scrollableContainerRef.current) {
      if(carouselType === 'mediaClips'){
        scrollableContainerRef.current.scrollLeft -= 1500;
      } else if (carouselType === 'posters'){
        scrollableContainerRef.current.scrollLeft -= 300;
      } else {
        console.log('add another carousel type')
      }
    }
  }

  const scrollContainerRight = () =>{
    if (scrollableContainerRef.current) {
      if(carouselType === 'mediaClips'){
        scrollableContainerRef.current.scrollLeft += 1500;
      } else if (carouselType === 'posters'){
        scrollableContainerRef.current.scrollLeft += 300;
      } else {
        console.log('add another carousel type')
      }
    }
  }
  
  return (
    <section className={styles.media_carousel}>
        { carouselType === 'mediaClips' &&
          <div className={styles.carousel_container} >
            <FaChevronLeft className={`${styles.arrow} ${styles.arrow_left}` } onClick={scrollContainerLeft} onMouseDown={handleMouseDownScrollLeft}  />    
            <div className={styles.scrollable_container} ref={scrollableContainerRef}>
              {children}
            </div>
            <FaChevronRight className={`${styles.arrow} ${styles.arrow_right}`} onClick={scrollContainerRight} onMouseDown={handleMouseDownScrollRight}  />
          </div>
        }
        {
          carouselType === 'posters' &&
          <div className={styles.carousel_container} >
            <FaChevronLeft className={`${styles.arrow} ${styles.arrow_unhidden}` } onClick={scrollContainerLeft} onMouseDown={handleMouseDownScrollLeft}  />    
            <div className={styles.scrollable_container} ref={scrollableContainerRef}>
              {children}
              </div>
              <FaChevronRight className={`${styles.arrow} ${styles.arrow_unhidden}`} onClick={scrollContainerRight} onMouseDown={handleMouseDownScrollRight}  />
          </div>          
        }
    </section>
  )
}

export default MediaCarousel;
