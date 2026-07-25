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
      title: "Technical Complexity",
      text: "A single equipment demonstration costs less than a full plant operation animation involving multiple integrated mechanical systems and workflows."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Equipment and Asset Requirements",
      text: "Projects with existing CAD models cost less than those requiring assets built from photographs or written specifications alone from scratch."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Animation Duration",
      text: "A 30-second equipment overview costs less than a multi-minute facility-wide process walkthrough with several distinct sequences and camera setups."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Engineering Data Availability",
      text: "Complete engineering drawings and CAD models reduce production time compared to incomplete or outdated technical documentation that requires reconstruction."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Rendering Requirements",
      text: "Photorealistic rendering for marketing use requires more production time than functional visualization built for internal training purposes only."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Production Timeline",
      text: "Rush industrial animation projects cost more due to compressed engineering review and rendering schedules that require resource reallocation."
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
            <h2 className={styles.mainHeading}>Industrial Animation Pricing and Project Cost Factors</h2>
            <p className={styles.topParagraph}>
              Industrial animation pricing reflects the technical complexity and engineering review required, and we provide transparent, itemized quotes for every project rather than a flat industry rate.
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
