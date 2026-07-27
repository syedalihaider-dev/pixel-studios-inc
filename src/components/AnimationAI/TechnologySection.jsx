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

const TechnologySection = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const cards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Scientific Complexity",
      text: "A patient education animation costs less than a molecular mechanism animation requiring extensive scientific research and anatomical modeling from validated sources."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Animation Style and Detail Level",
      text: "Photorealistic 3D medical animation costs more than stylized diagram-style animation, each appropriate for different audiences and communication goals."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Medical Review Requirements",
      text: "Projects requiring multiple rounds of clinical review or regulatory-level accuracy documentation add production time beyond standard revision cycles."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Project Scope and Duration",
      text: "A single MOA animation costs less than a full product launch content suite covering device demonstration, patient education, and HCP training."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Asset Development Needs",
      text: "Custom anatomical modeling from validated literature costs more than adapting existing approved structures to a new clinical context."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Production Timeline",
      text: "Rush medical animation projects require compressed review cycles and resource reallocation that affect the final production cost."
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
            <p className="subtitle">Pricing Factors</p>
            <h2 className={styles.mainHeading}>Medical Animation Pricing and Project Cost Factors</h2>
            <p className={styles.topParagraph}>
              Medical animation services' cost reflects the clinical accuracy requirements and medical review cycles that distinguish this category from general animation production.
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

export default TechnologySection;
