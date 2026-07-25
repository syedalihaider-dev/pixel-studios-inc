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
      title: "Improve Product Presentation",
      text: "Professional 3D models present products with a consistency and polish that photography cannot always match, particularly across large catalogs where lighting and angle consistency matter."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Accelerate Product Development",
      text: "Digital prototyping shortens iteration cycles by removing the wait time of physical sample production, letting teams test design variations in days rather than weeks."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Enhance Customer Engagement",
      text: "Interactive 3D visualization keeps customers engaged longer than static images across web and retail platforms, directly improving time on page and conversion metrics."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Reduce Production Costs",
      text: "3D asset creation services reduce the need for repeated physical photoshoots for every new angle, color variant, or marketing update, lowering the long-term cost of visual content."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Support Interactive Experiences",
      text: "Real-time 3D assets are essential for AR, VR, and configurator-style interactive product experiences that let customers customize and explore before purchasing."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Improve Design Accuracy",
      text: "Precision modeling from CAD to 3D modeling workflows reduces costly errors before physical manufacturing begins, catching dimensional issues while they are still cheap to fix."
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
            <p className="subtitle">Our Key Benefits</p>
            <h2 className={styles.mainHeading}>Key Benefits of Professional 3D Modeling Services</h2>
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
