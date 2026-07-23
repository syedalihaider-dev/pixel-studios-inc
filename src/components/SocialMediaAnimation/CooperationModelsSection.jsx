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
      title: "Experienced Video Editors",
      text: "Our video editing team has worked across corporate, marketing, social media, e-learning, healthcare, and entertainment content with cross-industry post production experience that reduces briefing overhead on every new project."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Fast Turnaround Times",
      text: "Most standard video editing projects complete in three to seven business days from footage delivery and brief sign-off. Rush delivery available. Quality protected within compressed timelines."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Project Managers",
      text: "One project manager from brief to delivery on every project. One point of contact. Every milestone dated. Every revision round structured and documented."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Scalable Editing Support",
      text: "From a single campaign video to an ongoing video editing agency partnership managing a full content calendar, we scale the team and workflow to the volume and frequency you need."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "High-Quality Production Standards",
      text: "Broadcast-standard color grading, professional audio mixing, and platform-specific export quality on every delivery. Not a premium tier. The baseline."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Flexible Engagement Models",
      text: "Project-based video editing services for one-off campaigns. Retainer-based online video editing services for brands and creators with ongoing production needs. Both options priced transparently."
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
            <p className="subtitle">Quality. Speed. Reliability</p>
            <h2 className={styles.mainHeading}>Why Choose Our Video Editing Company?</h2>
            <p className={styles.topParagraph}>
              What specifically distinguishes Pixels Studios as a professional video editing agency.
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
