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
      title: "Strategy-Driven Commercial Production",
      text: "Every animated commercial we produce is traceable to a specific business objective. Not an aesthetic preference. Not a creative direction that felt right in the pitch. A conversion goal that was established before the first frame was drawn."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Experienced Animation Specialists",
      text: "Our team has produced animated commercial content across product, brand, direct response, and broadcast categories. The experience is relevant to the brief, not just extensive on a resume."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Conversion-Focused Creative Approach",
      text: "The hook structure, the pacing of the value proposition, the timing of the call to action: all of these are strategic decisions made with the conversion objective in front of us, not aesthetic decisions made because they looked good in the animatic."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Premium Visual Quality",
      text: "Broadcast-quality production on every commercial we produce. Not as a premium tier. As the standard."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Custom Commercial Solutions",
      text: "Every animated commercial brief is treated as a unique business problem that requires a specific solution. A template commercial animation applied regardless of context is what you get when you hire the wrong animated commercial production company."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround Times",
      text: "Most animated commercial productions are completed in three to six weeks from a brief sign-off, depending on complexity. Rush production available for campaign launch deadlines."
    },
    {
      id: 7,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Project Management",
      text: "One project manager from strategy through delivery. Every milestone is dated. Every approval is documented. No surprises at the final delivery."
    },
    {
      id: 8,
      icon: "/game-development/managed-outsourcing.png",
      title: "Proven Client Success",
      text: "Our animated commercial production record is measured in client metrics, not internal awards. The commercial worked, or it did not, and we track the difference."
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
              Why Choose Our Animated Commercial Production Company?
            </h2>

            <p className={styles.topParagraph}>
              We combine strategic thinking, creative storytelling, and premium animation production to create commercials that improve brand awareness, engagement, and conversion performance.
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
