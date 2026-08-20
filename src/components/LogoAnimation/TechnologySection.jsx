"use client";
import React, { useState } from 'react';
import styles from '../Common/CooperationModelsSection.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const CooperationModelsSection = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const cards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Adobe After Effects",
      text: "Primary tool for 2D logo animation, after effects logo animation, kinetic typography, and motion graphics production across the majority of our logo animation work."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Cinema 4D",
      text: "3D logo animation and dimensional logo reveal production for all 3D logo animation company projects requiring photorealistic material and lighting."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Adobe Illustrator",
      text: "Vector logo asset preparation and optimization before entering the After Effects or Cinema 4D animation pipeline."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Blender",
      text: "Open-pipeline 3D production for complex logo reveals, particle-driven animations, and neon logo animation with atmospheric effects."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Premiere Pro",
      text: "Final delivery, color grading, audio mixing, and broadcast-spec export for logo animations with motion backgrounds or accompanying video elements."
    }
  ];

  return (
    <section className={styles.cooperationModelsSection}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="row justify-content-center text-center mb-4">
          <div className="col-12 col-lg-12">
            <p className="subtitle">Software & Technology</p>
            <h2 className={styles.mainHeading}>Logo Animation Software and Technologies</h2>
            <p className={styles.topParagraph}>
              Professional results come from using the right tool for the right job. We work across the industry's leading whiteboard animation and illustration platforms, selecting the best fit based on your project's visual requirements and delivery specs.
            </p>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
          }}
          className={styles.swiperContainer}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className={styles.swiperSlide}>
              <div className={styles.modelCard}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={61}
                    height={61}
                  />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={`${styles.cardParagraph} scroll_block`}>
                  {card.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Circle Navigation Buttons */}
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

export default CooperationModelsSection;
