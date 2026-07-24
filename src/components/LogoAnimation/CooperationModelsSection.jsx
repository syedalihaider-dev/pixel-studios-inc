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
      title: "Minimal Logo Animation",
      text: "Clean, subtle motion for brands whose identity is built on restraint and precision. Works for premium consumer brands, professional services, and technology companies where understatement is part of the positioning."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Kinetic Typography Logo Animation",
      text: "Text-led motion where the brand name carries the animation. Effective for wordmark-based identities where the name itself is the primary recognition asset."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Cinematic Logo Reveals",
      text: "High-production reveals with dramatic lighting, depth, and camera choreography. The right choice for entertainment brands and companies whose brand presence needs to feel large and authoritative."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Modern Motion Graphics Logo Animation",
      text: "Contemporary motion design applied to brand mark animation. Dynamic, current, and platform-flexible. Works well for SaaS brands and digital-first companies in visual-attention markets."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "3D Logo Reveals",
      text: "Dimensional reveals with material, lighting, and shadow. Our 3D logo animation company produces photorealistic 3D logo reveals for broadcast, corporate video, and premium digital content."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Particle and Visual Effects Animation",
      text: "VFX-driven logo reveals using particle systems, light trails, and atmospheric effects. Neon logo animation and energy-based motion for brands whose identity has edge and visual complexity."
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
            <p className="subtitle">Why Choose Our</p>
            <h2 className={styles.mainHeading}>Types of Logo Animation Styles</h2>
            <p className={styles.topParagraph}>
              Every logo has a personality and every brand has a context. Here are the styles our logo animation company works in and when each one is the right choice.
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
