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
      title: "VideoScribe",
      text: "The industry-standard whiteboard animation platform for producing clean, hand-drawn animation at scale. We use VideoScribe for projects where the classic draw-on aesthetic is the priority and production timelines are tight without compromising quality."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Adobe After Effects",
      text: "This is ur primary tool for complex motion, custom animation sequences, and whiteboard-style content that requires frame-level precision. After Effects gives us full control over timing, layering, and visual effects that standard whiteboard platforms cannot achieve."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Adobe Illustrator",
      text: "Every custom illustration in a Pixel Studios whiteboard animation begins in Illustrator. Vector artwork built here scales perfectly across every resolution and platform, and integrates cleanly into After Effects and VideoScribe production pipelines without quality loss."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Vyond",
      text: "Used for whiteboard and mixed-style animation projects that require character movement, scene transitions, and richer visual environments alongside the hand-drawn aesthetic. Vyond is particularly effective for training and e-learning content with recurring characters."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Toon Boom",
      text: "Industry-leading animation software used for whiteboard projects requiring sophisticated character rigging, fluid movement, and broadcast-quality output. When a project demands animation that goes beyond the standard whiteboard format, Toon Boom is where we work."
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
            <h2 className={styles.mainHeading}>Whiteboard Animation Software & Technology</h2>
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
