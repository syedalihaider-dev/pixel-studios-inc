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
      title: "Simplify Complex Engineering Concepts",
      text: "Industrial workflow animation translates dense engineering concepts into a format that non-engineers can follow and act on without specialized training."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Improve Training Effectiveness",
      text: "3D industrial training videos improve retention and reduce onboarding time compared to manuals and static diagrams alone, particularly for spatial and mechanical concepts."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Reduce Operational Miscommunication",
      text: "Clear visualization of plant operation animation reduces the costly misunderstandings that occur between engineering teams and external stakeholders or contractors."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Accelerate Sales Cycles",
      text: "Industrial product demonstration animation answers technical questions early in the conversation, shortening the evaluation period for complex equipment purchases."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Enhance Stakeholder Understanding",
      text: "Investors and board members grasp operational complexity faster through technical process visualization than through written reports or static diagrams alone."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Minimize On-Site Demonstration Costs",
      text: "Animated equipment demonstration videos reduce the travel, downtime, and safety risk associated with repeated in-person plant tours for every new prospect."
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
            <h2 className={styles.mainHeading}>Business Benefits of Industrial Animation</h2>
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
