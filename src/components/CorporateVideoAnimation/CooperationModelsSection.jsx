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
      title: "Simplify Complex Information",
      text: "Animated corporate video controls the sequence and pacing of information delivery, making it the most effective format for communicating complex services, systems, or processes clearly."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Increase Audience Engagement",
      text: "Video animation for business consistently generates higher engagement and completion rates than static content, keeping audiences in contact with the brand message longer."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Improve Brand Awareness",
      text: "Consistent animated business videos across touchpoints build brand recognition and recall more effectively than text-and-image content at equivalent distribution levels."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Generate More Leads",
      text: "Landing pages with corporate explainer videos convert at meaningfully higher rates than static pages by reducing the cognitive friction between a visitor and a conversion decision."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Boost Marketing ROI",
      text: "A single well-produced animated corporate video can be deployed across paid social, email, website, and sales enablement simultaneously, multiplying the return on a single production investment."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Improve Employee Learning and Retention",
      text: "Corporate training videos improve knowledge retention compared to text-only training materials, particularly for procedural, compliance, and technical content."
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
            <p className="subtitle">Business Benefits</p>
            <h2 className={styles.mainHeading}>Benefits of Corporate Video Animation for Businesses</h2>
            <p className={styles.topParagraph}></p>
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
