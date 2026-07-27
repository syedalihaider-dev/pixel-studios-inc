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
      title: "Simplify Complex Medical Information",
      text: "Medical 3D animation services make molecular, cellular, and anatomical processes visible and comprehensible to audiences without requiring years of scientific training."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Improve Patient Understanding",
      text: "Patients who receive animated explanations of their diagnosis and treatment demonstrate better comprehension and higher adherence rates than those receiving text-only materials."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Enhance Healthcare Marketing Results",
      text: "Medical animation services business applications consistently outperform static creative in HCP engagement, with higher recall and clearer differentiation of product mechanism."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Support Scientific Communication",
      text: "Complex biological data presented through scientifically accurate animation is more persuasive and better retained than the same information in written scientific language."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Increase Audience Engagement",
      text: "Medical animation videos hold physician and patient attention significantly longer than static materials across both in-person and digital distribution contexts."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Strengthen Product Adoption",
      text: "Physicians and patients who clearly understand how a medical device or pharmaceutical works are more likely to adopt and recommend it, making clinical clarity a commercial advantage."
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
            <p className="subtitle">Medical Benefits</p>
            <h2 className={styles.mainHeading}>Key Benefits of Professional Medical Animation Services</h2>
            <p className={styles.topParagraph}>
              The case for professional medical animation is not aesthetic — it is clinical and commercial. Patients who understand their condition make better treatment decisions. Healthcare providers who communicate clearly reduce liability exposure. Medical device companies that demonstrate mechanisms visually close sales cycles faster. These are the outcomes professional medical animation is built to deliver, and the standard we hold every project to.
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
