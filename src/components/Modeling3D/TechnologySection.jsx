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
      title: "Model Complexity and Detail Level",
      text: "Low-poly modeling for real-time use costs less than high-poly modeling for photorealistic rendering, since the latter demands significantly more sculpting and detail work."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Asset Type and Project Scope",
      text: "A single hero product model costs less than a full character or environment asset library, requiring multiple interconnected pieces."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Texturing and Material Requirements",
      text: "PBR texturing and complex material setups add production time beyond base geometry work, particularly for assets with varied surface properties."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Animation and Rigging Requirements",
      text: "Models requiring rigging for animation cost more than static visualization assets due to the additional technical preparation involved."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Delivery Formats",
      text: "Multiple export formats for different engines or rendering pipelines add to the production scope when a single asset needs to work across platforms."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Project Timeline",
      text: "Rush 3D modeling services cost more than standard timelines due to resource prioritization and compressed review windows."
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
            <p className="subtitle">Why Choose</p>
            <h2 className={styles.mainHeading}>3D Modeling Services Pricing and Cost Factors</h2>
            <p className={styles.topParagraph}>
              3D modeling services cost is determined by detail level, asset type, and delivery requirements, and we price every project transparently based on the actual scope rather than a flat-rate package.
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
