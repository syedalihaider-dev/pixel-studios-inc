"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Play, Pause, ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PressReleaseNews.module.css';

const newsData = [
  {
    id: 1,
    date: 'June 8, 2026',
    title: 'Accenture and Software Engineering Institute Launch AI Adoption Maturity Model'
  },
  {
    id: 2,
    date: 'June 15, 2026',
    title: 'Global Cyber Workforce Expected to Grow by 20% in the Next Decade'
  },
  {
    id: 3,
    date: 'June 22, 2026',
    title: 'New Cloud Computing Regulations and What They Mean for Enterprise Security'
  },
  {
    id: 4,
    date: 'July 1, 2026',
    title: 'Accenture Named a Leader in Digital Transformation Services for 2026'
  },
  {
    id: 5,
    date: 'July 10, 2026',
    title: 'Pioneering Sustainable Supply Chain Solutions for a Greener Tomorrow'
  }
];

export default function PressReleaseNews() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const swiperRef = useRef(null);

  const handlePlayPause = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className={styles.section}>

      {/* Top Header */}
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <h2 className={styles.mainHeading}>Accenture news</h2>
        </motion.div>
      </div>

      {/* Full Width Slider */}
      <motion.div
        className={styles.sliderWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 30 },
            1024: { slidesPerView: 1.2, spaceBetween: 40 },
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={800}
          onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex + 1)}
          className={styles.mySwiper}
        >
          {newsData.map((news) => (
            <SwiperSlide key={news.id}>
              <div className={styles.newsCard}>
                <p className={styles.date}>{news.date}</p>
                <h3 className={styles.title}>{news.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Controls Container */}
      <div className="container">
        <motion.div
          className={styles.customControls}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <button className={styles.playPauseBtn} onClick={handlePlayPause}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <div className={styles.rightControls}>
            <button className={styles.navBtn} onClick={handlePrev}>
              <ArrowLeft size={20} />
            </button>
            <span className={styles.fractionPagination}>
              {currentSlideIndex} / {newsData.length}
            </span>
            <button className={styles.navBtn} onClick={handleNext}>
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
