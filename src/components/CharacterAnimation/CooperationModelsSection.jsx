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
      title: "Character Design Files",
      text: "Approved character design files provide the visual foundation for the entire animation process. Front, side, and perspective views, color references, expression sheets, and any existing style guides help establish the character's proportions, personality, and intended movement style before production begins. The more complete the design package, the more accurately the final animation reflects the original creative vision."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Rigged Models",
      text: "Rigged character models prepared for animation allow production to begin immediately. We review skeleton hierarchy, controller setup, weight painting, constraints, facial rigs, and documented bone naming conventions to confirm the rig is suitable for production. Any technical issues are identified and resolved before animation starts, preventing delays later in the pipeline."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Concept Art",
      text: "Character concept art helps define personality, visual language, costume details, expressions, and overall performance direction. Even when final production models already exist, concept artwork provides valuable creative context that influences posing, body mechanics, acting choices, and the emotional performance delivered throughout the animation."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Storyboards",
      text: "Storyboards provide a clear visual blueprint for complex animation sequences before production begins. Camera angles, scene progression, character actions, emotional beats, and performance timing are established in advance, allowing animators to focus on execution rather than making structural storytelling decisions during production."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Voiceovers",
      text: "Final recorded dialogue is required for any project involving facial animation or lip sync. Working from approved voice recordings allows animators to synchronize phonemes, facial expressions, eye movement, and body performance accurately, resulting in natural character acting that matches both the dialogue and the intended emotional delivery."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Animation References",
      text: "Reference footage, motion studies, previous animations, or visual examples help establish the desired animation style, pacing, acting quality, and movement language before production begins. These references ensure every animator works toward a consistent visual standard while reducing interpretation differences throughout the project."
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
            <p className="subtitle">PROJECT REQUIREMENTS</p>

            <h2 className={styles.mainHeading}>
              What Do We Need to Start Your Character Animation Project?
            </h2>

            <p className={styles.topParagraph}>
              A successful character animation project begins with complete production assets and clear creative direction. Character designs, rigged models, concept artwork, storyboards, voice recordings, and animation references allow our team to begin production efficiently while ensuring every movement, performance, and technical decision aligns with your creative vision from the very first stage.
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
