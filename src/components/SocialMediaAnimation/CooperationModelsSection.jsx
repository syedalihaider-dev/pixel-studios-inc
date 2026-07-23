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
      title: "Platform-Specific Video Creation",
      text: "We do not produce one animation and resize it. Every production is built for the platform it will live on: native formats, platform-calibrated pacing, and technical specifications confirmed before production begins."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Animation Solutions",
      text: "Every social media animation production starts from your brief, your brand, and your campaign objective. No template libraries. Custom animated social media videos built specifically for your audience."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Experienced Creative Team",
      text: "Our social media animation agency has produced content for brands across e-commerce, SaaS, healthcare, financial services, and consumer retail. Experience that reduces the learning curve on every new brief."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround Times",
      text: "Most social media animations complete in one to three weeks from brief sign-off. Rush production available. We protect quality within compressed timelines rather than sacrificing it."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Multiple Revision Rounds",
      text: "Two full revision rounds standard in every production. Additional rounds available and priced upfront. All revision terms documented before production begins."
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
            <h2 className={styles.mainHeading}>Why Choose Our Social Media Animation Company?</h2>
            <p className={styles.topParagraph}>
              What specifically distinguishes our professional social media animation agency from the alternatives.
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
