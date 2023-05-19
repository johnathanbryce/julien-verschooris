import React, { useRef } from 'react';
import styles from './MediaCarousel.module.css'

interface CarouselProps {
  itemsInView: number,
  children: any
}

const Carousel = ({ itemsInView, children }: CarouselProps) => {
  const carouselRef: any = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth / itemsInView;
  };

  const scrollRight = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth / itemsInView;
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.buttonLeft} onClick={scrollLeft}>
        &lt;
      </button>
      <div className={styles.carousel} ref={carouselRef}>
        {children}
      </div>
      <button className={styles.buttonRight} onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
