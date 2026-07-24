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
      title: "Product-Focused Animation Expertise",
      text: "Our product animation experts specialize specifically in product communication, not general-purpose animation applied to a product brief."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Tailored Creative Solutions",
      text: "Every custom product animation starts from your specific buyer objection, not a template animation style applied regardless of category."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Industry-Specific Experience",
      text: "Our team has produced product animation across consumer, industrial, medical, and automotive categories, each with different accuracy and tone requirements."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Premium Visual Quality",
      text: "High-end product animation rendered to broadcast-quality standards regardless of the distribution platform, from a product page to a trade show screen."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Reliable Project Delivery",
      text: "Documented timelines and milestone schedules keep every 3D product animation process on track with dates communicated, not estimated."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Communication",
      text: "One project manager owns every product animation project from discovery through final delivery as a single point of accountability."
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
            <p className="subtitle">why choose us</p>
            <h2 className={styles.mainHeading}>Why Brands Trust Our 3D Product Animation Company?</h2>
            <p className={styles.topParagraph}>
              From global brands to fast-scaling startups, our 3D product animation services consistently deliver measurable impact. Here is why teams partner with us for their most critical product content.
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
