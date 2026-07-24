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
      title: "Experienced Motion Designers and Animators",
      text: "Production experience across every major industry and digital platform. The experience is relevant to your brief, not just extensive on a resume."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Tailored Creative Solutions",
      text: "Every production starts with your brand identity, your audience, and your objective. The creative direction follows from there, not from our house style applied to every client regardless of fit."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Project Management",
      text: "One project manager. One point of contact. One person is accountable for the schedule, the communication, and the outcome from brief to delivery."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround Times",
      text: "Most motion graphics productions are completed in two to four weeks from a brief sign-off. Rush production is available and priced honestly without quality compromise."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Scalable Production Capabilities",
      text: "From a single social asset to a 20-piece campaign library, we scale production to the scope. Multi-asset productions share style systems that reduce per-asset cost without reducing quality."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Quality-Focused Production Workflow",
      text: "Every production goes through a structured internal quality check before it reaches you. We catch the problems before they become revision requests on your end."
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
            <h2 className={styles.mainHeading}>Why Choose Our Motion Graphics Company?</h2>
            <p className={styles.topParagraph}>
              We focus on clear communication, steady progress, and deliverables you can actually use. Pixels Studios works best with clients who value clarity and consistency over quick, flashy results.
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
