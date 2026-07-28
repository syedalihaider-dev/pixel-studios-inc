"use client";
import React, { useState } from 'react';
import styles from './CooperationModelsSection.module.css';
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
      title: "Handcrafted Artistic Appeal",
      text: "Visual texture and organic imperfection that signals genuine craftsmanship to an audience increasingly aware of templated production. Handcrafted animation creates a unique visual character where every frame carries intentional artistic decisions that distinguish the final content from automated or repetitive animation styles."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Dynamic Character Performance",
      text: "Expressive range that frame-by-frame drawing achieves more convincingly than rigged puppet interpolation for certain performance styles. Traditional and hybrid techniques allow animators to push poses, timing, and emotional expressions beyond standard rig limitations when the creative direction demands a more distinctive performance."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Distinctive Visual Identity",
      text: "Content that does not resemble the templated production flooding every content category, producing genuine brand recall. A carefully crafted animation style creates a recognizable visual language that helps brands, creators, and studios establish a stronger connection with their audience."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Greater Creative Flexibility",
      text: "No rig constraints limiting what a character can physically do. If it can be drawn, it can be animated. Frame-by-frame and hybrid approaches provide complete creative freedom to design movements, transformations, and visual moments that would be difficult or impossible through traditional rig-based animation systems."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Rich Visual Detail",
      text: "Frame-level control over every visual element, producing a density of intentional detail that automated interpolation does not offer. Each movement, expression, effect, and visual transition can be carefully crafted to support the artistic direction and emotional impact of the project."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Timeless Animation Aesthetics",
      text: "A visual style with decades of proven audience affection that does not date the way templated motion graphics trends do. Cel and hybrid animation techniques provide a lasting artistic quality that continues to feel intentional, memorable, and visually relevant across different audiences and platforms."
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
            <p className="subtitle">HYBRID & CEL ANIMATION</p>

            <h2 className={styles.mainHeading}>
              Why Creators Choose Hybrid and Cel Animation?
            </h2>

            <p className={styles.topParagraph}>
              Hybrid and cel animation provide creators with a distinctive visual language built around craftsmanship, expressive performance, and complete artistic control. From handcrafted frame-by-frame details to carefully combined 2D and 3D techniques, these approaches allow brands, studios, and creators to produce animation that feels unique, memorable, and emotionally engaging.
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
