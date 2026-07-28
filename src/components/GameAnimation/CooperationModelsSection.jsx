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
      title: "Character Models",
      text: "Production-quality character models at the visual standard the animation will run at. Final game-ready models with approved topology, proportions, materials, and visual quality provide the foundation for every animation. Using production-ready assets ensures the finished animations integrate correctly into the target game without requiring unnecessary asset revisions."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Rigged Assets",
      text: "Rigged character assets with documented bone naming convention and weight painting reviewed for animation suitability. We assess skeleton hierarchy, controller setup, deformation quality, constraints, and technical stability before production begins to ensure every animation performs correctly throughout the development pipeline."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Animation References",
      text: "Reference footage, existing animation examples, or documented style direction for the animation approach. Visual references establish movement quality, pacing, acting style, and gameplay behavior so every animation follows a consistent creative direction from the first blocking pass through final polish."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Game Design Documents",
      text: "Gameplay specifications that define what each animation needs to accomplish mechanically. Design documentation explains character abilities, movement systems, combat interactions, gameplay states, and player feedback requirements so every animation supports both gameplay functionality and the intended player experience."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Storyboards",
      text: "Storyboards for cinematic and cutscene animation covering camera, character position, and narrative beat. Storyboards establish scene composition, character performance, camera movement, timing, and storytelling before animation production begins, reducing revisions while keeping every cinematic sequence aligned with the creative vision."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Gameplay Requirements",
      text: "Frame timing requirements, hitbox specifications, and the gameplay information the animation needs to communicate. Technical gameplay requirements ensure every animation delivers accurate player feedback, supports gameplay mechanics, synchronizes with collision systems, and performs correctly inside the target game engine."
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
              What Do We Need to Start Your Game Animation Project?
            </h2>

            <p className={styles.topParagraph}>
              Successful game animation begins with complete production assets, technical documentation, and clearly defined gameplay requirements. Character models, rigged assets, animation references, game design documents, storyboards, and gameplay specifications allow our team to create animations that not only look natural but also integrate seamlessly into your game engine while supporting every gameplay mechanic and player interaction.
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
