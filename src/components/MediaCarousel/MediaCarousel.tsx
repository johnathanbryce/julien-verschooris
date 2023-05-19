import React, { useRef, useState, useEffect } from 'react';
import styles from './MediaCarousel.module.css'
// external libraries
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface MediaCarouselProps {
  children?: any
}

const MediaCarousel = ({ children }: MediaCarouselProps) => {
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);;


  const handleMouseDownScrollLeft = () =>{
    let intervalId = setInterval(() => {
      onPressScrollTimesContainerLeft();
    }, 10);
    
    const handleMouseUp = () => {
      clearInterval(intervalId);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDownScrollRight = () =>{
    let intervalId = setInterval(() => {
      onPressScrollTimesContainerRight();
    }, 10);
    
    const handleMouseUp = () => {
      clearInterval(intervalId);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    
    window.addEventListener('mouseup', handleMouseUp);
  };
  
  const onPressScrollTimesContainerLeft = () =>{
    console.log(scrollableContainerRef.current)
    if (scrollableContainerRef.current) {
      
      scrollableContainerRef.current.scrollLeft -= 2000;
    }
  }

  const onPressScrollTimesContainerRight = () =>{
    console.log(scrollableContainerRef.current)
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollLeft += 2000;
    }
  }
  
  return (
    <section className={styles.media_carousel}>
      <div className={styles.carousel_container} >    
      <FaChevronLeft className={`${styles.arrow} ${styles.arrow_left}` } onClick={onPressScrollTimesContainerLeft} onMouseDown={handleMouseDownScrollLeft}  />    
        <div className={styles.scrollable_container} ref={scrollableContainerRef}>
          {children}
        </div>
      <FaChevronRight className={`${styles.arrow} ${styles.arrow_right}`} onClick={onPressScrollTimesContainerRight} onMouseDown={handleMouseDownScrollRight}  />
      </div>
    </section>
  )
}

export default MediaCarousel;
