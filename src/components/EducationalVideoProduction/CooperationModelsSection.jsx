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
      title: "Static Legal Graphics",
      text: "Diagrams, maps, medical illustrations, and timeline exhibits as static images. Used for information that does not require motion and for courtrooms where video presentation is unavailable."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Animated Demonstratives",
      text: "Animation depicting event sequences and mechanisms in motion. More effective than static graphics for causation evidence where the sequence of events is at issue."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Interactive Trial Presentations",
      text: "Attorney-controlled presentations allowing real-time navigation of exhibits during testimony."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "When Each Option Works Best",
      text: "Static graphics for complex data requiring extended viewing. Animation for event sequences and mechanisms. Interactive presentations for complex multi-exhibit trials requiring attorney pacing control."
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
            <p className="subtitle">COMPARE LEGAL</p>

            <h2 className={styles.mainHeading}>
              Legal Graphics vs Legal Animation: What's the Difference?
            </h2>

            <p className={styles.topParagraph}>
              Different legal visualization formats serve different courtroom purposes. Static graphics, animation, and interactive presentations each provide unique advantages depending on the complexity of the evidence and how attorneys need to present their case.
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
