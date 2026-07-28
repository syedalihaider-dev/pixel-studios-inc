"use client";
import React, { useState } from 'react';
import styles from './EnginesSection.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const EnginesSection = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const engineItems = [
    {
      id: 1,
      title: "Unity Animation Services",
      description: "Animation delivered for Unity's Animator Controller system with correct state machine integration, transition conditions, and blend tree setup. Tested in the engine before delivery.",
      icon: "/game-development/unity.png",
      isImage: true,
      width: 80,
      height: 83
    },
    {
      id: 2,
      title: "Unreal Engine Animation Services",
      description: "Animation for Unreal's Anim Blueprint system with correct bone naming, retarget source assignment, and Animation Montage structure. Integrated and tested in the target build.",
      icon: "/game-development/unreal-engine.png",
      isImage: true,
      width: 73,
      height: 83
    },
    {
      id: 3,
      title: "Godot Animation Services",
      description: "Animation for Godot's AnimationPlayer and AnimationTree systems, exported in the formats the engine imports correctly.",
      icon: "/game-development/unity.png",
      isImage: true,
      width: 80,
      height: 83
    },
    {
      id: 4,
      title: "Custom Engine Animation Pipelines",
      description: "Animation for proprietary and custom engines where the delivery specification is defined by the technical team and followed exactly.",
      icon: "/game-development/unreal-engine.png",
      isImage: true,
      width: 73,
      height: 83
    }
  ];

  return (
    <section className={styles.enginesSection}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-10">
            <p className="subtitle">GAME ENGINES</p>
            <h2 className={styles.mainHeading}>Animation for Popular Game Engines</h2>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className={styles.swiperWrapper}>
          <Swiper
            onSwiper={setSwiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              992: { slidesPerView: 2, spaceBetween: 30 }
            }}
            className={styles.swiperContainer}
          >
            {engineItems.map((item) => (
              <SwiperSlide key={item.id} className={styles.swiperSlide}>
                <div className={styles.engineCard}>
                  <div className={styles.cardHeader}>
                    {item.isImage ? (
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        className={styles.cardIcon}
                      />
                    ) : (
                      <div className={styles.svgIconWrapper}>
                        {item.iconSvg}
                      </div>
                    )}
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                  <p className={`scroll_block ${styles.cardParagraph}`}>
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Controls */}
        <div className={styles.navigationWrapper}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => swiperRef?.slidePrev()}
            aria-label="Previous Slide"
          >
            <ArrowLeft size={22} className={styles.navIcon} />
          </button>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => swiperRef?.slideNext()}
            aria-label="Next Slide"
          >
            <ArrowRight size={22} className={styles.navIcon} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default EnginesSection;
