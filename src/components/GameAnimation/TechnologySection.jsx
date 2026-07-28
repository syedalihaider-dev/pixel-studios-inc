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
      title: "Litigation-Focused Production Team",
      text: "Our legal animation team works exclusively on litigation production and understands the evidentiary standards, admissibility requirements, and expert witness collaboration that distinguish legal animation from commercial animation."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Courtroom Presentation Expertise",
      text: "We produce in formats that work in real courtrooms on the display equipment courts actually have, at the resolution that courtroom projectors actually support."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "High Accuracy Standards",
      text: "Every factual element is traceable to a specific evidence source. We do not fill evidence gaps with reasonable assumptions. We present what the evidence establishes and document what it does not."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Attorney Collaboration Process",
      text: "We work directly with the attorney and retained expert witnesses throughout production. The animation reflects the legal theory and expert opinion, not our interpretation."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround Options",
      text: "Expedited production for cases approaching trial with compressed timelines. We treat trial dates as hard deadlines."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Confidential Case Handling",
      text: "NDAs signed before any case information is shared. Client information, case details, and discovery materials are handled under strict confidentiality and never referenced outside the specific engagement."
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
            <p className="subtitle">WHY CHOOSE US</p>

            <h2 className={styles.mainHeading}>
              Why Choose Pixels Studios for Legal Graphics Animation?
            </h2>

            <p className={styles.topParagraph}>
              Our legal graphics and animation services are built specifically for litigation support. Every visual is produced with accuracy, confidentiality, and courtroom presentation requirements in mind while working closely with attorneys and expert witnesses throughout the process.
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
