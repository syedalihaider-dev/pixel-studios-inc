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
      title: "Experienced Trailer Production Specialists",
      text: "Our trailer animation studio has produced trailer content for film, gaming, and brand marketing clients. The format expertise is specific, not adapted from general video production experience."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Creative Concepts",
      text: "Every trailer begins with original concept development built around your specific content. No template trailer structures or stock reveal sequences applied regardless of fit."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "High-End Motion Graphics",
      text: "Broadcast-quality motion graphics and title sequence animation produced to the visual standard that premium entertainment and brand content requires."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Project Management",
      text: "One project manager from brief to delivery. Every milestone is dated. Every revision round is structured and documented before production begins."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround Times",
      text: "Most trailer projects are completed in two to four weeks from a brief sign-off, depending on complexity. Rush production available for launch-critical timelines."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Collaborative Revision Process",
      text: "Structured revision rounds where every note is documented and confirmed before changes are made. No guessing at ambiguous feedback on a format where pacing nuance matters enormously."
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
            <h2 className={styles.mainHeading}>Why Choose Our Trailer Animation Company?</h2>
            <p className={styles.topParagraph}>
              With proven results across multiple entertainment verticals, our approach is built to escalate your project’s impact.
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
