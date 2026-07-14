"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PressReleaseSlider.module.css';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import CTAButton from '@/components/Common/CTAButton';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Play, Pause, ArrowLeft, ArrowRight } from 'lucide-react';

const sliderData = [
  {
    id: 1,
    heading: 'YMCA turns crisis into capability at scale',
    para: 'YMCA partnered with Accenture to build a community-based model that helps refugees and displaced people gain skills, find work, and rebuild their futures.',
    image: '/press-release/ymca-social-share.webp'
  },
  {
    id: 2,
    heading: 'Empowering future generations with digital skills',
    para: 'Discover how new educational frameworks are closing the digital divide and creating equitable opportunities for youth globally.',
    image: '/press-release/ymca-social-share.webp'
  },
  {
    id: 3,
    heading: 'Sustainability initiatives driving zero-carbon goals',
    para: 'Our latest research highlights the top strategies companies are using to accelerate their transition to renewable energy sources.',
    image: '/press-release/ymca-social-share.webp'
  },
  {
    id: 4,
    heading: 'Next-gen healthcare: AI in patient monitoring',
    para: 'Hospitals are deploying AI-driven tools to enhance patient care, reduce response times, and improve overall health outcomes.',
    image: '/press-release/ymca-social-share.webp'
  },
  {
    id: 5,
    heading: 'The future of work: Embracing hybrid models',
    para: 'A deep dive into how organizations are restructuring their operations to support flexible, hybrid work environments.',
    image: '/press-release/ymca-social-share.webp'
  }
];

export default function PressReleaseSlider() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className={styles.section}>
      <div className="">

        {/* Top Content */}
        <motion.div
          className={styles.topContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.mainHeading}>360° Value</h2>
          <p className={styles.mainPara}>
            Every day, we embrace change and create value for all our stakeholders around the world.
          </p>
          <CTAButton text="See the report" href="#" />
        </motion.div>
      </div>

      {/* Slider Section - Full Width */}
      <motion.div
        className={styles.sliderWrapper}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={800}
          onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex + 1)}
          className={styles.mySwiper}
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.slideInner}>
                <div className="row g-0 h-100">
                  {/* Left Side: Text */}
                  <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-center">
                    <div className={styles.slideTextContent}>
                      <h3 className={styles.slideHeading}>{slide.heading}</h3>
                      <p className={`${styles.slidePara} scroll_block`}>{slide.para}</p>
                      <CTAButton text="Read More" href="#" className={styles.sliderCtaButton} />
                    </div>
                  </div>
                  {/* Right Side: Image */}
                  <div className="col-lg-6 col-md-12">
                    <div className={styles.slideImageWrapper}>
                      <Image
                        src={slide.image}
                        alt={slide.heading}
                        width={960}
                        height={500}
                        className={styles.slideImage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Controls Container */}
      <div className="container">
        <div className={styles.customControls}>
          <button className={styles.playPauseBtn} onClick={handlePlayPause}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <div className={styles.rightControls}>
            <button className={styles.navBtn} onClick={handlePrev}>
              <ArrowLeft size={20} />
            </button>
            <span className={styles.fractionPagination}>
              {currentSlideIndex} / {sliderData.length}
            </span>
            <button className={styles.navBtn} onClick={handleNext}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
